#!/usr/bin/env bash
set -euo pipefail

# Web Component Template Scaffolder v3
# Usage: ./scaffoldv3.sh --name LIB_NAME --class CLASS_NAME --desc DESCRIPTION --author AUTHOR [--dry-run]

# Colors
function log {
  local color=$1
  shift
  echo -e "\e[${color}m$*\e[0m"
}

function log_info { log 36 "ℹ️  $*"; }
function log_success { log 32 "✅ $*"; }
function log_warning { log 33 "⚠️  $*"; }
function log_error { log 31 "❌ $*"; }
function log_dry { log 35 "🔍 $*"; }

# Parse arguments
LIB_NAME=""
CLASS=""
DESC=""
AUTHOR=""
DRY_RUN=false

while [[ $# -gt 0 ]]; do
  case $1 in
    --name) LIB_NAME="$2"; shift 2 ;;
    --class) CLASS="$2"; shift 2 ;;
    --desc) DESC="$2"; shift 2 ;;
    --author) AUTHOR="$2"; shift 2 ;;
    --dry-run) DRY_RUN=true; shift ;;
    --help|-h)
      echo "Usage: $0 --name LIB_NAME --class CLASS_NAME --desc DESCRIPTION --author AUTHOR [--dry-run]"
      echo "  --name     Library name (e.g., my-lib)"
      echo "  --class    Class name (e.g., MyClass)"
      echo "  --desc     Description"
      echo "  --author   Author name"
      echo "  --dry-run  Preview changes without modifying files"
      exit 0
      ;;
    *) log_error "Unknown option: $1"; exit 1 ;;
  esac
done

[[ -z "$LIB_NAME" || -z "$CLASS" || -z "$DESC" || -z "$AUTHOR" ]] && {
  log_error "Missing required arguments"
  echo "Use --help for usage information"
  exit 1
}

log_info "Scaffolding $LIB_NAME web component library..."
[[ "$DRY_RUN" == true ]] && log_dry "DRY RUN MODE - No files will be modified"

# Build replacement array from arguments
REPLACEMENTS=(
  "__LIB_NAME__:$LIB_NAME"
  "__CLASS_NAME__:$CLASS"
  "__DESCRIPTION__:$DESC"
  "__AUTHOR__:$AUTHOR"
  "__TAG_NAME__:${LIB_NAME//-//}"
  "__VERSION__:1.0.0"
  "__LICENSE__:MIT"
  "__MAIN_FILE__:$LIB_NAME"
)

# Build rg query for finding files
rg_query="__($(printf '%s|' "${REPLACEMENTS[@]%%:*}" | sed 's/|$//'))__"

# Find files containing tokens
files_to_modify=$(rg -l "$rg_query" --glob '!node_modules' --glob '!.git' --glob '!dist' --glob '!build' --glob '!.dev' --glob '!*.log' --glob '!*.tmp' --glob '!scaffold*.sh' 2>/dev/null || true)

[[ -z "$files_to_modify" ]] && {
  log_error "No files found containing placeholder tokens"
  exit 1
}

echo "📁 Files to modify:"
echo "${files_to_modify//$'\n'/  $'\n'  }"

if [[ "$DRY_RUN" == true ]]; then
  echo ""
  log_dry "DRY RUN - Would replace tokens:"
  for mapping in "${REPLACEMENTS[@]}"; do
    search="${mapping%%:*}"
    replace="${mapping##*:}"
    echo "  $search → $replace"
  done
  echo ""
  echo "💡 Run without --dry-run to apply changes"
  exit 0
fi

echo ""
log_warning "About to modify files. Continue? [y/N]"
read -r response
[[ "$response" =~ ^[Yy]$ ]] || {
  log_error "Scaffolding cancelled"
  exit 1
}

# Cross-platform sed in-place support
SED_INPLACE=(-i ''); [[ "$OSTYPE" != "darwin"* ]] && SED_INPLACE=(-i)

# Build sed commands
sed_cmds=()
for mapping in "${REPLACEMENTS[@]}"; do
  search="${mapping%%:*}"
  replace="${mapping##*:}"
  sed_cmds+=(-e "s/$search/$replace/g")
done

# Replace tokens
echo "$files_to_modify" | xargs sed "${SED_INPLACE[@]}" "${sed_cmds[@]}"

# Handle README swap - move LIB_README.md to README.md
if [[ -f "LIB_README.md" ]]; then
  log_info "Swapping README files..."
  mv "LIB_README.md" "README.md"
  log_success "README.md updated with component-specific content"
fi

# Rename files
echo "$files_to_modify" | while read -r file; do
  dir=$(dirname "$file")
  base=$(basename "$file")
  new="$base"
  
  for mapping in "${REPLACEMENTS[@]}"; do
    search="${mapping%%:*}"
    replace="${mapping##*:}"
    new="${new//${search}/${replace}}"
  done
  
  if [[ "$new" != "$base" ]]; then
    mv "$file" "$dir/$new"
  fi
done

log_success "Scaffolding complete!"
echo ""
echo "📝 Placeholder tokens replaced:"
for mapping in "${REPLACEMENTS[@]}"; do
  search="${mapping%%:*}"
  replace="${mapping##*:}"
  echo "  $search → $replace"
done
echo ""
echo "🔧 Next: implement component logic, update examples, commit & push"

# Self-destruct after successful scaffolding
if [[ "$DRY_RUN" == false ]]; then
  echo ""
  log_warning "Self-destructing scaffold script..."
  rm -f "$0"
  log_success "Scaffold script removed. Your project is ready!"
fi

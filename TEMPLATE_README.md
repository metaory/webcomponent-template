# Web Component Template Repository

**Production-ready web component scaffolding with live docs, multi-framework examples, and zero-config deployment**

A complete template that transforms your web component idea into a published library with live documentation, working examples for React/Vue/Angular/Vanilla, and automatic GitHub Pages deployment - all in one command.

## What This Is

This is a **complete production environment** that transforms your web component idea into a published library. It includes:

- 📦 **Main Component Structure** - ES6 class-based web component with shadow DOM
- 🎯 **Framework Examples** - Working examples for React, Vue, Angular, and Vanilla JS
- 📚 **Documentation Site** - Astro-based docs with live demos
- 🛠️ **Build Configs** - Vite configurations for all frameworks
- 📋 **Scaffolding Script** - Automated project generation

**From idea to published library in minutes, not hours.**

## Unique Features

This template goes beyond basic scaffolding to provide **production-ready infrastructure**:

### 🚀 **Zero-Config Publishing**
- **GitHub Pages**: Automatic deployment with GitHub Actions
- **NPM Publishing**: Ready-to-publish package.json with proper exports
- **CDN Distribution**: Built examples automatically deployed to GitHub Pages

### 📚 **Live Documentation**
- **Astro-based docs** with hot reload and live component demos
- **Framework-agnostic examples** running simultaneously
- **Unified dev experience** - all examples accessible through docs

### 🔧 **Developer Experience**
- **Scaffolding script** that self-destructs after use
- **Multi-framework examples** with consistent APIs
- **Hot reload** across all examples and documentation
- **Port management** - no conflicts between services

### 📦 **Production Ready**
- **Build optimization** for all frameworks
- **Asset handling** with proper base paths
- **SEO ready** with meta tags and structured data
- **Performance optimized** with modern build tools

## Quick Start

1. **Use This Template** - Click "Use this template" on GitHub
2. **Clone Your Repo** - `git clone your-new-repo`
3. **Run Scaffold** - `./scaffold.sh --name my-component --class MyComponent --desc "My awesome component" --author "Your Name"`
4. **Customize** - Replace placeholder tokens with your values
5. **Develop** - Start building your web component!

**🎯 What You Get Immediately:**
- **Live docs** running on `npm run dev:docs`
- **All framework examples** working out of the box
- **GitHub Pages deployment** ready to go
- **NPM publishing** configuration complete
- **Multi-dev-server setup** with port management

## Scaffolding

The `scaffold.sh` script automatically generates your project structure. Use the `--dry-run` flag to preview changes before applying them.

**⚠️ Important**: The scaffold script will **self-destruct** after successful scaffolding to clean up your project directory.

### Usage

```bash
./scaffold.sh --name LIB_NAME --class CLASS_NAME --desc DESCRIPTION --author AUTHOR [--dry-run]
```

### Arguments

| Argument | Required | Description | Example |
|----------|----------|-------------|---------|
| `--name` | Yes | Library name (kebab-case) | `my-web-component` |
| `--class` | Yes | JavaScript class name (PascalCase) | `MyWebComponent` |
| `--desc` | Yes | Component description | `"A customizable button component"` |
| `--author` | Yes | Your name | `"John Doe"` |
| `--dry-run` | No | Preview changes without modifying files | `--dry-run` |
| `--help` | No | Show usage information | `--help` |

### Examples

```bash
# Basic usage
./scaffold.sh --name my-button --class MyButton --desc "A customizable button component" --author "John Doe"

# Preview mode
./scaffold.sh --name my-button --class MyButton --desc "A customizable button component" --author "John Doe" --dry-run

# Show help
./scaffold.sh --help
```

### What Gets Generated

```
my-button/
├── MyButton.js           # Main component file
├── package.json          # Package configuration
├── README.md            # Documentation
├── LICENSE              # MIT license
├── .gitignore          # Git ignore rules
└── examples/            # Framework examples
    ├── vite-vanilla/
    ├── vite-react/
    ├── vite-vue/
    ├── vite-angular/
    └── cdn/
```

### Self-Destruct Behavior

After successful scaffolding (when not using `--dry-run`), the `scaffold.sh` script automatically removes itself from your project directory. This ensures a clean project structure without template artifacts.

- **Normal mode**: Script runs, modifies files, then self-destructs
- **Dry-run mode**: Script shows preview without modifying files or self-destructing
- **Backup**: If you need to re-run scaffolding, you can restore the script from your git history

## Placeholder Tokens

When you run the scaffold script, these tokens get replaced throughout your project:

| Token | Replaced With | Example |
|-------|---------------|---------|
| `__LIB_NAME__` | Library name (kebab-case) | `my-web-component` |
| `__CLASS_NAME__` | JavaScript class (PascalCase) | `MyWebComponent` |
| `__TAG_NAME__` | HTML tag (kebab-case) | `my-web-component` |
| `__DESCRIPTION__` | Component description | `A customizable button component` |
| `__AUTHOR__` | Your name | `John Doe` |
| `__LICENSE__` | License type | `MIT` |
| `__VERSION__` | Version number | `1.0.0` |
| `__MAIN_FILE__` | Main file name | `my-web-component` |

## Framework Examples

All examples demonstrate the same web component with consistent APIs:

### Vanilla JS

- **File**: `examples/vite-vanilla/src/main.js`
- **Usage**: Direct DOM manipulation with `document.createElement`
- **Build**: `npm run build`

### React

- **File**: `examples/vite-react/src/App.jsx`
- **Usage**: Using refs and useEffect hooks
- **Build**: `npm run build`

### Vue 3

- **File**: `examples/vite-vue/src/App.vue`
- **Usage**: Composition API with refs
- **Build**: `npm run build`

### Angular

- **File**: `examples/vite-angular/src/app/app.ts`
- **Usage**: Standalone components
- **Build**: `npm run build`

### CDN

- **File**: `examples/cdn/index.html`
- **Usage**: Direct browser usage with script tags
- **Build**: No build step required

## Development

### Local Development Workflow

For local development with all examples running simultaneously:

```bash
# Start all dev servers (examples + docs)
npm run dev

# Or start individual services
npm run dev:vanilla  # Vanilla JS example
npm run dev:react    # React example  
npm run dev:vue      # Vue example
npm run dev:angular  # Angular example
npm run dev:docs     # Docs only
```

The `npm run dev` command uses bash brace expansion to start all services:

- Starts all examples on their configured ports
- Starts the docs dev server with proxy routing
- Provides unified access to all examples through the docs

### Individual Development

You can also run examples individually:

```bash
# Start docs development server
cd docs && npm run dev

# Start individual examples (in separate terminals)
cd examples/vite-react && npm run dev
cd examples/vite-vue && npm run dev
cd examples/vite-angular && npm run dev
cd examples/vite-vanilla && npm run dev
```

### Port Configuration

Examples run on specific ports to avoid conflicts:

- **Vanilla**: Port 5173
- **React**: Port 5174  
- **Vue**: Port 5175
- **Angular**: Port 4200
- **Docs**: Port 4321

### Build Examples

```bash
# Build examples
cd examples/vite-react && npm run build
cd examples/vite-vue && npm run build
cd examples/vite-angular && npm run build
cd examples/vite-vanilla && npm run build
```

## License

MIT License - feel free to use this template for your own projects!

# Vanilla JS + Vite Example

Basic usage of __LIB_NAME__ with Vite.

## Usage

```javascript
import '__LIB_NAME__'

const component = document.createElement('__TAG_NAME__')
component.setAttribute('cols', '3')
component.setAttribute('gap', '1rem')
component.setAttribute('padding', '1rem')

// Add demo content
for (let i = 1; i <= 6; i++) {
  const item = document.createElement('div')
  item.textContent = `Item ${i}`
  item.style.cssText = 'background: #3b82f6; color: white; padding: 1rem; border-radius: 4px; text-align: center;'
  component.appendChild(item)
}

document.getElementById('app').appendChild(component)
```

## Features

- ES module imports
- Vite dev server with HMR
- No framework dependencies
- Clean vanilla JavaScript

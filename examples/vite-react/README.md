# React + Vite Example

React integration with __LIB_NAME__ using refs.

## Usage

```jsx
import { useRef, useEffect } from 'react'
import '__LIB_NAME__'

function App() {
  const componentRef = useRef()

  useEffect(() => {
    if (componentRef.current) {
      componentRef.current.setAttribute('cols', '3')
      componentRef.current.setAttribute('gap', '1rem')
      componentRef.current.setAttribute('padding', '1rem')
      
      // Add demo content
      for (let i = 1; i <= 6; i++) {
        const item = document.createElement('div')
        item.textContent = `Item ${i}`
        item.style.cssText = 'background: #3b82f6; color: white; padding: 1rem; border-radius: 4px; text-align: center;'
        componentRef.current.appendChild(item)
      }
    }
  }, [])

  return <__TAG_NAME__ ref={componentRef} />
}
```

## Features

- React refs for DOM access
- useEffect for lifecycle management
- Vite dev server with HMR
- Clean component integration

import { useRef, useEffect } from 'react'
import '__LIB_NAME__'
import './App.css'

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

  return (
    <div className="App">
      <div className="header">
        <img className="logo" src="favicon.png" alt="__LIB_NAME__ Logo" />
        <div className="title">__LIB_NAME__</div>
        <div className="subtitle">React + Vite Example</div>
      </div>
      <__TAG_NAME__ ref={componentRef} />
    </div>
  )
}

export default App

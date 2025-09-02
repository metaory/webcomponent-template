# Vue + Vite Example

Vue 3 composition API integration with __LIB_NAME__.

## Usage

```vue
<template>
  <__TAG_NAME__ ref="component" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import '__LIB_NAME__'

const component = ref()

onMounted(() => {
  if (component.value) {
    component.value.setAttribute('cols', '3')
    component.value.setAttribute('gap', '1rem')
    component.value.setAttribute('padding', '1rem')
    
    // Add demo content
    for (let i = 1; i <= 6; i++) {
      const item = document.createElement('div')
      item.textContent = `Item ${i}`
      item.style.cssText = 'background: #3b82f6; color: white; padding: 1rem; border-radius: 4px; text-align: center;'
      component.value.appendChild(item)
    }
  }
})
</script>

## Features

- Vue 3 composition API
- Template refs for DOM access
- onMounted lifecycle hook
- Vite dev server with HMR

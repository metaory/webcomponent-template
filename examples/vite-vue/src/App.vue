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

console.log('__LIB_NAME__ component loaded')
</script>

<template>
  <div class="App">
    <div class="header">
      <img class="logo" src="favicon.png" alt="__LIB_NAME__ Logo" />
      <div class="title">__LIB_NAME__</div>
      <div class="subtitle">Vue + Vite Example</div>
    </div>
    <__TAG_NAME__ ref="component" />
  </div>
</template>

<style scoped>
.App {
  text-align: center;
  padding: 2rem;
}

.header {
  margin-bottom: 2rem;
}

.logo {
  width: 64px;
  height: 64px;
  margin-bottom: 1rem;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #3b82f6;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.25rem;
  color: #64748b;
}
</style>

<template>
  <div class="glass-card">
    <slot></slot>
  </div>
</template>

<style scoped>
.glass-card {
  background-color: rgba(4, 6, 21, 0.5);
  backdrop-filter: blur(32px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 50, 107, 0.2);
  transition: transform 0.2s ease;
}

.glass-card:hover {
  transform: translateY(-5px);
}
</style>

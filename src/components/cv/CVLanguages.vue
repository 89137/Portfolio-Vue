<template>
  <div class="glass-card languages">
    <h3>/* Languages */</h3>
    <div class="lang-grid">
      <div class="lang-item">
        <span class="lang">Engels</span>
        <span class="level">Advanced</span>
      </div>
      <div class="lang-item">
        <span class="lang">Nederlands</span>
        <span class="level">Advanced</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
h3 {
  color: #50fff0;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.lang-grid {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.lang-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: white;
  padding: 0.5rem;
}

.level {
  color: #50fff0;
}
</style>

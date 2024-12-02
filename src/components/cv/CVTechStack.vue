<template>
  <BaseCard>
    <h3>// Tech Stack</h3>
    <div class="stack-grid">
      <div class="content-card">
        <h4>Frontend Development</h4>
        <div class="tech-tags">
          <span class="tech-tag">Vue.js</span>
          <span class="tech-tag">TypeScript</span>
          <span class="tech-tag">HTML/CSS</span>
          <span class="tech-tag">Responsive Design</span>
        </div>
      </div>
    </div>
  </BaseCard>
</template>

<style scoped>
h3 {
  color: #50fff0;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

h4 {
  color: white;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.stack-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.tech-tag {
  background-color: rgba(80, 255, 240, 0.1);
  color: #50fff0;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background-color: rgba(80, 255, 240, 0.2);
  transform: translateY(-2px);
}
</style>

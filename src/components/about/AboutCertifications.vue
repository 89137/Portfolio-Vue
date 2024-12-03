<template>
  <BaseCard>
    <h3>// Certifications</h3>
    <div class="cert-grid">
      <a
        href="https://www.udemy.com/certificate/UC-d551fbd5-f418-44d4-85c2-274977f13d7c/"
        target="_blank"
        class="cert-tag"
      >
        TypeScript: OOP
      </a>
      <a
        href="https://www.udemy.com/certificate/UC-d551fbd5-f418-44d4-85c2-274977f13d7c/"
        target="_blank"
        class="cert-tag"
      >
        Vue - Complete Guide
      </a>
    </div>
  </BaseCard>
</template>

<style scoped>
h3 {
  color: #50fff0;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.cert-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.cert-tag {
  background-color: rgba(80, 255, 240, 0.1);
  color: #50fff0;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cert-tag:hover {
  background-color: rgba(80, 255, 240, 0.2);
  transform: translateY(-2px);
}
</style>

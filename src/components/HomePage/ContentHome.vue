<template>
  <div class="home-content">
    <div class="container">
      <!-- Welcome Section -->
      <BaseCard class="welcome-card">
        <h2>Welcome to My Portfolio</h2>
        <p>Explore my journey in software development</p>
      </BaseCard>

      <!-- Featured Projects Section -->
      <div class="projects-grid">
        <!-- Project Card 1 -->
        <BaseCard class="project-card">
          <h3>// Portfolio Website</h3>
          <p class="project-desc">Personal portfolio built with Vue.js</p>
          <div class="tech-stack">
            <span class="tech-tag">Vue.js</span>
            <span class="tech-tag">CSS</span>
          </div>
          <div class="card-links">
            <router-link to="/projects" class="card-link"
              >View Details</router-link
            >
          </div>
        </BaseCard>

        <!-- Project Card 2 -->
        <BaseCard class="project-card">
          <h3>// Project Two</h3>
          <p class="project-desc">Another amazing project description</p>
          <div class="tech-stack">
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">Express</span>
          </div>
          <div class="card-links">
            <router-link to="/projects" class="card-link"
              >View Details</router-link
            >
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCard from '@/components/UI/BaseCard.vue';

export default {
  name: 'ContentHome',
  components: {
    BaseCard,
  },
};
</script>

<style scoped>
.home-content {
  padding: 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.welcome-card {
  text-align: center;
}

.welcome-card h2 {
  color: #50fff0;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.welcome-card p {
  color: white;
  font-size: 1.2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-card h3 {
  color: #50fff0;
  font-size: 1.5rem;
}

.project-desc {
  color: white;
  flex-grow: 1;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background-color: rgba(80, 255, 240, 0.1);
  color: #50fff0;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
}

.card-links {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}

.card-link {
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  background-color: rgba(92, 77, 226, 0.1);
  border: 1px solid rgba(0, 140, 255, 0.144);
  transition: all 0.3s ease;
}

.card-link:hover {
  background-color: #50fff056;
  border-color: #50fff0;
}

@media (max-width: 768px) {
  .home-content {
    padding: 1rem;
  }

  .welcome-card h2 {
    font-size: 1.5rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>

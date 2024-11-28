<template>
  <div class="projects-container">
    <div class="projects-content">
      <!-- Header Section -->
      <div class="glass-card header">
        <h1>My Projects</h1>
        <h2>{ Recent Work & Contributions }</h2>
      </div>

      <!-- Projects List -->
      <div class="projects-list">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from '../projects/ProjectCard.vue';
import { projects } from '../data/projects.vue';

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: projects,
    };
  },
};
</script>

<style scoped>
.projects-container {
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
}

.projects-content {
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.glass-card {
  background-color: rgba(4, 6, 21, 0.5);
  backdrop-filter: blur(32px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 50, 107, 0.2);
  transition: transform 0.2s ease;
}

.header {
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, #fff, #50fff0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

h2 {
  color: #50fff0;
  font-size: 1.5rem;
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (max-width: 768px) {
  .projects-container {
    padding: 1rem;
  }

  h1 {
    font-size: 2rem;
  }
}
</style>

<template>
  <div class="home-content">
    <div class="container">
      <BaseCard class="welcome-card">
        <h2>Welcome to My Portfolio</h2>
        <p>Explore my journey in software development</p>
      </BaseCard>

      <div class="projects-grid">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
          :showImage="false"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from '../projects/ProjectCard.vue';
import { fetchProjects } from '../data/projectsData.js';

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [],
    };
  },
  computed: {
    filteredProjects() {
      return this.projects.filter(
        (project) => project.id === 1 || project.id === 2
      );
    },
  },
  async created() {
    this.projects = await fetchProjects();
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
  width: 100%;
  padding: 0 2rem; /* Adjust for spacing */
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
  grid-template-columns: repeat(
    auto-fit,
    minmax(250px, 1fr)
  ); /* Smaller min size */
  gap: 1rem; /* Adjust spacing */
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

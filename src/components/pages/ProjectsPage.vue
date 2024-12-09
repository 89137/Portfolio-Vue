<template>
  <div class="projects-container">
    <div class="projects-content">
      <BaseCard class="header">
        <h1>My Projects</h1>
        <h2>Recent Work & Contributions</h2>
      </BaseCard>

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
import { ref, onMounted } from 'vue';
import ProjectCard from '../projects/ProjectCard.vue'; // Correct path
import { fetchProjects } from '../data/projectsData.js'; // Correct path

export default {
  components: {
    ProjectCard,
  },
  setup() {
    const projects = ref([]);

    const loadProjects = async () => {
      const data = await fetchProjects();
      projects.value = data;
    };

    onMounted(loadProjects);

    return {
      projects,
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

.header {
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, #fff, #50fff0);
  background-clip: text;
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

@media (max-width: 950px) {
  .projects-container {
    padding: 2rem;
  }

  h1 {
    font-size: 2rem;
  }
}
</style>

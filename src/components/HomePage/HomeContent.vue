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
import ProjectCard from '../projects/ProjectCard.vue'; // Correct path
import { supabase } from '@/supabase'; // Import supabase

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [],
    };
  },
  created() {
    this.loadProjects();
  },
  methods: {
    async loadProjects() {
      const { data, error } = await supabase
        .from('projects') // Your Supabase table name
        .select('*'); // Fetch all columns

      if (error) {
        console.error('Error fetching projects:', error.message);
      } else {
        this.projects = data; // Store data from Supabase into the projects variable
      }
    },
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

@media (max-width: 950px) {
  .projects-container {
    padding: 2rem;
  }

  h1 {
    font-size: 2rem;
  }
}
</style>

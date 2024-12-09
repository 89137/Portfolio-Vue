<template>
  <div class="home-content">
    <div class="container">
      <BaseCard class="welcome-card">
        <h2>Welcome to My Portfolio</h2>
        <p>Explore my journey in software development</p>
      </BaseCard>

      <div class="projects-grid">
        <BaseCard
          v-for="project in displayedProjects"
          :key="project.id"
          class="project-card"
        >
          <h3>// {{ project.title }}</h3>
          <p class="project-desc">{{ project.description }}</p>
          <div class="tech-stack">
            <span
              v-for="tech in project.techstack"
              :key="tech"
              class="tech-tag"
            >
              {{ tech }}
            </span>
          </div>
          <div class="card-links">
            <a
              v-if="project.demolink"
              :href="project.demolink"
              target="_blank"
              class="card-link"
              >Live Demo</a
            >
            <a
              v-if="project.githublink"
              :href="project.githublink"
              target="_blank"
              class="card-link"
              >GitHub</a
            >
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Define projects directly inside the component
      projects: [
        {
          id: 1,
          title: 'Portfolio Site',
          description:
            'The second version of my Portfolio site, fully made with vue3 using routes. I am still working on it.',
          techstack: ['Vue.js', 'Routes', 'Typescript'],
          demolink: 'https://www.belljahh.nl/',
          githublink: 'https://github.com/89137/Portfolio-Vue/tree/main',
        },
        {
          id: 2,
          title: 'Old Portfolio Site',
          description:
            'My first ever Portfolio site I made at school, using only basic HTML, CSS and JS.',
          techstack: ['HTML', 'CSS', 'JS'],
          demolink: 'https://89137-github-io.vercel.app/',
          githublink: 'https://github.com/89137/89137.github.io',
        },
        // Add more projects if necessary
      ],
      displayedProjects: [],
    };
  },
  created() {
    // Initially show only the first 2 projects
    this.displayedProjects = this.projects.slice(0, 2);
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
    minmax(200px, 1fr)
  ); /* Smaller min size */
  gap: 1rem; /* Adjust spacing */
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
  margin-left: 15px;
  background-color: rgba(92, 77, 226, 0.1);
  border: 1px solid rgba(0, 140, 255, 0.048);
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

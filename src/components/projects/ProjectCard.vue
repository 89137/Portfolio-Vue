<template>
  <BaseCard class="project-card">
    <div class="project-content">
      <div v-if="showImage && project.image" class="project-image">
        <img :src="project.image" :alt="'Screenshot of ' + project.title" />
      </div>
      <div class="project-details">
        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
        </div>
        <div class="project-meta">
          <div class="tech-stack">
            <span
              v-for="tech in project.techstack"
              :key="tech"
              class="tech-tag"
            >
              {{ tech }}
            </span>
          </div>
          <div class="project-links">
            <a
              v-if="project.demolink && project.demolink !== ''"
              :href="project.demolink"
              class="project-link"
              target="_blank"
              :aria-label="'Visit the live demo for ' + project.title"
            >
              Live Demo
            </a>
            <a
              v-if="project.githublink && project.githublink !== ''"
              :href="project.githublink"
              class="project-link"
              target="_blank"
              :aria-label="'View the GitHub repository for ' + project.title"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </BaseCard>
</template>


<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
    showImage: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.project-card {
  width: 100%;
}

.project-content {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.project-image img {
  width: 10vw;
  max-width: 185px; /* Adjust the width as needed */
  height: auto;
  border-radius: 20px;
  border: 1px solid rgba(14, 131, 226, 0.212);
}

.project-details {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-info h3 {
  color: #50fff0;
  font-size: 1.5rem;
}

.project-description {
  color: white;
  line-height: 1.6;
  padding-bottom: 10px;
}

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap; /* Allow items to wrap */
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.tech-tag {
  background-color: rgba(80, 255, 240, 0.1);
  color: #50fff0;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  white-space: nowrap; /* Prevent text from wrapping */
  overflow: hidden; /* Hide overflow text */
  text-overflow: ellipsis; /* Add ellipsis for overflow text */
}

.project-links {
  display: flex;
  gap: 1rem;
  justify-content: flex-end; /* Align links to the right */
}

.project-link {
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  background-color: rgba(92, 77, 226, 0.1);
  border: 1px solid rgba(0, 140, 255, 0.048);
  transition: all 0.3s ease;
  white-space: nowrap; /* Prevent text from wrapping */
  overflow: hidden; /* Hide overflow text */
  text-overflow: ellipsis; /* Add ellipsis for overflow text */
}

.project-link:hover {
  background-color: #50fff056;
  border-color: #50fff0;
}
</style>

<template>
  <div class="about-container">
    <div class="about-content">
      <!-- Header Section -->
      <div class="glass-card header">
        <h1>Mattia Warning</h1>
        <h2>&lt;Software Developer. /&gt;</h2>
        <p class="subtitle">Vue.js & Front-end Enthusiast</p>
      </div>

      <!-- Profile Section -->
      <div class="glass-card">
        <h3>// About Me</h3>
        <p class="about-text">
          Passionate about clean code and innovative solutions. Specialized in
          building scalable web applications and exploring new technologies.
        </p>
      </div>

      <!-- Experience Section -->
      <div class="glass-card">
        <h3>/* Professional Journey */</h3>
        <div class="content-card">
          <div class="role-header">
            <h4>Front-end Engineer Intern</h4>
            <span class="date">10/2024 - Present</span>
          </div>
          <p class="company">Robeco</p>
          <ul>
            <li>Collaborate in agile teams using Scrum methodology</li>
            <li>Implement modern architecture patterns and best practices</li>
            <li>Work with Vue.js, Nuxt, and other modern frameworks</li>
          </ul>
        </div>
      </div>

      <!-- Tech Stack Section -->
      <div class="glass-card">
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
          <div class="content-card">
            <h4>Backend Development</h4>
            <div class="tech-tags">
              <span class="tech-tag">Node.js</span>
              <span class="tech-tag">Python</span>
              <span class="tech-tag">RESTful APIs</span>
              <span class="tech-tag">SQL/NoSQL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
}

.about-content {
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

.glass-card:hover {
  transform: translateY(-2px);
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
  margin-bottom: 1rem;
}

.subtitle {
  color: white;
  font-size: 1.2rem;
}

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

.about-text {
  color: white;
  line-height: 1.6;
  font-size: 1.1rem;
}

.content-card {
  background-color: rgba(92, 77, 226, 0.1);
  border: 1px solid rgba(0, 140, 255, 0.144);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.role-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.date {
  color: rgba(255, 255, 255, 0.6);
}

.company {
  color: #50fff0;
  margin-bottom: 1rem;
}

ul {
  list-style: none;
  padding: 0;
  color: white;
}

li {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

li:before {
  content: '▹';
  position: absolute;
  left: 0;
  color: #50fff0;
}

.stack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

@media (max-width: 768px) {
  .about-container {
    padding: 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  .stack-grid {
    grid-template-columns: 1fr;
  }
}
</style>

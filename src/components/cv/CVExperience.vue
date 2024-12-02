<template>
  <BaseCard>
    <h3>/* Experience */</h3>
    <div class="content-card">
      <div class="role-header">
        <h4>Front-end Engineer Intern</h4>
        <span class="date">10/2024 - Present</span>
      </div>
      <p class="company">Robeco</p>
      <ul>
        <li>Collaborate in agile teams using Scrum and sprints</li>
        <li>Work with Vue.js, Nuxt, Contentful and Azure</li>
      </ul>
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
  margin-bottom: 0.5rem;
}

.content-card {
  background-color: rgba(92, 77, 226, 0.1);
  border: 1px solid rgba(0, 140, 255, 0.144);
  border-radius: 12px;
  padding: 1.5rem;
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
  content: "▹";
  position: absolute;
  left: 0;
  color: #50fff0;
}
</style>

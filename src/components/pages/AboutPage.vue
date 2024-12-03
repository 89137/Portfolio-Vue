<template>
  <div class="about-container">
    <AboutHeader />
    <AboutSummary />
    <AboutExperience />
    <div class="two-column">
      <AboutEducation />
      <AboutCertifications />
    </div>
    <div class="two-column">
      <AboutTechStack />
      <AboutLanguages />
    </div>
  </div>
</template>

<script>
import AboutCertifications from '../about/AboutCertifications.vue';
import AboutLanguages from '../about/AboutLanguages.vue';
import AboutTechStack from '../about/AboutTechStack.vue';
import AboutHeader from '../about/AboutHeader.vue';
import AboutExperience from '../about/AboutExperience.vue';
import AboutSummary from '../about/AboutSummary.vue';
import AboutEducation from '../about/AboutEducation.vue';

export default {
  components: {
    AboutSummary,
    AboutExperience,
    AboutEducation,
    AboutCertifications,
    AboutLanguages,
    AboutHeader,
    AboutTechStack,
  },
};
</script>

<style>
.about-container {
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
}

.two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

h3 {
  color: #50fff0;
  margin-bottom: 1.5rem;
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

@media (max-width: 768px) {
  .two-column {
    grid-template-columns: 1fr;
  }
}
</style>

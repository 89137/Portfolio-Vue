<template>
  <div class="cv-container">
    <CVHeader />
    <CVSummary />
    <CVExperience />
    <div class="two-column">
      <CVEducation />
      <CVCertifications />
    </div>
    <div class="two-column">
      <CVTechStack />
      <CVLanguages />
    </div>
  </div>
</template>

<script>
import CVHeader from '../cv/CVHeader.vue';
import CVSummary from '../cv/CVSummary.vue';
import CVExperience from '../cv/CVExperience.vue';
import CVEducation from '../cv/CVEducation.vue';
import CVCertifications from '../cv/CVCertifications.vue';
import CVLanguages from '../cv/CVLanguages.vue';
import CVTechStack from '../cv/CVTechStack.vue';

export default {
  components: {
    CVSummary,
    CVExperience,
    CVEducation,
    CVCertifications,
    CVLanguages,
    CVHeader,
    CVTechStack,
  },
};
</script>

<style>
.cv-container {
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

@media (max-width: 768px) {
  .two-column {
    grid-template-columns: 1fr;
  }
}
</style>

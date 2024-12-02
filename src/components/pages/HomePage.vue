<template>
  <div class="home-container">
    <intro-home></intro-home>
  </div>
</template>

<script>
import IntroHome from '@/components/HomePage/IntroHome.vue';

export default {
  components: {
    IntroHome,
  },
};
</script>

<style scoped>
.home-container {
  height: 55vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

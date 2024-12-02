<template>
  <div class="home-container">
    <intro-home></intro-home>
  </div>
  <content-home></content-home>
</template>

<script>
import IntroHome from '@/components/HomePage/IntroHome.vue';
import ContentHome from '@/components/HomePage/ContentHome.vue';

export default {
  components: {
    IntroHome,
    ContentHome,
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

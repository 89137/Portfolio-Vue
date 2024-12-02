<template>
  <contained>
    <div class="home-container">
      <intro-home></intro-home>
    </div>
    <content-home></content-home>
  </contained>
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
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

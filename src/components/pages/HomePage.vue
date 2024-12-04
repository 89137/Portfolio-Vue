<template>
  <div class="home-page">
    <home-header></home-header>
    <home-content></home-content>
  </div>
</template>

<script>
import HomeHeader from '@/components/HomePage/HomeHeader.vue';
import HomeContent from '@/components/HomePage/HomeContent.vue';

export default {
  components: {
    HomeHeader,
    HomeContent,
  },
};
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 5rem;
}

@media (max-width: 950px) {
  .home-page {
    padding-top: 2em;
  }
}
</style>

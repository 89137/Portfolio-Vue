<template>
  <div class="home-page">
    <header-home></header-home>
    <content-home></content-home>
  </div>
</template>

<script>
import HeaderHome from '@/components/HomePage/HeaderHome.vue';
import ContentHome from '@/components/HomePage/ContentHome.vue';

export default {
  components: {
    HeaderHome,
    ContentHome,
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

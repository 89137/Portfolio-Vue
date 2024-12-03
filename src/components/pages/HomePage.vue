<template>
  <div class="home-page">
    <header-home></header-home>
    <content-home></content-home>
  </div>
</template>

<script>
import HeaderHome from '@/components/homepage/HeaderHome.vue';
import ContentHome from '@/components/homepage/ContentHome.vue';

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
</style>

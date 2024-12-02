<template>
  <div>
    <intro-home></intro-home>

    <content-home></content-home>
  </div>
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

<style scoped></style>

<template>
  <router-view name="header"></router-view>
  <transition name="slide" mode="out-in">
    <router-view></router-view>
  </transition>
  <Background />
  <SpeedInsights />
</template>

<script>
import Background from './components/nav/Background.vue';
import { SpeedInsights } from '@vercel/speed-insights/vue';

export default {
  components: {
    Background,
    SpeedInsights,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 101vh;
  font-family: sans-serif;
}

/* Slide transition styles */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.9s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>

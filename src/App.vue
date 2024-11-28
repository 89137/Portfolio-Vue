<template>
  <div class="app-container">
    <Background />
    <main>
      <router-view name="header"></router-view>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Background from './components/nav/Background.vue';

export default {
  components: {
    Background,
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
  height: 100%;
  font-family: sans-serif;
}

.app-container {
  position: relative;
  width: 100%;
  height: 100vh;
}

main {
  position: relative;
  z-index: 1;
  height: 100%;
}

/* Fade transition styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>

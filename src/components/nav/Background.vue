<template>
  <div class="background">
    <video
      autoplay
      muted
      loop
      id="background-video"
      @ended="handleVideoEnd"
      @play="handleVideoPlay"
    >
      <source src="/images/nightsky.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  methods: {
    handleVideoEnd() {
      const video = document.getElementById('background-video');
      video.classList.add('fade-out');
    },
    handleVideoPlay() {
      const video = document.getElementById('background-video');
      video.classList.remove('fade-out');
    },
  },
};
</script>

<style scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  background-color: black;
}

#background-video {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 1s ease-in-out;
}

#background-video.fade-out {
  opacity: 0;
}
</style>

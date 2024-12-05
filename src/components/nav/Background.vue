<template>
  <div class="background">
    <video autoplay muted loop id="background-video">
      <source src="/images/nightsky.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

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
  background-image: url('/images/NightskyImage.png');
  background-size: cover;
}

#background-video {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

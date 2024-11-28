<template>
  <container>
    <div>
      <h1 class="gradient-text">Software Engineer</h1>
      <h2 class="gradient-text">Headpage Content</h2>
      <h3 class="gradient-text">Toads</h3>
    </div>
  </container>
</template>

<script></script>

<style scoped>
container {
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
div {
  background-color: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

h1 {
  font-size: 1rem;
}
h2 {
  font-size: 3.5rem;
}
h3 {
  font-size: 1.5rem;
}

.gradient-text {
  background: linear-gradient(to right, white, rgb(105, 183, 209));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  font-weight: bold;
}

@media (max-width: 950px) {
  h1 {
    font-size: 1rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.5rem;
  }
}
</style>

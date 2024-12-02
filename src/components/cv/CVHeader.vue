<template>
  <BaseCard>
    <div class="header">
      <h1>Mattia Warning</h1>
      <h2>&lt;Junior Front-End Developer/&gt;</h2>
    </div>
  </BaseCard>
</template>

<style scoped>
.header {
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, #fff, #50fff0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

h2 {
  color: #50fff0;
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
}
</style>

<template>
  <div class="intro-wrapper">
    <h1 class="title-gradient">Software Engineer</h1>
    <h2 class="name-gradient">
      Mattia Warning <br />
      <span class="title-gradient">A Creative Frontend Developer.</span>
    </h2>
    <div class="social-links">
      <a
        href="https://github.com/YourGithubUsername"
        target="_blank"
        class="social-link"
      >
        <img src="/images/github.png" alt="GitHub" />
      </a>
      <a
        href="https://linkedin.com/in/YourLinkedInUsername"
        target="_blank"
        class="social-link"
      >
        <img src="/images/linkedin.png" alt="LinkedIn" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.intro-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
}

h1 {
  font-size: 1.5rem;
  margin: 0;
}

h2 {
  font-size: 4rem;
  line-height: 1.2;
  margin: 1rem 0;
}

h3 {
  font-size: 2rem;
  margin: 0;
}

.title-gradient {
  background: linear-gradient(to right, white, rgb(105, 183, 209));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  font-weight: bold;
}

.name-gradient {
  background: linear-gradient(to right, #50fff0, #5c4de2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  font-weight: bold;
}

.social-links {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
}

.social-link {
  transition: transform 0.3s ease;
}

.social-link:hover {
  transform: translateY(-3px);
}

.social-link img {
  width: 32px;
  height: 32px;
  filter: brightness(0) invert(1); /* Makes icons white */
}

@media (max-width: 950px) {
  .intro-wrapper {
    padding: 1rem;
    text-align: center;
  }

  h1 {
    font-size: 1.2rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1.5rem;
  }
  .social-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 2rem;
  }
}
</style>

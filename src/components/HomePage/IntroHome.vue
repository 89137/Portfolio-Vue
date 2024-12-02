<template>
  <div class="intro-wrapper">
    <h1 class="title-gradient">Software Engineer</h1>
    <h2 class="name-gradient">
      Mattia Warning <br />
      <span class="title-gradient">A Creative Frontend Developer.</span>
    </h2>
    <h3>Get in touch with me!</h3>
    <div class="social-links">
      <a
        href="https://github.com/YourGithubUsername"
        target="_blank"
        class="social-link"
      >
        <FontAwesomeIcon :icon="faGithub" class="social-icon" />
      </a>
      <a
        href="https://linkedin.com/in/YourLinkedInUsername"
        target="_blank"
        class="social-link"
      >
        <FontAwesomeIcon :icon="faLinkedin" class="social-icon" />
      </a>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      faGithub,
      faLinkedin,
    };
  },
};
</script>

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
}

.social-link {
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-icon {
  font-size: 2rem;
  color: #fff;
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-3px);
}

.social-link:hover .social-icon {
  color: #50fff0;
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

  .social-icon {
    font-size: 1.75rem;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 2rem;
  }
}
</style>

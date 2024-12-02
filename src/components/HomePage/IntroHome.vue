<template>
  <BaseCard class="header-card">
    <div class="intro-wrapper">
      <h1 class="title-gradient">Software Engineer</h1>
      <h2 class="name-gradient">
        Mattia Warning <br />
        <span class="title-gradient">A Creative Frontend Developer.</span>
      </h2>
      <h3>Get in touch with me!</h3>
      <div class="social-links">
        <a href="https://github.com/89137" target="_blank" class="social-link">
          <FontAwesomeIcon :icon="faGithub" class="social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/mattia-warning-engineer/"
          target="_blank"
          class="social-link"
        >
          <FontAwesomeIcon :icon="faLinkedin" class="social-icon" />
        </a>
        <ContactButton />
      </div>
    </div>
  </BaseCard>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ContactButton from '@/components/UI/ContactButton.vue';
import BaseCard from '@/components/UI/BaseCard.vue';

export default {
  components: {
    FontAwesomeIcon,
    ContactButton,
    BaseCard,
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
.header-card {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Align content to the left */
  padding: 4rem 2rem;
  width: 70%; /* Adjust width to be less than 100% */
  max-width: 1000px; /* Set a max width */
}

.intro-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  text-align: left; /* Align text to the left */
}

h1 {
  font-size: 3rem;
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
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}

.name-gradient {
  background: linear-gradient(to right, #50fff0, #5c4de2);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}

.social-links {
  display: flex;
  gap: 2rem;
  align-items: center;
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
    text-align: center; /* Center text on smaller screens */
  }

  h1 {
    font-size: 2rem;
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

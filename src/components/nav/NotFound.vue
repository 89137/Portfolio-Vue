<template>
  <div class="not-found-container">
    <BaseCard>
      <div class="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <router-link to="/" class="home-link">Go to Homepage</router-link>
      </div>
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from '@/components/UI/BaseCard.vue';

export default {
  name: 'NotFound',
  components: {
    BaseCard,
  },
};
</script>

<style scoped>
.not-found-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 2rem;
}

.not-found-content {
  text-align: center;
}

h1 {
  font-size: 6rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #ff6b6b, #f06595);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #50fff0;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: white;
}

.home-link {
  font-family: 'Inter28ptSemiBold', sans-serif;
  color: black;
  background-color: #ffffff;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.25rem;
}

.home-link:hover {
  background-color: #50fff056;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: white;
}

@media (max-width: 768px) {
  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  .home-link {
    font-size: 1rem;
  }
}
</style>

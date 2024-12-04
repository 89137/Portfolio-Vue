<template>
  <div class="contact-container">
    <BaseCard>
      <h1>Contact Me</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit" class="submit-button">Send Message</button>
      </form>
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from '@/components/UI/BaseCard.vue';

export default {
  components: {
    BaseCard,
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log('Form submitted:', this.form);
      // Reset form
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    },
  },
};
</script>

<style scoped>
.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #50fff0;
  text-align: center;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #50fff0;
}

input,
textarea {
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(0, 140, 255, 0.144);
  font-size: 1.2rem;
}

textarea {
  resize: vertical;
  min-height: 200px;
}

.submit-button {
  font-family: 'Inter28ptSemiBold', sans-serif;
  color: black;
  background-color: #ffffff;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.5rem;
  border: none;
}

.submit-button:hover {
  background-color: #50fff056;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: white;
}

@media (max-width: 768px) {
  .contact-container {
    padding: 1rem;
  }

  form {
    width: 100%;
  }

  h1 {
    font-size: 2rem;
  }
}
</style>
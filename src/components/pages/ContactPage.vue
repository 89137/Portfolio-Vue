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
import emailjs from 'emailjs-com';
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_USER_ID,
} from '@/config/env.js'; // Import environment variables

export default {
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
    async submitForm() {
      try {
        const templateParams = {
          name: this.form.name,
          email: this.form.email,
          message: this.form.message,
        };

        const response = await emailjs.send(
          EMAILJS_SERVICE_ID, // Use environment variable
          EMAILJS_TEMPLATE_ID, // Use environment variable
          templateParams,
          EMAILJS_USER_ID // Use environment variable
        );

        console.log('Email sent successfully:', response.status, response.text);
        alert('Message sent successfully!');

        // Reset form
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Failed to send message. Please try again later.');
      }
    },
  },
};
</script>

<style scoped>
.contact-container {
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 50vw;
  max-width: 900px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #50fff0;
  text-align: center;
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid rgba(0, 140, 255, 0.144);
  background-color: rgba(92, 77, 226, 0.1);
  color: white;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #50fff0;
  font-weight: bold;
}

input,
textarea {
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(0, 140, 255, 0.144);
  font-size: 1.2rem;
}

input:focus,
textarea:focus {
  border-color: #50fff0;
  outline: none;
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
    align-items: center;
  }

  form {
    width: 100%;
  }

  h1 {
    font-size: 2.2rem;
  }
}
</style>

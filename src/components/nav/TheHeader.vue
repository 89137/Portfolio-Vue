<template>
  <header>
    <container>
      <!-- Title as Image -->
      <div class="logo">
        <!-- Use src to load the image from the root folder -->
        <img src="/BelljahhLogo.png" alt="Website Logo" />
      </div>

      <!-- Navigation Links -->
      <nav>
        <router-link to="/headpage" class="nav-link" exact-active-class="active"
          >HoofdPagina</router-link
        >
        <router-link to="/subpage" class="nav-link" exact-active-class="active"
          >SubPage</router-link
        >
        <router-link
          to="/thirdpage"
          class="nav-link"
          exact-active-class="active"
          >thirdpage</router-link
        >
      </nav>

      <!-- Get in Touch Button -->
      <button class="contact-button">
        <router-link to="/contact" class="contact-link"
          >Get in Touch</router-link
        >
      </button>
    </container>
  </header>

  <!-- Main content of the page -->
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
/* Overall page layout */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Ensure the page takes full height */
html,
body {
  width: 100%;
  height: 100%;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  padding: 2rem; /* Space around the entire page */
}

header {
  width: 100%;
  display: flex;
  justify-content: center; /* Space between title, nav, and button */
}

/* Centering the header */
container {
  width: 100%;
  max-width: 1200px; /* Optional: limit width of header */
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Space between title, nav, and button */
  padding: 0 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

/* Logo size */
.logo img {
  height: 4rem;
  width: auto;
}

/* Navigation links */
nav {
  display: flex;
  gap: 1.5rem;
  justify-content: center; /* Center the nav links */
  flex-grow: 1;
}

/* Styling for the links */
.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1.25rem;
  transition: background-color 0.3s ease;
}

/* Hover effect for nav links */
.nav-link:hover {
  background-color: #50fff056;
}

/* Active state for nav links */
.nav-link.active {
  background-color: #5c4de29f;
  border: 1px solid rgba(0, 140, 255, 0.144);
  color: white;
  font-weight: bold;
}

/* Contact button */
.contact-button {
  background-color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.25rem;
}

/* Hover effect for contact button */
.contact-button:hover {
  background-color: #50fff056;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contact-link {
  color: black;
  text-decoration: none;
  font-weight: bold;
}

.contact-button:hover .contact-link {
  color: rgb(0, 0, 0);
}
</style>

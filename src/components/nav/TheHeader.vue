<template>
  <header>
    <container>
      <div class="logo">
        <img src="/BelljahhLogo.png" alt="Website Logo" />
      </div>
      <nav>
        <router-link to="/headpage" class="nav-link" exact-active-class="active"
          >HeadPage</router-link
        >
        <router-link to="/subpage" class="nav-link" exact-active-class="active"
          >SubPage</router-link
        >
        <router-link
          to="/thirdpage"
          class="nav-link"
          exact-active-class="active"
          >ThirdPage</router-link
        >
      </nav>
      <router-link
        to="/contactpage"
        class="contact-button"
        exact-active-class="active-button"
      >
        Get in Touch
      </router-link>
    </container>
  </header>
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

header {
  width: 100%;
  display: flex;
  justify-content: center;
}

container {
  width: 100%;
  max-width: 1200px;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

.logo img {
  height: 4rem;
  width: auto;
}

nav {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-grow: 1;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1.25rem;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #50fff056;
}

.nav-link.active {
  background-color: #5c4de29f;
  border: 1px solid rgba(0, 140, 255, 0.144);
  color: white;
  font-weight: bold;
}

.contact-button {
  border: none;
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.25rem;
}

.contact-button:hover {
  background-color: #50fff056;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contact-button.active {
  background-color: #5c4de29f;
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

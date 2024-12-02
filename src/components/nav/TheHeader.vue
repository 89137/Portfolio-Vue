<template>
  <header>
    <container>
      <div class="logo">
        <img src="/images/BelljahhLogoD.png" alt="Website Logo" />
      </div>
      <nav>
        <router-link to="/" class="nav-link" exact-active-class="active"
          >Home</router-link
        >
        <router-link to="/about" class="nav-link" exact-active-class="active"
          >About</router-link
        >
        <router-link to="/projects" class="nav-link" exact-active-class="active"
          >Projects</router-link
        >
        <router-link to="/cv" class="nav-link" exact-active-class="active"
          >CV</router-link
        >
      </nav>
      <ContactButton />
    </container>
  </header>
</template>

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
  padding-top: 9px;
  width: 100%;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(32px);
  background-color: rgba(4, 6, 21, 0.5);
  box-shadow: 0 2px 8px rgba(0, 50, 107, 0.116);
}

container {
  width: 100%;
  max-width: 1200px;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
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
  font-family: 'Inter28ptSemiBold', sans-serif; /* Apply your custom font */
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
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

@media (max-width: 950px) {
  header {
    padding-top: 1rem;
  }

  container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    padding: 1rem;
  }

  .logo img {
    height: 3rem;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }

  .nav-link {
    padding: 0.75rem 1.25rem;
    font-size: 1.1rem;
  }
}
</style>

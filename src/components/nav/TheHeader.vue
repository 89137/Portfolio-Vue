<template>
  <header>
    <container>
      <div class="logo">
        <img src="/images/BelljahhLogoD.png" alt="Website Logo" />
      </div>
      <div class="menu-toggle" @click="toggleMenu" v-show="isMobile">
        <div class="hamburger" :class="{ open: isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav :class="{ 'mobile-menu': isMobile, 'show-menu': isMenuOpen }">
        <router-link to="/" class="nav-link" exact-active-class="active"
          >Home</router-link
        >
        <router-link to="/about" class="nav-link" exact-active-class="active"
          >About</router-link
        >
        <router-link to="/projects" class="nav-link" exact-active-class="active"
          >Projects</router-link
        >
        <router-link
          to="/contact"
          class="nav-link"
          exact-active-class="active"
          v-show="isMobile && isMenuOpen"
          >Contact</router-link
        >
      </nav>
      <ContactButton v-show="!isMobile || !isMenuOpen" />
    </container>
  </header>
</template>

<script>
import ContactButton from '@/components/UI/ContactButton.vue';

export default {
  components: {
    ContactButton,
  },
  data() {
    return {
      isMenuOpen: false,
      isMobile: false,
    };
  },
  mounted() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
  },
  unmounted() {
    window.removeEventListener('resize', this.checkMobile);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    checkMobile() {
      this.isMobile = window.innerWidth <= 950;
      if (!this.isMobile) {
        this.isMenuOpen = false;
      }
    },
  },
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
  padding-top: 9px;
  width: 100%;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(32px);
  background-color: rgba(4, 6, 21, 0.5);
  box-shadow: 0 2px 8px rgba(0, 50, 107, 0.116);
  position: relative;
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
  height: calc(1rem + 2vw + 2vh);
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
  font-size: calc(0.5rem + 0.5vw + 0.5vh);
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
  font-family: 'Inter28ptSemiBold', sans-serif;
  color: black;
  background-color: #ffffff;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: calc(0.75rem + 0.5vw + 0.5vh);
}

.contact-button:hover {
  background-color: #50fff056;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: white;
}

.contact-button.active {
  background-color: #5c4de29f;
  color: white;
}

.contact-link {
  color: black;
  text-decoration: none;
  font-weight: bold;
}

.contact-button:hover .contact-link {
  color: rgb(0, 0, 0);
}

.menu-toggle {
  display: none;
  cursor: pointer;
  z-index: 1000;
}

.hamburger {
  width: 30px;
  height: 20px;
  position: relative;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background: #50fff0;
  position: absolute;
  transition: all 0.3s ease;
}

.hamburger span:nth-child(1) {
  top: 0;
}

.hamburger span:nth-child(2) {
  top: 9px;
}

.hamburger span:nth-child(3) {
  top: 18px;
}

.hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(8px, -8px);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: none;
}

.overlay.show {
  display: block;
}

@media (max-width: 950px) {
  .menu-toggle {
    display: block;
  }

  nav.mobile-menu {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 250px;
    background-color: rgba(4, 6, 21, 0.95);
    backdrop-filter: blur(32px);
    border-radius: 0 0 0 8px;
    padding: 2rem 1rem;
    flex-direction: column;
    gap: 1rem;
    box-shadow: 0 4px 20px rgba(0, 50, 107, 0.2);
    z-index: 1001;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  }

  nav.show-menu {
    transform: translateX(0);
  }

  .nav-link {
    width: 100%;
    text-align: center;
    padding: 0.75rem 1rem;
  }

  container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }

  .logo img {
    height: 5rem;
  }

  .contact-button {
    display: none;
  }
}
</style>

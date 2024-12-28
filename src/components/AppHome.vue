<template>
  <div id="app">
    <AppHeader />
    <main>
      <section class="hero">
        <div class="hero-content">
          <h1>Welcome to Plan It</h1>
          <p>Your ultimate trip planning companion.</p>
          <!-- Get Started Button -->
          <button class="get-started" @click="redirectToRegister">Get Started</button>
        </div>
      </section>
      <AppServices />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";
import AppServices from "./AppServices.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
    AppServices,
  },
  mounted() {
    AOS.init();
  },
  methods: {
    redirectToRegister() {
      // This will navigate to the Register page
      this.$router.push({ name: 'register' });
    },
  },
};
</script>

<style>
@import "animate.css";

/* Ensure the page uses the entire viewport */
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Arial, sans-serif;
  background: url("../assets/bg-image.jpeg") no-repeat center center fixed;
  background-size: cover;
  color: white;
}

/* Hero Section */
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh; /* 80% of the viewport height for better visibility */
  text-align: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.2); /* Subtle overlay for better readability */
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  animation: fadeIn 1.5s;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

/* Get Started Button */
.get-started {
  background-color: #00c6ff; /* Bright blue color */
  color: white;
  font-size: 1.2rem;
  padding: 15px 30px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.get-started:hover {
  background-color: #008cba; /* Darker shade of blue on hover */
  transform: scale(1.1);
}

/* Header Styling */
header {
  background-color: rgba(0, 0, 0, 0.9); /* Opaque background */
  color: white;
  padding: 15px 20px; /* Increased padding for height */
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

header .navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header .navbar a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  transition: all 0.3s ease;
}

header .navbar a:hover {
  color: #00c6ff;
}

/* Footer Styling */
footer {
  background-color: rgba(0, 0, 0, 0.9); /* Opaque background */
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 1rem;
}

footer p {
  margin: 0;
}

footer a {
  color: #00c6ff;
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}
</style>

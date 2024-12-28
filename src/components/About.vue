<template>
    <div id="about">
      <AppHeader />
      <main>
        <section class="hero">
          <div class="hero-content">
            <h1>About Us</h1>
            <p>
              Discover how Plan It helps travelers plan seamless trips, manage expenses, and create memorable journeys.
            </p>
          </div>
        </section>
  
        <section class="content">
          <div class="container">
            <h2>Who We Are</h2>
            <p>
              Plan It is a modern platform designed to simplify trip planning for individuals, families, and groups. Our goal is to provide accurate estimates, travel insights, and tools for a hassle-free experience.
            </p>
  
            <h2>Our Mission</h2>
            <p>
              To empower travelers by offering comprehensive trip-planning solutions that save time, reduce stress, and ensure a budget-friendly adventure.
            </p>
  
            <h2>Why Choose Us?</h2>
            <p>
              <ul>
                <li>Detailed cost estimates for every trip.</li>
                <li>Customized travel options for solo, family, or group trips.</li>
                <li>Access to featured trips with curated plans and accommodations.</li>
                <li>Seamless tools for reminders and planning future trips.</li>
              </ul>
            </p>
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  </template>
  
  <script>
  import AppHeader from "./AppHeader.vue";
  import AppFooter from "./AppFooter.vue";
  
  export default {
    components: {
      AppHeader,
      AppFooter,
    },
  };
  </script>
  
  <style scoped>
  @import "animate.css";
  
  /* Styling matches the Services and Privacy Policy pages */
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
  
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40vh;
    text-align: center;
    padding: 20px;
    background: rgba(0, 0, 0, 0.5);
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
  
  .content {
    padding: 40px 20px;
  }
  
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .container h2 {
    font-size: 2rem;
    margin-top: 20px;
    color: #00c6ff;
  }
  
  .container p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 20px;
  }
  
  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  
  ul li {
    margin-bottom: 10px;
  }
  </style>
  
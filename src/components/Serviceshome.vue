<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <div id="services">
      <AppHeader />
      <main>
        <section class="hero">
          <div class="hero-content">
            <h1>Our Services</h1>
            <p>
              We provide innovative tools and features to help you plan your trips effortlessly, ensuring a memorable experience within your budget.
            </p>
          </div>
        </section>
  
        <section class="content">
          <div class="container">
            <h2>1. Expense Overview</h2>
            <p>
              Get a detailed overview of your trip expenses, making it easier to manage your budget for a stress-free travel experience.
            </p>
  
            <h2>2. Customizable Trip Options</h2>
            <p>
              Choose from a variety of trip types, such as solo trips, family vacations, or adventures with friends, all customized to suit your preferences.
            </p>
  
            <h2>3. Automatic Expense Calculation</h2>
            <p>
              Our app calculates the total approximate expenses for your trip, regardless of the number of people, helping you stay within your budget.
            </p>
  
            <h2>4. Featured Trips</h2>
            <p>
              Explore our featured trips with detailed plans and estimated costs, offering you exciting and curated travel options.
            </p>
  
            <h2>5. Accommodation Details</h2>
            <p>
              Get detailed information about accommodations at your travel destination, ensuring comfort and convenience during your stay.
            </p>
  
            <h2>6. Trip Planning and Reminders</h2>
            <p>
              Plan your trips with ease and set reminders for upcoming travels, so you never miss out on your exciting adventures.
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
    height: 40vh; /* Height of the hero section */
    text-align: center;
    padding: 20px;
    background: rgba(0, 0, 0, 0.5); /* Subtle overlay for better readability */
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
  
  /* Content Section */
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
  
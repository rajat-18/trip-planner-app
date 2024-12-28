<template>
    <div id="contact">
      <AppHeader />
      <main>
        <section class="hero">
          <div class="hero-content">
            <h1>Contact Us</h1>
            <p>
              We'd love to hear from you! Reach out to us for any inquiries, feedback, or assistance.
            </p>
          </div>
        </section>
  
        <section class="content">
          <div class="container">
            <h2>Get in Touch</h2>
            <p>
              If you have any questions or need support, feel free to contact us using the details below:
            </p>
            <p>
              <strong>Email:</strong> support@planit.com<br />
              <strong>Phone:</strong> +1-234-567-8900<br />
              <strong>Address:</strong> 123 Travel Lane, Adventure City, Country
            </p>
  
            <h2>Follow Us</h2>
            <p>
              Stay connected with us on social media for updates, tips, and special offers:
            </p>
            <ul>
              <li><strong>Facebook:</strong> facebook.com/planit</li>
              <li><strong>Twitter:</strong> twitter.com/planit</li>
              <li><strong>Instagram:</strong> instagram.com/planit</li>
            </ul>
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
  
  /* Consistent styling with other pages */
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
  
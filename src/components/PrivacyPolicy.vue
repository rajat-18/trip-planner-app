<template>
    <div id="privacy-policy">
      <AppHeader />
      <main>
        <section class="hero">
          <div class="hero-content">
            <h1>Privacy Policy</h1>
            <p>We value your privacy and are committed to protecting your personal data.</p>
          </div>
        </section>
  
        <section class="content">
          <div class="container">
            <h2>Introduction</h2>
            <p>
              At Plan It, we respect your privacy and are committed to protecting the personal data you share with us. This Privacy Policy explains how we collect, use, and safeguard your information.
            </p>
  
            <h2>1. Information We Collect</h2>
            <p>
              We collect the following types of information:
              <ul>
                <li><strong>Personal Information:</strong> Name, email address, etc.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website or app.</li>
                <li><strong>Cookies:</strong> Small files stored on your device to improve your user experience.</li>
              </ul>
            </p>
  
            <h2>2. How We Use Your Information</h2>
            <p>
              The information we collect is used to provide, maintain, and improve our services, including:
              <ul>
                <li>Providing personalized content and recommendations.</li>
                <li>Communicating with you regarding updates or offers.</li>
                <li>Improving the functionality and performance of our platform.</li>
              </ul>
            </p>
  
            <h2>3. Data Security</h2>
            <p>
              We implement security measures to protect your personal data from unauthorized access or disclosure. However, no data transmission over the internet can be guaranteed to be 100% secure.
            </p>
  
            <h2>4. Sharing Your Information</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. However, we may share information with trusted service providers who assist us in operating our services, provided they agree to keep the information confidential.
            </p>
  
            <h2>5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal data at any time. If you wish to exercise these rights, please contact us using the information below.
            </p>
  
            <h2>6. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on this page.
            </p>
  
            <h2>7. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at:
              <br />
              <strong>Email:</strong> support@planit.com
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
    height: 40vh; /* 80% of the viewport height for better visibility */
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
  
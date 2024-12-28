<template>
  <header>
    <div class="navbar">
      <!-- Logo with Image -->
      <div class="logo">
        <img src="@/assets/logo2.png" alt="Plan It Logo" class="logo-img" />
        Plan It
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="/login" class="login-btn">Login</a> <!-- Login option added -->
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
/* Header Styling */
header {
  background-color: rgba(0, 0, 0, 0.557); /* Opaque background */
  padding: 5px 20px; /* Reduced padding for better alignment */
  font-family: Arial, sans-serif;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.navbar {
  display: flex;
  justify-content: flex-start; /* Align items to the left */
  align-items: center;
  width: 100%;
  font-size: 0.9rem; /* Further reduced font size */
}

.logo {
  display: flex;
  align-items: center;
  font-size: 1.3rem; /* Slightly reduced font size for logo */
  color: white;
  font-weight: bold;
  margin-right: 20px; /* Added margin to separate logo and nav items */
}

.logo-img {
  width: 50px; /* Adjust size of the logo image */
  height: auto; /* Maintain aspect ratio */
  margin-right: 5px;
  margin-bottom: 7px;
  /* Space between the image and text */
}

nav {
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Align items to the right */
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 12px; /* Reduced margin for better spacing */
  transition: all 0.3s ease;
  font-size: 0.9rem; /* Standard font size for navigation items */
}

nav a:hover {
  color: #00c6ff;
}

.login-btn {
  color: #00c6ff;
  font-size: 0.9rem; /* Reduced font size for login button */
  padding: 6px 12px;
  border: 2px solid #00c6ff;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-left: 20px; /* Added left margin to separate the login button from nav items */
}

.login-btn:hover {
  background-color: #00c6ff;
  color: white;
}

/* Ensure proper display of the login button */
@media screen and (max-width: 768px) {
  .navbar {
    flex-direction: column; /* Stack navbar items on smaller screens */
    text-align: center; /* Center align text on smaller screens */
  }

  .logo {
    margin-bottom: 10px; /* Add space below the logo when stacked */
  }

  nav a {
    margin: 10px 0; /* Vertical spacing for navigation links */
  }

  .login-btn {
    margin-top: 10px; /* Add space above login button */
  }
}
</style>

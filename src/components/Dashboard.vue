<template>
    <div class="dashboard">
      <!-- Header -->
      <header class="header">
        <div class="logo">Trip Planner</div>
        <nav class="nav-links">
          <a href="#">Home</a>
          <a href="#">Destinations</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </nav>
      </header>
  
      <!-- Main Content -->
      <div class="main-content">
        <div class="trip-type-buttons">
          <button @click="selectTrip('short')">Short Trip</button>
          <button @click="selectTrip('family')">Family Trip</button>
          <button @click="selectTrip('friends')">Friends Trip</button>
        </div>
  
        <div class="trip-card">
          <h3>Plan Your Trip</h3>
          <div class="form-field">
            <label for="from">From</label>
            <input type="text" id="from" v-model="from" placeholder="Enter start location">
          </div>
          <div class="form-field">
            <label for="to">To</label>
            <input type="text" id="to" v-model="to" placeholder="Enter destination">
          </div>
          <div class="form-field">
            <label for="persons">No. of Persons</label>
            <input type="number" id="persons" v-model="persons" placeholder="Enter number of persons">
          </div>
          <button @click="search">Search</button>
        </div>
      </div>
  
      <!-- Footer -->
      <footer class="footer">
        <p>© 2024 Trip Planner | All Rights Reserved</p>
        <div class="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">FAQ</a>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        from: '',
        to: '',
        persons: 1,
        tripType: '',
      };
    },
    methods: {
      selectTrip(type) {
        this.tripType = type;
        console.log(`Trip type selected: ${type}`);
      },
      search() {
        console.log(`Searching for ${this.tripType} trip from ${this.from} to ${this.to} for ${this.persons} persons`);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Basic reset */
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Helvetica Neue', sans-serif;
  }
  
  * {
    box-sizing: border-box;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  h3 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
  }
  
  .dashboard {
    /* Full-screen background */
    background: linear-gradient(to right, #1e755f, #3b9f82); /* Sea green gradient */
    color: #fff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  /* Header Styling */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    padding: 20px 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .logo {
    font-size: 1.8rem;
    font-weight: bold;
    color: #333;
  }
  
  .nav-links {
    display: flex;
    align-items: center;
  }
  
  .nav-links a {
    margin-left: 20px;
    font-size: 1rem;
    color: #333;
    transition: color 0.3s ease;
  }
  
  .nav-links a:hover {
    color: #3498db;
  }
  
  /* Main Content */
  .main-content {
    background-color: #3498db;
    color: white;
    padding: 50px 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  
  .trip-type-buttons {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 40px;
  }
  
  button {
    background-color: #fff;
    color: #3498db;
    border: none;
    padding: 15px 35px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.3s ease;
  }
  
  button:hover {
    background-color: #2980b9;
    color: white;
  }
  
  /* Trip Card */
  .trip-card {
    background-color: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    width: 100%;
    max-width: 450px;
    text-align: center;
  }
  
  .form-field {
    margin-bottom: 20px;
  }
  
  .form-field label {
    display: block;
    font-size: 1rem;
    color: #333;
    margin-bottom: 5px;
  }
  
  .form-field input {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  button {
    background-color: #2980b9;
    color: white;
    padding: 12px;
    font-size: 18px;
    width: 100%;
  }
  
  /* Footer Styling */
  .footer {
    background-color: #2e8b57; /* Green footer */
    color: white;
    text-align: center;
    padding: 20px;
  }
  
  .footer-links {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  
  .footer-links a {
    margin: 0 15px;
    font-size: 14px;
    color: white;
  }
  
  .footer-links a:hover {
    text-decoration: underline;
  }
  
  /* Responsive Layout for Smaller Screens */
  @media (max-width: 768px) {
    .trip-type-buttons {
      flex-direction: column;
      margin-bottom: 20px;
    }
  
    .trip-card {
      padding: 20px;
      width: 100%;
    }
  
    .footer-links {
      flex-direction: column;
      margin-top: 15px;
    }
  
    .header {
      flex-direction: column;
      align-items: center;
      padding: 15px;
    }
  
    .nav-links {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
    }
  
    .nav-links a {
      margin-bottom: 10px;
    }
  }
  </style>
  
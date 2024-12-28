<template>
  <div class="login-page">
    <div class="form-container">
      <h2>Login</h2>
      <form @submit.prevent="submitForm" class="login-form">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" placeholder="Enter your email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" placeholder="Enter your password" required />
        </div>
        <div class="form-group">
          <button type="submit" @click="redirectdashboard" class="submit-btn">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    submitForm() {
      console.log('Login Form Submitted', {
        email: this.email,
        password: this.password
      });
      this.email = '';
      this.password = '';
    },
    redirectdashboard() {
      this.$router.push({ name: 'dashboard' });
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  font-family: Arial, sans-serif;
}

.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('./../assets/bg-image2.jpeg') no-repeat center center fixed;
  background-size: cover;
}

.form-container {
  background-color: rgba(255, 255, 255, 0.95);
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 400px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;
}

.login-form {
  width: 100%;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
  color: #555;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: border-color 0.3s ease-in-out;
}

input:focus {
  border-color: #00c6ff;
  outline: none;
  box-shadow: 0 0 4px rgba(0, 198, 255, 0.4);
}

.submit-btn {
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  background-color: #00c6ff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.submit-btn:hover {
  background-color: #008cba;
  transform: scale(1.05);
}

body {
  margin: 0;
}
</style>

<template>
  <div class="login">
    <h1 class="title">Iniciar Sesión</h1>
    <form action class="form" @submit.prevent="login">
      <label class="form-label" for="#email">Email:</label>
      <input
          v-model="email"
          class="form-input"
          type="email"
          id="email"
          required
          placeholder="Email"
      />
      <label class="form-label" for="#password">Contraseña:</label>
      <input
          v-model="password"
          class="form-input"
          type="password"
          id="password"
          placeholder="Password"
      />
      <p v-if="error" class="error">
        Has introducido mal el email o la contraseña.
      </p>
      <input class="form-submit" type="submit" value="Iniciar Sesión" />
    </form>
    <div class="register-option">
      <span>¿No tienes una cuenta?</span>
      <router-link to="/register">
        <button class="btn-register">Regístrate</button>
      </router-link>
    </div>
  </div>
  <footer />
</template>

<script>
export default {
  data: () => ({
    email: "",
    password: "",
    error: false,
  }),
  methods: {
    login() {
      console.log(this.email);
      console.log(this.password);
      this.$router.push('/home');
    },
  },
};
</script>

<style scoped>
.login {
  padding: 2rem;
  min-height: 91vh;
  background-image: url("../assets/security-guards.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.title {
  text-align: center;
  color: #fff;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
  background-color: #8DA9C4;
}
.form-label {
  margin-top: 2rem;
  color: black;
  margin-bottom: 0.5rem;
  &:first-of-type {
    margin-top: 0rem;
  }
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: black solid 1px;
  color: white;
  &:focus {
    outline: 0;
    border-color: black;
  }
}
.form-submit {
  background: #F9A825;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b9185;
  }
}
.register-option {
  margin-top: 20px;
  text-align: center;
  color: #fff;
}

.btn-register {
  margin-left: 10px;
  padding: 10px;
  background-color: #F9A825;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: #0b9185;
  }
}
</style>
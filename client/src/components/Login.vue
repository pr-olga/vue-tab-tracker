<template>
    <section class="login">
        <h1>Login</h1>

        <b-form-input
        type="text"
        name="email"
        id="email"
        placeholder="email"
        v-model="email"
        ></b-form-input>
        <br>
        <b-form-input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        v-model="password"></b-form-input>
        <br>
        <b-button variant="success" @click="login">Login</b-button>
        <div class="error" v-html="error"></div>
    </section>
</template>

<script>
import AuthentificationService from '@/services/AuthentificationService'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        await AuthentificationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error{
  color: red;
}
</style>

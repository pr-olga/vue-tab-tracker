<template>
    <section class="register">
        <h1>Register</h1>

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
        <b-button variant="success" @click="register">Register</b-button>
        <div class="error" v-html="error"></div>
    </section>
</template>

<script>
import AuthentificationService from '@/services/AuthentificationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthentificationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
/*     watch: {
        email (value) {
            console.log('email has changed', value)
        }
    },
    mounted () {
        setTimeout(() => {
            this.email = 'hello wolrd'
        }, 2000)
    } */
}
</script>

<style scoped>
.error{
  color: red;
}
</style>

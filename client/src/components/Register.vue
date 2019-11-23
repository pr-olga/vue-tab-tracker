<template>
    <section class="register">
        <h1>Register</h1>

        <input type="text" name="email" id="" placeholder="email"
        v-model="email"
        ><br>
        <input type="password" name="password" id="" placeholder="password"
        v-model="password"
        ><br>
        <button @click="register">Register</button>
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
        await AuthentificationService.register({
          email: this.email,
          password: this.password
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

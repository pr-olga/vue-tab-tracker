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
    </section>
</template>

<script>
import AuthentificationService from '@/services/AuthentificationService'
export default {
    name: 'Register',
    data () {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async register () {
            const response = await AuthentificationService.register({
                email: this.email,
                password: this.password
            })
            console.log (response.data)
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

</style>
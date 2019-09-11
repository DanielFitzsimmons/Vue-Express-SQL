<template>
  <div class="container-fluid">

    <div class="row justify-content-md-center">
      <div class="col-md-4 col-12">
    <!--Login Bootstrap Card-->
    <b-card class="text-center shadow-lg bg-light mt-5">
        <h4 slot="header" class="text-primary m-0">Login</h4>
        <b-form-input type="email" name="email" placeholder="email" v-model="email" class="mb-3"></b-form-input>
        <b-form-input type="password" name="password" placeholder="password" v-model="password"></b-form-input>
        <!-- Errors display div-->
        <b-card-text v-html="error" class="error mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
        <b-button variant="primary" class="w-100" @click="login">Login</b-button>
    </b-card>
    <!-- /Login Bootstrap Card-->
      </div>
    </div>

  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Login',
  data () {
    return {
      email: 'test@test.com',
      password: 'password',
      // property for storing errors
      error: null
    }
  },
  methods: {
    async login () {
      // try catch block to catch the error messages from the api
      try {
        const responce = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', responce.data.token)
        this.$store.dispatch('setUser', responce.data.user)
      } catch (error) {
        // saving the responce to the data property of this commponent
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color:red;
  }
</style>

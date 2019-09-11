<template>
   <div>
    <b-navbar toggleable="md" type="light" variant="info">
      <b-navbar-brand to="/">How To Handy</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="register" class="btn btn-primary">Register</router-link>
          <router-link to="login" class="btn btn-primary">Login</router-link>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

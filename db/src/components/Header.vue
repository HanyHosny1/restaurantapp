<template>
  <div class="nav">
    <routerLink to="/">Home</routerLink>
    <routerLink to="/add">Add Restaurant</routerLink>
    <a v-on:click="logout" href="#">Logout</a>
    <img class="logo" src="../assets/resto-logo.jpg" />
  </div>
</template>

<script>
export default {
  name: 'HeaderTap',
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: 'Login' });
    },
  },
};
</script>

<style>
.nav {
  background-color: #2e2e2e;
  overflow: hidden;
}
.nav a {
  float: left;
  color: #fff;
  padding: 14px;
  margin: 5px;
  text-align: center;
  font-size: 20px;
  text-decoration: wavy;
}
.nav a:hover,
.nav a:focus {
  background-color: beige;
  color: #2e2e2e;
  border-radius: 5px;
}
.nav img {
  padding: 14px;
  margin: 5px;
  float: right;
  align-items: center;
  width: 30px;
}
</style>

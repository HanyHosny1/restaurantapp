<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  padding: 0;
  /* margin: 0; */
}
.logo {
  width: 150px;
  border-radius: 60px;
  transition: box-shadow 0.5s;
}

.logo:hover {
  box-shadow: 0 0 5px #fff, inset 0 0 5px #fff, 0 0 20px #08f,
    inset 0 0 20px #08f, 0 0 40px #08f, inset 0 0 40px #08f;
}

h2 {
  text-transform: uppercase;
  letter-spacing: 4px;
  font-style: italic;
}

.register input,
.login input,
.add input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 2px solid skyblue;
}

.register button,
.login button,
.add button {
  width: 320px;
  height: 40px;
  border: 2px solid black;
  background: skyblue;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-style: bold;
  transition: box-shadow 0.5s;
}
.register button:hover,
.login button:hover,
.add button:hover {
  box-shadow: 0 0 5px #fff, inset 0 0 5px #fff, 0 0 20px rgb(93, 86, 138),
    inset 0 0 20px rgb(93, 86, 138), 0 0 40px rgb(93, 86, 138),
    inset 0 0 40px rgb(93, 86, 138);
}
</style>

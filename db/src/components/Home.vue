<template>
  <Header />
  <h1>Hello {{ name }}, Welcome to Home Page</h1>
  <table border="1px">
    <tr>
      <td><strong>ID</strong></td>
      <td><strong>Name</strong></td>
      <td><strong>Contact</strong></td>
      <td><strong>Address</strong></td>
      <td><strong>Action</strong></td>
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
      <td>
        <router-link :to="'/update/' + item.id">Update</router-link>
        <button class="delete" v-on:click="deleteRestaurant(item.id)">
          Delete
        </button>
      </td>
    </tr>
  </table>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';
export default {
  name: 'HomePage',
  data() {
    return {
      name: '',
      restaurant: [],
    };
  },
  components: {
    Header,
  },
  methods: {
    async deleteRestaurant(id) {
      let result = await axios.delete('http://localhost:3000/restaurant/' + id);
      console.warn(result.status);
      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem('user-info');
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: 'SignUp' });
      }
      let result = await axios.get('http://localhost:3000/restaurant');
      console.warn(result);
      this.restaurant = result.data;
    },
  },

  async mounted() {
    this.loadData();
  },
};
</script>

<style>
td {
  width: 160px;
  height: 40px;
}
.delete {
  margin-left: 5px;
  background-color: rgb(255, 0, 0);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>

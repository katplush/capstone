<template>
  <div>
    <nav class="spacing">
      <router-link class="spacing" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page:'/'
        },
        {
          id: 1,
          text: 'Shop',
          page:'/Shop'
        },
        {
          id: 2,
          text: 'About Us',
          page:'/About'
        }
      ]
    }
  }
}
</script>
<style>
.spacing {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 30px;
  color: black; 
  font-size: 20px;
}
</style>

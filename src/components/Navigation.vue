<template>
  <nav>
    <b-navbar toggleable="lg" variant="light" type="light">
      <b-navbar-brand> 
        <router-link v-bind:to="'/'">
        <img src="https://res.cloudinary.com/dlp1f5oxt/image/upload/c_scale,w_105/v1566871056/txt-only_zobjvr.png" alt="logo">
        </router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="{ name: 'Shop' }">Shop</b-nav-item>
          <b-nav-item :to="{ name: 'About' }">About</b-nav-item>
          <!-- <router-link v-for="routes in links" 
          v-bind:key="routes.id"
          :to="`${routes.page}`"> {{routes.text}} </router-link> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </nav>
</template>

<script>
// export default {
//   name: 'Navigation',
//   data() {
//     return {
//       links: [
//         {
//           id: 0,
//           text: 'Shop',
//           page:'/Shop'
//         },
//         {
//           id: 1,
//           text: 'About',
//           page:'/About'
//         }
//       ]
//     }
//   }
// }
</script>

<style scoped>
</style>

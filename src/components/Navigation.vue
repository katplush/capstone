<template>
  <div>
    <nav>
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
          page:'/HelloWorld'
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
        },
        {
          id: 3,
          text: 'Contact Us',
          page:'/Contact'
        }
      ]
    }
  }
}
</script>
<style>
.spacing {
  margin-right: 30px;
}
</style>

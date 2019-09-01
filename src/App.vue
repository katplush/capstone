
<template>
  <div id="app">
    <Navigation></Navigation>
    <div>
      <router-link v-bind:to="'/'"><img src="https://res.cloudinary.com/dlp1f5oxt/image/upload/c_scale,w_150/v1566871055/2019-08-26_18-56-04_rgpguo.png" fluid alt="Center image" img-alt="logo" style="margin: 30px"></router-link>
    </div>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    'Navigation': Navigation,
    'Footer': Footer
  },
  methods: {
    track () {
      this.$ga.page('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo {
  margin: 50px;
} 
</style>


<template>
  <div id="app">
    <Navigation></Navigation>
    <img class="logo" alt="Sync logo" src="./assets/img/txt-only_edited_logo.jpg" width="250" height="auto">
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
  margin-bottom: 20px;
} 
</style>

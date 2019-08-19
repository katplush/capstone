/* eslint-disable */

<template>
  <div>
    <h1>About</h1>
    <p>Here is some information. This is the about page</p>
    <google-map></google-map>
  </div>
</template>

<script>
import GoogleMap from "@/components/GoogleMap"
export default {
  name: 'About', //this is the name of the component
  components: {
    "google-map": GoogleMap
  }
};
</script>

<style scoped>
.google-map {
  height: 400px;
  width: 100%;
}
</style>


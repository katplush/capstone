/* eslint-disable */

<template>
  <div class="google-map">
    <h1>{{ msg }}</h1>
    <div id="map"></div>
  </div>
</template>

<script>
import { KEY } from "../config";
const loadGoogleMapsApi = require("load-google-maps-api");
export default {
  name: 'google-map',
  data () {
    return {
      msg: 'Our favorite dog parks'
    }},
  mounted() {
     loadGoogleMapsApi({ key: KEY })
      .then(googleMaps => {
        new googleMaps.Map(document.querySelector("#map"), {
        center: {
          lat:47.691110, 
          lng: -122.400389
          },
        zoom: 17
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>

<style scoped>
  #map {
  height:300px;
  width: 100%;
  }
</style>
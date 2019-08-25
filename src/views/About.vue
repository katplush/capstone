/* eslint-disable */

<template>
  <div>
    <div class="about">
    <b-card border-variant="white" img-src="https://res.cloudinary.com/dlp1f5oxt/image/upload/c_scale,h_350/v1566713753/IMG_the_kids_l5wbf8.png" img-alt="Card image" img-right>
      <b-card-text>
        We love our animals. To us, they’re more that pets, they’re family. Like all families we want to do our best to provide for those we care about. It is with this in mind that we created our flagship dog treats.
      </b-card-text>
    </b-card>
  </div>
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
  /* height: 400px;
  width: 100%; */
  margin-top: 50px;
}
.about {
  margin-top: 50px;
  font-size: 20px;
}
</style>


/* eslint-disable */

<template>
  <div>
    <div class="about-card">
      <b-card border-variant="white" no-body class="overflow-hidden" style="max-width: 740px; margin: auto;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img src="https://res.cloudinary.com/dlp1f5oxt/image/upload/c_scale,w_400/v1566713753/IMG_the_kids_l5wbf8.png" img-alt="Our two dogs, Kiera and Bronn" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="About Us">
              <b-card-text>
                We love our animals. To us, they’re more that pets, they’re family. Like all families we want to do our best to provide for those we care about. It is with this in mind that we created our flagship dog treats.
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
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
/* .about-card {
  display: block;
  margin-left: auto;
  margin-right: auto;
} */

</style>


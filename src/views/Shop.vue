<template>
<b-container fluid class="rounded-0">
  <div id="buy">
  <b-card no-body class="overflow-hidden" border-variant="light" style="max-width: 800px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://res.cloudinary.com/dlp1f5oxt/image/upload/v1566707685/IMG_Shop_Treat_rnlgem.jpg" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Liver Treats">
          <b-card-text>
            Simple grass fed dehydrated beef liver treats. Spanning the history of our kinship, organ meat has been the main prize for our furry friends. Liver in particular offers a nutritious and delectable treat they are sure to crave. Specially sourced from grass fed cows and dehydrated to preserve taste and nutrition, these treats call back to the  relationship we’ve bred from time immemorial.<br>8 oz. bag<br><b>$9.99</b>
          </b-card-text>
          <b-button size="lg" variant="outline-dark" v-b-popover.hover="'Online Store is not available at this time.'" title="Sorry!">Buy</b-button>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
</b-container>
</template>

<script>
export default {
  name: 'Shop' //this is the name of the component
}
</script>

<style scope>
#buy {
  margin-top: 50px;
} 
</style>
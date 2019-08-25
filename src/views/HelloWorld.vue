<template>
  <div>
    <div>
      <b-img src="https://res.cloudinary.com/dlp1f5oxt/image/upload/v1566701832/IMG_Cover.jpg" fluid alt="Responsive image"></b-img>
    </div> 
    <div>
    <b-card bg-variant="light" text-variant="dark" title="">
    <b-card-text  id="shopUs">
      Picky dogs love us!
    </b-card-text>
    <b-button size="lg" href="#" variant="dark">SHOP</b-button>
    </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3, h2 {
  margin: 100px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#shopUs {
  /* background-image: url(../assets/img/kiera_cover.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%; */
  font-size: 30px;
  margin-top: 50px;
} 
.btn {
  color: white;
  margin: 50px;
}
</style>

<template>
  <div id="helloworld">
    <!-- Header -->
    <header class="masthead d-flex">
      <div class="container text-center my-auto">
        <h1 class="mb-1"></h1>
        <h3 class="mb-5">
          <!-- <div class="focal">
            <img src="../assets/img/kiera_cover.jpg" alt="dog">
          </div> -->
          <em>Picky dogs love us!</em>
        </h3>
      </div>
      <div class="overlay"></div>
    </header>
    <section class="content-section bg-light" id="about">
    <div class="container text-center">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <h2>Stylish Portfolio is the perfect theme for your next project!</h2>
          <p class="lead mb-5">This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at
            <a href="https://unsplash.com/">Unsplash</a>!</p>
          <a class="btn btn-dark btn-xl js-scroll-trigger" href="#services">SHOP</a>
        </div>
      </div>
    </div>
  </section>
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
h3 {
  margin: 40px 0 0;
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
#helloworld {
  background-image: url(../assets/img/kiera_cover.jpg)
}
.btn {
  color: white;
}


</style>

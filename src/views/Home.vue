<template>
  <!-- <Navbar /> -->
  <div>
    <Carousel />
    <Main />
    <!-- <Footer /> -->
  </div>
</template>

<script>
// import Navbar from "../components/Navbar.vue";
import Carousel from "../components/Carousel.vue";
import Main from "../components/Main.vue";
// import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    // Navbar,
    Carousel,
    Main,
    // Footer,
  },
  data() {
    console.log("current func", this.$route);
  },
};
</script>
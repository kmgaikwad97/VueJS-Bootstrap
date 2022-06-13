<template>
  <!-- <Navbar /> -->
  <div>
    <!-- <Main /> -->
    <Aboutwrapper />
    <Aboutmain />
    <!-- <FooterAbout /> -->
  </div>
</template>
<script>
// import Navbar from "../components/Navbar.vue";
// import Footer from "../components/Footer.vue";
// import Main from "../components/Main";
import Aboutwrapper from "../components/Aboutwrapper";
import Aboutmain from "../components/Aboutmain.vue";
// // import FooterAbout from "../components/FooterAbout.vue"
export default {
  name: "About",
  methods: {
    // showHome: false,
    // showAbout: false,
    // showService: false,
    // showContact: false,
  },
  components: {
    // Navbar,
    // Footer,
    // Main,
    Aboutwrapper,
    Aboutmain,
    // FooterAbout
  },
  props: {
    showAbout: Boolean,
  },
};
</script>
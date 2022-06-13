<template>
  <Servicewrapper />
  <Servicemain />
  <!-- <FooterService /> -->
</template>
<script>
import Servicemain from "../components/Servicemain.vue";
import Servicewrapper from "../components/Servicewrapper.vue";
// // import FooterService from "../components/FooterService.vue";
export default {
  name: "Services",
  components: {
    Servicemain,
    Servicewrapper,
    // FooterService,
  },
};
</script>
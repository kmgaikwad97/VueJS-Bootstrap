<template>
  <Contactwrapper />
  <Contactmain />
  <!-- <FooterContact /> -->
</template>
<script>
import Contactwrapper from "../components/Contactwrapper.vue";
import Contactmain from "../components/Contactmain.vue";
// // import FooterContact from "../components/FooterContact.vue";

export default {
  name: "Contact",
  components: {
    Contactwrapper,
    Contactmain,
    // FooterContact,
  },
};
</script>
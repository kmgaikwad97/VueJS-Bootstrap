<template>
  <div class="about-wrapper">
    <img src="../assets/images/img6.jpg" class="about-img img-fluid" alt="" />
    <div class="centered">
      <div class="design">ABOUT US</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Aboutwrapper",
};
</script>

<style scoped>
.about-wrapper {
  position: relative;
}

.about-img {
  width: 100%;
  max-width: 100% !important;
  height: 700px !important;
  opacity: 0.8;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.design {
  text-align: center;
  color: #000 !important;
  font-weight: 900 !important;
  font-size: 30px !important;
}

@media screen and (max-width: 330px) {
  .design {
    font-size: 14px !important;
    padding: 0 7px !important;
  }
}

@media screen and (max-width: 450px) {
  .design {
    font-size: 16px !important;
    padding: 0 10px !important;
  }
}

@media screen and (max-width: 576px) {
  .design {
    font-size: 12px !important;
    /* padding: 0 7px !important; */
  }
}

@media screen and (max-width: 768px) {
  .about-img {
    height: 350px !important;
  }
  .design {
    font-size: 20px !important;
    /* padding: 0 7px !important; */
  }
}

/* @media screen and (max-width: 768px) {
  .about-img {
    height: 450px !important;
  }
  .design {
    font-size: 24px !important;
    padding: 0 12px;
  }
} */
</style>
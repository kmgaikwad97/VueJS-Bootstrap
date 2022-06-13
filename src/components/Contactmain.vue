<template>
  <div class="container background-texture">
    <div class="container home-main">
      <div class="home-main-content about-heading">
        <h2 class="main-heading">Start Your Journey and Get in Touch</h2>

        <hr class="home-line" />

        <div class="row">
          <div class="col-12">
            <p class="home-data about-text">
              If you are right at the start of your project, or already have
              plans and are raring to go – we can help! Whether it is major
              structural alterations or contemporary fit-outs, please don’t
              hesitate to get in touch to find out more about Guybrand Limited,
              or to get a no obligation quote.
            </p>
            <p class="home-data about-text">
              Please feel free to contact us regarding any of our services using
              the following details:
            </p>
          </div>
        </div>
      </div>

      <div class="row home-last-box align-content-justify">
        <div class="col-sm-12 col-md-6">
          <div class="contact-box about-box">
            <p class="home-box-content">
              <i class="icon-color fa-solid fa-location-dot"></i>
              <b> Address:</b> <br />
              Guybrand Limited, <br />
              Office 973, <br />
              58 Peregrine Road, <br />
              Illford IG6 3SZ
            </p>
          </div>
        </div>

        <div class="col-sm-12 col-md-6">
          <div class="contact-box about-box">
            <p class="home-box-content">
              <i class="icon-color fa-solid fa-phone"></i>
              <b> Landline: <a class="num">0207 183 0754</a></b>
            </p>
            <p class="home-box-content">
              <i class="icon-color fa-solid fa-envelope"></i>
              <b> Email: <a class="num">sales@guybrand.co.uk</a></b>
            </p>
          </div>
        </div>
      </div>

      <div class="home-main-content about-heading">
        <h2 class="main-heading">WHERE WE ARE</h2>

        <hr class="home-line" />

        <div class="row">
          <div class="col-12">
            <div class="map-projections text-center">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Map from "./Map.vue";
export default {
  name: "Contactmain",
  components: {
    Map,
  },
};
</script>

<style scoped>
.size {
  width: 80vw;
  height: 80vh;
  max-width: 100%;
}
.num {
  font-weight: 400;
  text-decoration: none;
  color: orange;
  cursor: pointer;
}
.num:hover {
  color: #2f7ef5;
}
.home-main {
  max-width: 1140px;
}

.home-box1 {
  display: flex !important;
  flex-direction: row-reverse;
}

.main-heading {
  font-family: Copperplate, Copperplate Gothic Light, fantasy;
  color: orange;
  text-align: center;
  font-weight: 900 !important;
  font-size: 30px !important;
}

.home-main-content {
  padding-top: 5%;
  padding-bottom: 5%;
}

.home-line {
  background: #2f7ef5;
  height: 1px;
  margin: 1rem 0;
  color: inherit;
  border: 0;
  opacity: 0.25;
}

.background-texture {
  background-image: url("../assets/images/background.jpg");
  max-width: 100% !important;
}

.home-data {
  /* font-family: Didot, Didot LT STD, Hoefler Text, Garamond, Calisto MT, Times New Roman, serif; */
  font-size: 23px;
  color: #fff;
  padding-top: 2%;
}

.home-box {
  padding-bottom: 5%;
}

.align-items-center {
  text-align: center;
}

.home-box-content {
  font-size: 18px;
  color: #ffa500;
}
.icon-color {
  color: #0b2266;
}

.home-box-content2 {
  padding-top: 5%;
  line-height: 25px !important;
  letter-spacing: 2.5px !important;
  font-size: 20px !important;
  /* text-align: justify; */
}

.head2 {
  /* font-family: Copperplate,Copperplate Gothic Light,fantasy; */
  font-size: 30px !important;
  color: orange;
  text-align: center;
  font-weight: 900 !important;
}

.home-last-box {
  padding-bottom: 5%;
}

@media screen and (max-width: 768px) {
  .home-main {
    max-width: 100%;
    padding: 0 40px;
  }

  .home-box-content {
    padding-bottom: 4%;
  }
  .head2 {
    font-size: 28px !important;
  }
}

@media screen and (max-width: 576px) {
  .home-main {
    max-width: 100%;
  }
  .home-box-content {
    font-size: 17px;
  }
  .home-data {
    font-size: 17px !important;
  }
  .home-box-content {
    font-size: 18px !important;
  }
  .head2 {
    font-size: 26px !important;
  }
  .size {
    height: 20vh;
  }
}

@media only screen and (max-width: 450px) {
  .main-heading {
    font-size: 26px !important;
  }
  .home-box-content {
    font-size: 17px !important;
  }
}

@media only screen and (max-width: 330px) {
  .main-heading {
    font-size: 24px !important;
  }
  .home-data {
    font-size: 16px !important;
  }
  .home-box-content {
    font-size: 15px !important;
  }
  .head2 {
    font-size: 23px !important;
  }
}
</style>

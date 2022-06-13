<template>
  <div class="container background-texture">
    <div class="container home-main"> 
      <div class="home-main-content">
        <h2 class="main-heading">Guybrand Limited</h2>

        <hr class="home-line" />

        <div class="row">
          <div class="col-12">
            <p class="home-data">
              Guybrand Limited is a family-run building company. Every home is
              unique and should be perfectly built and designed to meet your
              needs. The Guybrand Limited team is made up of talented and
              experienced building professionals who will discuss all the
              options available and work with you to develop the best solution
              for your home.
            </p>
          </div>
        </div>
      </div>
      

      <div class="row home-box align-items-center text-center">
        <div class="col-sm-12 col-md-6">
          <p class="home-box-content">
            When it comes to any building project, there is a wealth of
            information available and the options can be overwhelming. Whether
            you’re starting the process of working your way up the property
            ladder, remodelling your living space, or building a dream home, it
            can be tricky to know where to start. We are here to support you on
            every step of the journey.
          </p>
        </div>

        <div class="col-sm-12 col-md-6">
          <figure>
            <img class="img-fluid" src="../assets/images/img4.jpg" alt="" />
          </figure>
        </div>
      </div>

      <div class="row home-box home-box1 align-items-center text-center">
        <div class="col-sm-12 col-md-6">
          <p class="home-box-content">
            The Guybrand Limited building expertise is vast. We undertake all
            types of projects – from new builds, extensions and conversions to
            high-end renovations, as well as commercial work. Whatever the size
            or scope of your project, you can be confident that Guybrand Limited
            will deliver with meticulous care, great value and efficiency.
          </p>
        </div>

        <div class="col-sm-12 col-md-6">
          <figure>
            <img class="img-fluid" src="../assets/images/img5.jpg" alt="" />
          </figure>
        </div>
      </div>

      <!-- part 3 -->

      <div class="row home-last-box align-content-justify">
        <div class="col-sm-12 col-md-6 home-box-content">
          <h1 class="head2">Ready to go ?</h1>
          <p class="home-box-content home-box-content2 text-center">
            If you have architectural plans and are looking for professional
            builders, find out more about the Guybrand Limited Bespoke Build
            service.
          </p>
        </div>

        <div class="col-sm-12 col-md-6 home-box-content">
          <h1 class="head2">Just Starting Out?</h1>
          <p class="home-box-content home-box-content2 text-center">
            If you’re at the beginning of your journey and need someone to take
            care of everything, find out more about the Guybrand Limited Design,
            Planning & Build service.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style scoped>
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
  color: #fff;
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

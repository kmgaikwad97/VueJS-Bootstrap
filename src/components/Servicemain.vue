<template>
  <div class="container background-texture">
    <div class="container home-main about-main">
      <div class="row home-box align-items-center">
        <div class="col-sm-12 col-md-6">
          <h2 class="head">BESPOKE BUILD</h2>
          <p class="home-box-content">
            If you already have your building concept, architectural drawings
            and planning permission, you need a trustworthy building company
            that offers great service and value to turn your plans into reality.
            We have a vast experience of all sizes of projects and a specialist,
            all-trades in-house team. One of the best ways of creating your
            dream home and maximising its value is to find a property and
            renovate it to suit your individual needs. Many of our renovations
            involve taking the house back to its shell and completely
            remodelling.
          </p>
        </div>

        <div class="col-sm-12 col-md-6">
          <figure>
            <img class="img-fluid" src="../assets/images/img10.jpg" alt="" />
          </figure>
        </div>
      </div>

      <div class="row home-box home-box1 align-items-center">
        <div class="col-sm-12 col-md-6">
          <h2 class="head">DESIGN, PLANNING & BUILDING</h2>

          <p class="home-box-content">
            If you are at the beginning of your development journey we offer an
            end-to-end, stress-free package, which includes design, planning and
            build. The Guybrand Limited specialist team will come up with a
            variety of inspirational, functional and practical concepts to suit
            your budget and needs. Our architects know how to balance an
            exciting vision with practical strategies and legal implications and
            our large team of skilled builders will turn your plans into
            reality.
          </p>
        </div>

        <div class="col-sm-12 col-md-6 text-align-center">
          <figure>
            <img class="img-fluid" src="../assets/images/img11.jpg" alt="" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about-box-content {
  /* width: calc(33.33% - 20px); */
  margin: 10px;
  border-radius: 15px;
  background: #2f7ef5;
  border: 1px solid #000;
  color: #fff;
  /* border-radius: 0.25rem; */
}

@media screen and (min-width: 768px) {
  .about-box-content {
    width: calc(33.33% - 20px);
    margin: 10px;
  }
}

.about-card-header {
  color: orange;
  font-size: 24px;
  text-align: center;
  font-family: Copperplate, Copperplate Gothic Light, fantasy;

  padding: 0.5rem 1rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
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
  padding: 5% 0%;
}

/* .align-items-center {
  text-align: center;
} */

.home-box-content {
  font-size: 18px;
  color: #fff;
  padding-top: 2%;
}

.home-box-content2 {
  padding-top: 5%;
  line-height: 25px !important;
  letter-spacing: 2.5px !important;
  font-size: 20px !important;
  /* text-align: justify; */
}

.head2 {
  font-family: Copperplate, Copperplate Gothic Light, fantasy;
  font-size: 30px !important;
  color: orange;
  text-align: center;
  font-weight: 900 !important;
}

.head {
  /* font-family: Copperplate, Copperplate Gothic Light, fantasy; */
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
  .head {
    font-size: 27px !important;
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
  .head {
    font-size: 23px !important;
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
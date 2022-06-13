<template>
  <div class="container background-texture">
    <div class="container home-main about-main">
      <div class="home-main-content">
        <div class="main-heading about-heading">
          <h1 class="head">Why Choose Guybrand Limited?</h1>
        </div>

        <!-- part 1 -->
        <div class="row">
          <div class="col-12">
            <p class="home-data about-data">
              Guybrand Limited is a family-run company that has grown
              organically into a large professional team of skilled tradesmen.
              We maintain the highest quality of work by only using our own team
              and partnering with leading architectural, surveyor, design and
              engineering companies. Most of our work comes through customer and
              professional referrals.
              <br />
              This is due to a combination of making sure we truly understand
              clients’ needs, whilst providing the finest finish through
              attention to detail and quality workmanship. Every project is
              personally managed by our directors who collaborate with all
              parties involved to ensure progress is being made until successful
              and timely completion.
            </p>
          </div>
        </div>
      </div>

      <!-- part 2 -->

      <div class="row home-box text-center">
        <div class="about-box-content col-sm-12 col-md-4">
          <div class="about-box">
            <h2 class="about-card-header">Quality</h2>
            <p class="about-card-content">
              We understand any building development is a huge financial
              investment for you. That’s why we have strict quality controls in
              place, which allows our experienced team of professionals to
              deliver top quality results that will increase property value.
            </p>
          </div>
        </div>

        <div class="about-box-content col-sm-12 col-md-4">
          <div class="about-box">
            <h2 class="about-card-header">Costs</h2>
            <p class="about-card-content">
              We provide clear detailed quotations that allow you to make
              informed decisions. Our efficient resource management, build
              management and innovative building techniques and technology
              enable us to pass savings on to clients. And this means we are
              competitive on price.
            </p>
          </div>
        </div>

        <div class="about-box-content col-sm-12 col-md-4">
          <div class="about-box">
            <h2 class="about-card-header">Time</h2>
            <p class="about-card-content">
              Any building work can be stressful for busy people – especially
              when you are juggling work and family commitments. Project
              continuity is vital. Effective project management combined with
              our committed, all-trades team allows us to deliver – fast!
            </p>
          </div>
        </div>
      </div>

      <!-- part3 -->

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
            <img class="img-fluid" src="../assets/images/img7.jpg" alt="" />
          </figure>
        </div>
      </div>

      <!-- 4th -->

      <div class="row home-box home-box1 align-items-center text-center">
        <div class="col-sm-12 col-md-6">
          <p class="home-box-content">
            Guybrand Limited shares years’ experience in the building industry,
            construction management and trade qualifications. Over the years
            they have gained significant experience working for leading
            construction and blue chip companies. Today Guybrand Limited is
            stronger than ever thanks to its vision of providing high quality
            workmanship combined with outstanding personal service and care.
          </p>
        </div>

        <div class="col-sm-12 col-md-6">
          <figure>
            <img class="img-fluid" src="../assets/images/img8.jpg" alt="" />
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
  /* border-radius: 15px; */
  background: #2f7ef5;
  border: 1px solid #000;
  color: #fff;
  /* border-radius: 0.25rem; */
}
.about-box-content:last-child {
  margin-right: 0;
}

.about-card-content {
  padding: 16px;
  text-align: left;
}

@media screen and (min-width: 768px) {
  .about-box-content {
    width: calc(30.33% - 20px);
    margin-left: 4%;
  }
}

.about-card-header {
  color: orange;
  font-size: 24px;
  font-weight: 900 !important;
  text-align: center;
  font-family: Copperplate, Copperplate Gothic Light, fantasy;
  /* padding: 16px !important; */
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
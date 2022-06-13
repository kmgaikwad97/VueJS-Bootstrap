<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="true"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="../assets/images/img1.jpg"
          class="carousel-length carousel-display carousel-img d-block w-100"
          alt="..."
        />

        <div class="centered">
          <p class="design">Welcome To Guybrand Limited</p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../assets/images/img2.jpg"
          class="carousel-length carousel-display carousel-img d-block w-100"
          alt="..."
        />

        <div class="centered">
          <p class="design">Welcome To Guybrand Limited</p>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../assets/images/img3.jpg"
          class="carousel-length carousel-display carousel-img d-block w-100"
          alt="..."
        />

        <div class="centered">
          <p class="design">Welcome To Guybrand Limited</p>
        </div>
      </div>
    </div>
    <!-- <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button> -->
  </div>
</template>

<script>
export default {
  name: "Carousel",
};
</script>

<style scoped>
.carousel-img {
  opacity: 0.7;
}
.centered {
  left: 0;
  position: absolute;
  text-align: center;
  top: 50%;
  width: 100%;
}
.design {
  text-align: center;
  color: #000 !important;
  font-weight: 900 !important;
  font-size: 30px !important;
}
.carousel-indicators > button {
  background-color: orange !important;
}
.carousel-display {
  max-width: 100vw !important;
  height: 700px !important;
}

@media screen and (max-width: 576px) {
  .carousel-length {
    max-width: 100% !important;
    height: 350px !important;
  }
  .design {
    font-size: 20px !important;
    padding: 0 7px !important;
  }
}

@media screen and (max-width: 768px) {
  .carousel-length {
    height: 450px !important;
  }
  .design {
    font-size: 24px !important;
    padding: 0 12px;
  }
}
/* @media screen and (max-width: 768px) {
  .carousel-length {
    max-width: 100% !important;
    height: 00px !important;
  } */
/* } */
/* @media screen and (max-width: 576px) {
  .carousel-length {
    max-width: 100% !important;
    height: 300px !important;
  }
} */
</style>
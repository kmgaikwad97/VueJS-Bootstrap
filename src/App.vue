<template>
  <nav class="navbar navbar-expand-lg fixed-top bg-light">
    <div class="container">
      <div class="myclass">
        <a href="#top" class="navbar-brand" to="/">
          <img src="./assets/images/logo.svg" class="logo-svg" alt="" />
        </a>

        <button
          class="navbar-toggler navbarbtn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto text-center mb-2 mb-lg-0">
            <li class="nav-item space">
              <router-link class="list" aria-current="page" to="/"
                >Home</router-link
              >
            </li>

            <li class="nav-item space">
              <router-link class="list" to="/about">About</router-link>
            </li>

            <li class="nav-item space">
              <router-link class="list" to="/services">Services</router-link>
            </li>

            <li class="nav-item space">
              <router-link class="list" to="/contact">Contact</router-link>
            </li>
          </ul>
          <!-- <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
        </div>
      </div>
    </div>
  </nav>

  <router-view></router-view>

  <!-- <Navbar /> -->

  <!-- <Carousel /> -->
  <!-- <About /> -->
  <!-- <HelloWorld /> -->
  <!-- <Main /> -->
  <!-- <child /> -->

  <!-- <h1>User Name : {{ name }}</h1> -->
  <Footer />
</template>

<script>
import Footer from "./components/Footer.vue";
// import child from "./components/child.vue";
export default {
  name: "App",
  data() {
    return {
      // console.log("current func", this.$route);
      name: "",
    };
  },
  components: {
    Footer,
    // child,
  },
  methods: {
    getUserName(name) {
      // alert(name)
      this.name = name;
    },
  },
};
</script>

<style scoped>
.myclass {
  display: flex;
}
.logo-svg {
  width: 20%;
}

.list {
  color: rgb(104, 102, 102);
  text-decoration: none;
  padding-left: 18px;
  margin-left: 28px;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
}

.list:hover {
  color: #2f7ef5;
}

nav a.router-link-exact-active {
  color: #2f7ef5 !important;
  border: none;
}

.space {
  padding-right: 2vw;
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
}

.nav-link.active {
  color: rgb(112 112 113);
}

/* .nav-link:focus,
.nav-link:hover {
  color: #2f7ef5;
} */

@media (min-width: 768px) {
  .navbar-expand-lg {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
}

@media only screen and (max-width: 992px) {
  .logo-svg {
    width: 15%;
  }
}

@media only screen and (max-width: 767px) {
  html {
    font-size: 45%;
  }
  .logo-svg {
    width: 20%;
  }
  .navbarbtn {
    margin-left: 65% !important;
  }
}

@media only screen and (max-width: 576px) {
  .navbar {
    position: static;
  }
  html {
    font-size: 35%;
  }
  .logo-svg {
    width: 25%;
  }
  .myclass {
    display: inline-block;
  }
  .navbarbtn {
    margin-left: 50% !important;
  }
}

@media only screen and (max-width: 991px) {
  html {
    font-size: 55%;
  }
  .myclass {
    display: inline-block;
  }
  .navbarbtn {
    margin-left: 73%;
  }
}

@media only screen and (max-width: 400px) {
  html {
    font-size: 30%;
  }
  .navbarbtn {
    margin-left: 44% !important;
  }
  .myclass {
    display: inline-block;
  }
}

@media only screen and (max-width: 260px) {
  .navbarbtn {
    margin-left: 33% !important;
  }
}
</style>

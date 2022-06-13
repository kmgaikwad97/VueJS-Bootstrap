<template>
<footer>
    <div class="container grey-footer">
        <div class="row justify-content-evenly align-items-center footer">
            <div class="nav footer-column-1 flex-column col-sm-12 col-md-4 text-center">
                <router-link class="nav-link active" aria-current="page" to="/">
                    <img src="../assets/images/logo.svg" style="width: 40%" class="img-fluid" alt="" />
                </router-link>
                <router-link class="nav-link" to="/">Home</router-link>
                <router-link class="nav-link" to="/about">About</router-link>
                <router-link v-if="HideService" class="nav-link" to="/services">Services</router-link>
                <router-link class="nav-link" to="/contact">Contact</router-link>
            </div>

            <div class="col-sm-12 col-md-4">
                <div class="padd">
                    <div class="footer-heading">
                        <h3 class="titlefoot">Get in touch</h3>
                        <hr class="home-line" />
                        <p class="footer-data">
                            Please feel free to get in touch with us regarding any of our
                            services using the following details
                        </p>
                        <div class="footer-list">
                            <ul>
                                <li>
                                    Office 973,
                                    <br />
                                    58 Peregrine Road,
                                    <br />
                                    Ilford IG6 3SZ
                                </li>

                                <li>Phone: 0207 183 0754</li>

                                <li>
                                    Email:
                                    <a style="color: rgb(0, 51, 102) !important">sales@guybrand.co.uk</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-12 col-md-4">
                <div class="padd">
                    <div class="footer-heading">
                        <h3 class="titlefoot">Where we are</h3>
                        <hr class="home-line" />
                        <Map />
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
</template>

<script>
import Map from "./Map.vue";
export default {
    name: "Footer",
    data() {
        return {
            HideService: false,
        };
    },
    methods: {
        dataChange() {
            console.log("button pressed");
        },
    },
    components: {
        Map,
    },
};
</script>

<style scoped>
.footer {
    background-color: #b8bab9 !important;
}

.grey-footer {
    max-width: 100% !important;
    background-color: #b8bab9 !important;
    color: #fff;
    font-weight: 800px;
    line-height: 28px;
    font-size: 18px;
    padding-top: 2% !important;
    padding-bottom: 2% !important;
}

.justify-content-evenly {
    justify-content: space-evenly;
}

.align-items-center {
    align-items: center;
}

.footer-column-1 {
    text-align: center;
    font-size: 20px;
    padding-bottom: 4%;
}

.nav-link {
    color: #0d6efd;
}

.active,
.nav-link:hover {
    color: #2f7ef5 !important;
}

.titlefoot {
    color: #2f7ef5 !important;
}

.home-line {
    background: #2f7ef5;
    height: 1px;
    margin: 1rem 0;
    color: inherit;
    border: 0;
    /* opacity: 0.25; */
}

/* .home-line:not([size]) {
  height: 1px;
} */

.footer-data {
    font-size: 16px;
    line-height: 1;
    color: #2f7ef5 !important;
    padding-bottom: 20px;
}

.footer-heading {
    padding: 0 40px;
}

.footer-list {
    color: #000;
}

@media only screen and (max-width: 766px) {
    .padd {
        margin-right: 10%;
        margin-left: 10%;
    }

    .titlefoot {
        text-align: center;
    }
}

@media only screen and (max-width: 350px) {
    .footer-data {
        font-size: 12px;
    }
}

@media only screen and (max-width: 450px) {
    .footer-data {
        font-size: 13px;
    }
}

@media only screen and (max-width: 576px) {
    .footer-list ul {
        padding: 0;
        font-size: 15px;
    }

    .footer-heading {
        padding: 0;
    }
}
</style>

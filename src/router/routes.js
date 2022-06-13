import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Services from "../views/Services.vue"
import Contact from "../views/Contact.vue"

const routes=[
    {
        name:"Home",
        path:'/',
        component:Home
    },
    {
        name:"About",
        path:'/about',
        component:About
    },
    {
        name:"Services",
        path:"/services",
        component:Services
    },
    {
        name:"Contact",
        path:"/contact",
        component:Contact
    }
    
];

const router = createRouter({
    history:createWebHistory(),
    routes,
//     linkActiveClass: "active", // active class for non-exact links.
//   linkExactActiveClass: "active" // active class for *exact* links.
})
export default router
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes'
// window.$ = window.jQuery = require('jquery');
// import jQuery from "jquery";
// const $ = jQuery;
// window.$ = $;

createApp(App).use(router).mount('#app')    

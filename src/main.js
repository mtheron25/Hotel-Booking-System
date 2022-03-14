import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// import { Icon } from "@iconify/vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

createApp(App).use(router).mount("#app");

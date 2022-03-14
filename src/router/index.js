import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import Login from "../views/Login.vue";
import Bookings from "../views/Bookings.vue";
import SingleBooking from "../views/SingleBooking.vue";
import Contact from "../components/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/:about",
  //   name: "About",
  //   component: About,
  // },

  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/bookings",
    name: "Bookings",
    component: Bookings,
  },
  {
    path: "/single-booking",
    name: "SingleBooking",
    component: SingleBooking,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

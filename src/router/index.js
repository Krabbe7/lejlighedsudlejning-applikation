import { createRouter, createWebHistory } from "vue-router"
import homeView from "../views/homeview.vue"
import Lejlighedsudlejningview from "../views/lejlighedsudlejningview.vue"

const router = createRouter({
  history: createWebHistory(), // Tilføj history her
  routes: [
    {
      path: "/",
      name: "home",
      component: homeView,
    },
    {
      path: "/lejlighedsudlejning",
      name: "lejlighedsudlejning",
      component: Lejlighedsudlejningview,
    },
  ],
})

export default router

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@client/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "platonic",
      component: () => import("@client/views/PlatonicView.vue"),
    },
    {
      path: "/see",
      name: "see",
      component: HomeView,
    },
  ],
});

export default router;

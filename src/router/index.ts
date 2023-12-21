import { createRouter, createWebHistory } from "vue-router";
import Results from "@/components/Results.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Results
    },
  ],
});

export default router;
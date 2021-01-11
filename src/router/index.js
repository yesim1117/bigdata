import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home",
    component: () => import("../views/home/Home.vue")
  },
  {
    path: "/home",
    component: () => import("../views/home/Home.vue")
  },
  {
    path: "/monitoringlist",
    component: () => import("../views/monitoringlist/Monitoringlist.vue")
  },
];

const router = new VueRouter({
  routes
});

export default router;

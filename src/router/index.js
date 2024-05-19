import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      //首頁
      path: "/",
      name: "home",
      // component: HomeView
      component: () => import("../views/home.vue"),
    },
    {
      // 建立提案(gemini機器人)
      path: "/gemini",
      name: "gemini",
      component: () => import("../views/gemini/Gemini.vue"),
    },
    {
      // 關於我們
      path: "/aboutour",
      name: "aboutour",
      component: () => import("../views/about/aboutOur.vue"),
    },
    {
      // 聯絡我們
      path: "/contact",
      name: "contact",
      component: () => import("../views/about/contact.vue"),
    },
    {
      // 登入
      path: "/login",
      name: "login",
      component: () => import("../views/login/login.vue"),
    },
    {
      // 註冊
      path: "/register",
      name: "register",
      component: () => import("../views/login/register.vue"),
    },
    {
      // 全部旅程規劃
      path: "/allTravel",
      name: "allTravel",
      component: () => import("../views/allTravel.vue"),
    },
    {
      // 會員頁面
      path: "/userView",
      name: "userView",
      component: () => import("../views/userView.vue"),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'
import underReviewItem from "@/views/user/underReviewItem.vue";
import audited from "@/views/user/audited.vue";
import checkOut from "@/views/travelView/checkOut.vue";
import gemini from "@/views/gemini/Gemini.vue";

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
      component: gemini,
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
      component: () => import("../views/user/userView.vue"),
    },
    {
      // 提案紀錄
      path: "/proposalRecord",
      name: "proposalRecord",
      component: () => import("../views/user/proposalRecord.vue"),
      children: [
        {
          path: "underReviewItem",
          component: underReviewItem,
        },
        {
          path: "audited",
          component: audited,
        },
      ],
    },
    {
      // 旅程報名
      path: "/signUp",
      name: "signUp",
      component: () => import("../views/travelView/signUp.vue"),
    },
    // 結帳
    {
      path: "/checkOut",
      name: "checkOut",
      component: checkOut,
    },
    {
      // 測試
      path: "/test",
      name: "test",
      component: () => import("../views/test.vue"),
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

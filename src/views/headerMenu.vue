<script setup>
import { ref } from "vue";
import { useTokenStore } from "@/stores/token.js";

const store = useTokenStore();
const haveLogin = ref(false);
if (store.token == "f") {
  haveLogin.value = false;
} else {
  haveLogin.value = true;
}
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid headerBox">
        <RouterLink class="navbar-brand icon_box" to="/"
          ><img
            class="icon_img"
            src="../components/icons/綠能旅遊icon.png"
            alt="綠能旅遊icon"
          />
          <span class="icon_title_box">
            <span class="icon_title_text">綠能旅遊</span>
          </span>
        </RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse menuBox" id="navbarNavAltMarkup">
          <div class="navbar-nav menu_optionBox">
            <RouterLink class="nav-link active" aria-current="page" to="/gemini"
              ><span class="menu_text">建立提案</span></RouterLink
            >
            <RouterLink class="nav-link" to="/allTravel"
              ><span class="menu_text">全部旅程規劃</span></RouterLink
            >
            <RouterLink class="nav-link" to="/aboutOur"
              ><span class="menu_text">企業聯絡</span></RouterLink
            >
            <RouterLink class="nav-link" to="/login" v-if="!haveLogin"
              ><span class="menu_text">登入/註冊</span></RouterLink
            >
            <RouterLink class="nav-link" to="/userView" v-if="haveLogin">
              <img
                src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
                class="user_img"
            /></RouterLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style>
/* header_style */
header {
  position: fixed;
  width: 100%;
  height: 70px;
  left: 0px;
  top: 0px;
  z-index: 10;
}
.headerBox {
  padding: 0% 20%;
  display: flex;
  width: 100%;
  height: 70px;
  left: 0px;
  top: 0px;
}
.navbar {
  background-color: #67ebac;
}
/* menu_style */
.menuBox {
  display: flex;
  justify-content: flex-end;
  height: 100%;
  padding-top: 20px;
}
.menu_optionBox {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  height: 50px;
}
.menu_text {
  font-family: "Inter";
  font-style: normal;
  font-size: 20px;
  text-align: center;
}
/* icon_style */
.icon_box {
  display: flex;
  width: 200px;
}
.icon_img {
  width: 60px;
  height: 60px;
  left: 19px;
  top: -6px;
}
.icon_title_box {
  padding-top: 12px;
  display: flex;
  justify-content: left;
}
.icon_title_text {
  font-family: "Inter";
  font-style: normal;
  font-weight: 350;
  font-size: 30px;
  color: #000000;
}
.user_img {
  width: 50px;
  border-radius: 50%;
}
</style>

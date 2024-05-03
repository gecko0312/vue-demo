<script setup>
import headerMenu from "../headerMenu.vue";
</script>

<template>
  <headerMenu />
  <div class="body">
    <h1>綠能旅遊網</h1>
    <p>綠旅創立於2024年，為台灣首家以”綠能”為主軸的線上旅行社。</p>
    <br />
    <p>秉持著”環保”、”永續”、”健康”、”數位化”的四大初衷發展。</p>
    <br />
    <p>
      本公司目標是提供旅客們最順心、最高客製化的旅遊方案，利用Google生成式AI
      BARD，帶給旅客們最佳旅遊指南。
    </p>
    <br />
    <RouterLink to="/contact">聯繫我們</RouterLink>
  </div>
</template>

<style scoped>
.body {
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
    url("../../components/aboutOur_bg.jpg");
  background-size: cover;
  background-position: center;
  background-color: antiquewhite;
  color: white;
}
.body h1 {
  font: size 400px;
}
.body p {
  color: whitesmoke;
  font-size: medium;
  margin: 7px;
}
.body a {
  color: aliceblue;
  text-decoration: none;
  border: 1px solid #acacac;
  padding: 10px 20px;
  border-radius: 5px;
}
</style>

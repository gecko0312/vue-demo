<script setup>
import { ref } from "vue";
import headerMenu from "./headerMenu.vue";
import firstImg from "../components/image/白沙灣.jpg";
import secondImg from "../components/image/花蓮.jpg";
import thirdtImg from "../components/image/風景.jpg";
import cardList from "./cardList.vue";
import axios from "axios";

// 生測試資料
const travelData = ref([]);
const countdownData = ref([]);
const date = ref("");
const pointData = ref([]);

axios.get("http://localhost:3000/travelData").then((res) => {
  for (let i in res.data) {
    travelData.value.push(res.data[i]);
  }
});
axios.get("http://localhost:3000/countdownData").then((res) => {
  for (let i in res.data) {
    countdownData.value.push(res.data[i]);
  }
});
axios.get("http://localhost:3000/pointData").then((res) => {
  for (let i in res.data) {
    pointData.value.push(res.data[i]);
  }
});
</script>

<template>
  <headerMenu />
  <!-- 幻燈片 -->
  <div id="carousel_img" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="2000">
        <img
          :src="firstImg"
          class="d-block w-100 img_carousel"
          alt="first_img"
        />
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img :src="secondImg" class="d-block w-100 img_carousel" alt="..." />
      </div>
      <div class="carousel-item">
        <img :src="thirdtImg" class="d-block w-100 img_carousel" alt="..." />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carousel_img"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carousel_img"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <!-- 確定成團cardList -->
  <div>
    <div class="cardTitleBox">
      <p style="border-bottom: 5px; box-shadow: 0 1px; width: 15cm">
        <span class="cardTitle">確定成團</span>
        <span class="cardSubTitle">大家都搶著加入的熱門行程！！</span>
      </p>
    </div>
    <cardList card-type="travelCard" :data="travelData" />
  </div>
  <!-- 限時特價cardList -->
  <div>
    <div class="cardTitleBox">
      <p style="border-bottom: 5px; box-shadow: 0 1px; width: 15cm">
        <span class="cardTitle">限時特價</span>
        <span class="cardSubTitle">即將成團！限時特價！錯過就不再</span>
      </p>
    </div>
    <cardList card-type="countdownCard" :data="countdownData" />
  </div>
  <!-- 兌換好禮cardList -->
  <div>
    <div class="cardTitleBox">
      <p style="border-bottom: 5px; box-shadow: 0 1px; width: 15cm">
        <span class="cardTitle">好禮兌換</span>
        <span class="cardSubTitle">綠能點數兌換好禮，綠色生活陪伴你！</span>
      </p>
    </div>
    <cardList card-type="pointCard" :data="pointData" />
  </div>
</template>

<style>
.img_carousel {
  width: 100%;
  height: 480px;
}
.cardTitleBox {
  /* margin-left: 250px; */
  margin-left: calc(15%);
}
.cardTitle {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 73px;
  text-align: center;
}
.cardSubTitle {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
}
</style>

<script setup>
import { ref } from "vue";
import headerMenu from "./headerMenu.vue";
import firstImg from "../components/image/白沙灣.jpg";
import secondImg from "../components/image/花蓮.jpg";
import thirdtImg from "../components/image/風景.jpg";
import cardList from "./cardList.vue";
// 生測試資料
const travelData = ref([
  {
    id: 1,
    title: "data1_title",
    max: 36,
    current: 24, //當前人數
    content: "data1_content", //內容
    discountNumber: 20, //滿 20人
    discountMoney: 400, //減400元
    img: "@/components/image/白沙灣.jpg",
  },
]);
const countdownData = ref([
  {
    id: "countdown_1",
    title: "countdown1_tilte",
    finDate: "1",
    nowPrice: 1580,
    originalPrice: 1990,
    img: "@/components/image/白沙灣.jpg",
  },
]);
const date = ref("");
const pointData = ref([
  {
    id: "pointData_1",
    title: "point1_tilte",
    content: "pointData1_content",
    img: "@/components/image/白沙灣.jpg",
  },
]);

for (let i = 2; i < 11; i++) {
  travelData.value.push({
    id: i,
    title: "data" + i + "_title",
    max: Math.floor(Math.random() * 100 + 1),
    current: Math.floor(Math.random() * 100 + 1),
    content: "data" + i + "_content",
    discountNumber: Math.floor(Math.random() * 30 + 1),
    discountMoney: Math.floor(Math.random() * 1000 + 200),
    img: "@/components/image/白沙灣.jpg",
  });

  date.value = i < 10 ? "0" + i : "" + i;
  countdownData.value.push({
    id: "countdown_" + i,
    title: "countdown" + i + "_tilte",
    finDate: Math.floor(Math.random() * 9 + 1),
    nowPrice: Math.floor(Math.random() * 1000 + 100) * 10,
    originalPrice: Math.floor(Math.random() * 1000 + 100) * 10,
    img: "@/components/image/白沙灣.jpg",
  });

  pointData.value.push({
    id: "pointData_" + i,
    title: "point" + i + "_tilte",
    content: "pointData" + i + "_content",
    img: "@/components/image/白沙灣.jpg",
  });
}
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

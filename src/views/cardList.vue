<script setup>
import { ref } from "vue";
const cardList = ref(null);
const travelType = ref(false);
const countdownType = ref(false);
const pointType = ref(false);

// 設定props
const props = defineProps({
  cardType: {
    type: String,
    default: "travelCard",
  },
  data: {
    type: Array,
    default: () => [],
  },
});

// style樣式
const cardBody = ref({
  backgroundColor: "red",
  color: "white",
});
if (props.cardType == "travelCard") {
  travelType.value = true;
  cardBody.value.backgroundColor = "#678CEB";
} else if (props.cardType == "countdownCard") {
  countdownType.value = true;
  cardBody.value.backgroundColor = "#C592FF";
} else if (props.cardType == "pointCard") {
  pointType.value = true;
  cardBody.value.backgroundColor = "#47B466";
}

// 按鈕事件
function nextCard() {
  cardList.value.style.scrollBehavior = "smooth";
  cardList.value.scrollLeft += 900;
}
function backCard() {
  cardList.value.style.scrollBehavior = "smooth";
  cardList.value.scrollLeft -= 900;
}
</script>

<template>
  <div class="cardListBody">
    <div class="cardList_BtnPositionBox">
      <button @click="backCard()" class="controlCardListBtn back">
        <i class="bi bi-chevron-compact-left"></i>
      </button>
      <button @click="nextCard()" class="controlCardListBtn next">
        <i class="bi bi-chevron-compact-right"></i>
      </button>
      <div class="cardList mx-auto" ref="cardList">
        <div v-for="iteam in props.data" class="cardBox" :key="iteam.id">
          <div class="card text-center" style="width: 250px; min-height: 430px">
            <img
              :src="iteam.title_img"
              class="card-img-top"
              style="min-height: 200px"
              alt="..."
            />
            <div class="card-body" :style="cardBody">
              <div class="card-title">{{ iteam.title }}</div>
              <!-- travel_Type_card -->
              <div v-if="travelType">
                <div class="card-text">
                  <div class="travelContent">{{ iteam.content }}</div>
                  <div class="travelDataText">
                    目前三團人數：{{ iteam.current }}
                  </div>
                  <div class="travelDataText">
                    最高參與人數：{{ iteam.max }}
                  </div>
                  <div class="travelDataText">
                    滿
                    <span style="color: red">{{ iteam.discountNumber }}</span>
                    人立減
                    <span style="color: yellow">{{ iteam.discountMoney }}</span>
                  </div>
                </div>
                <RouterLink to="/signUp" class="btn btn-primary travelBtn"
                  >馬上參加</RouterLink
                >
              </div>
              <!-- countdown_Type_card -->
              <div v-if="countdownType">
                <div class="card-text">
                  <div class="countdownContent">
                    <i class="bi bi-alarm"></i>
                    距離優惠結束
                  </div>
                  <div class="countdownContent">
                    剩下
                    <span class="finDate"> {{ iteam.finDate }} </span>
                    天
                  </div>
                </div>
                <div class="countdown_downBox">
                  <div class="moenyBox">
                    <div>
                      <span class="nowPrice"> TWD {{ iteam.nowPrice }} </span>
                    </div>
                    <div class="orgPrice">TWD {{ iteam.originalPrice }}</div>
                  </div>
                  <a href="#" class="btn btn-primary countdownBtn">馬上參加</a>
                </div>
              </div>
              <!-- point_Type_card -->
              <div v-if="pointType">
                <div class="card-text">
                  <div class="pointContent">
                    {{ iteam.content }}
                  </div>
                  <a href="#" class="btn btn-primary pointBtn">馬上參加</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.cardListBody {
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  /* border: 5px solid red; */
}
.cardList_BtnPositionBox {
  position: relative;
  width: 1200px;
  /* border: 10px solid blue; */
}
.cardList {
  display: flex;
  overflow-x: scroll;
  /* border: 5px solid yellow; */
}
.cardList::-webkit-scrollbar {
  display: none;
}
.cardBox {
  margin: 0px 5px;
}
.card-body {
  padding: 0px;
}
.card-title {
  /* border: 1px solid; */
  font-family: "Inter";
  font-weight: 600;
  font-size: 25px;
  margin-top: 0px;
}
.travelContent,
.pointContent {
  margin: 0px auto 10px;
  font-family: "Inter";
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  max-width: calc(50% + 60px);
}
.travelDataText {
  font-family: "Inter";
  font-weight: 600;
  font-size: 20px;
  text-align: center;
}
.travelBtn,
.countdownBtn,
.pointBtn {
  margin: 10px auto;
  font-family: "Inter";
  font-weight: 600;
  font-size: 20px;
  text-align: center;
}
.countdownContent:first-child {
  color: #000000;
}
.countdownContent {
  margin: 10px auto;
  font-family: "Inter";
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: red;
}
.finDate {
  font-size: 50px;
}
.countdown_downBox {
  display: flex;
}
.nowPrice {
  font-family: "Inter";
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #67ebac;
}
.orgPrice {
  font-family: "Inter";
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  text-decoration-line: line-through;
  color: #000000;
}
.controlCardListBtn:first-of-type {
  left: -25px;
}
.controlCardListBtn {
  z-index: 3;
  position: absolute;
  top: calc(50% - 20px);
  right: -25px;
  width: 50px;
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px 1px;
  border: 1px solid rgb(255, 255, 255);
  /* 透明度 */
  /* opacity: 0.8; */
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* -webkit-box-align: center; */
  /* -webkit-box-pack: center; */
  /* transition: all 0.3s ease 0s; */
  /* transform: scale(1); */
}

.cardCountdownTimetext {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 61px;
  text-align: center;
  color: #ff0000;
}
.btn-primary {
  background: #ff7373;
}
</style>

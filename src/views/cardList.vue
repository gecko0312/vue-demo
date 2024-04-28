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

// 倒數計時器
let timerId = setInterval(dateCountdown, 1000);
let time = ref("");
function dateCountdown() {
  const newDate = new Date();
  const finalDate = new Date("2024/05/01 09:50:00");
  const differenceSec = Math.round((finalDate - newDate) / 1000);
  time.value = timeRenderer(differenceSec);

  if (differenceSec <= 0) {
    clearInterval(timerId);
  }
  // console.log(newDate);
  // console.log(finalDate);
  // console.log("秒差：" + differenceSec);
  console.log(time);
}

// 換算時間函式
function timeRenderer(seconds) {
  let sec = seconds % 60;
  sec = sec < 10 ? "0" + sec : "" + sec;
  let hour = Math.floor(seconds / 60 / 60);
  hour = hour < 10 ? "0" + hour : "" + hour;
  let min = 0;
  if (hour > 0) {
    min = Math.floor(seconds / 60 - hour * 60);
    min = min < 10 ? "0" + min : "" + min;
  } else {
    min = Math.floor(seconds / 60);
    min = min < 10 ? "0" + min : "" + min;
  }
  const time = hour + ":" + min + ":" + sec;
  return time;
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
          <div class="card text-center" style="width: 250px">
            <img
              src="../components/image/花蓮.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body" :style="cardBody">
              <h5 class="card-title">{{ iteam.title }}</h5>
              <!-- travel_Type_card -->
              <div v-if="travelType">
                <div class="card-text">
                  <div>{{ iteam.content }}</div>
                  <div>目前三團人數：{{ iteam.current }}</div>
                  <div>最高參與人數：{{ iteam.max }}</div>
                  <div>
                    滿{{ iteam.discountNumber }}人立減{{ iteam.discountMoney }}
                  </div>
                  <!-- <br />
                {{ time }} -->
                </div>
                <a href="#" class="btn btn-primary">買上參加</a>
              </div>
              <!-- countdown_Type_card -->
              <div v-if="countdownType">
                <div class="card-text">
                  <div>finData:{{ iteam.finDate }}</div>
                  <div>目前價錢：{{ iteam.nowPrice }}</div>
                  <div>原價：{{ iteam.originalPrice }}</div>
                </div>
                <a href="#" class="btn btn-primary">買上參加</a>
              </div>
              <!-- point_Type_card -->
              <div v-if="pointType">
                <div class="card-text">
                  <div>content：{{ iteam.content }}</div>
                  <a href="#" class="btn btn-primary">買上參加</a>
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

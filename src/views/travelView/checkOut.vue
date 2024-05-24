<script setup>
import { ref, computed } from "vue";
import headerMenu from "../headerMenu.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const aldult = ref(0);
const children = ref(0);
const baby = ref(0);
const aldultPrice = ref(13500);
const childrenPrice = ref(13500);
const babyPrice = ref(6750);
const total = ref(0);

total.value = computed(() => {
  return (
    aldult.value * aldultPrice.value +
    children.value * childrenPrice.value +
    baby.value * babyPrice.value
  );
});

const checkOut = () => {
  router.push({ path: "/" });
};
</script>

<template>
  <headerMenu />
  <div class="body">
    <div class="topBlock">
      <div class="topTitle">花蓮出發．四人成行</div>
      <div class="date">出發日期：2024/07/14(日)~2024/07/17(三)</div>
      <hr />
    </div>
    <div class="middleBlock">
      <div class="row">
        <div class="middle_left col-sm-8">
          <div class="leftTitle">行程費用</div>
          <div class="priceList row">
            <div class="inputBox col-sm-8">
              <div class="inputText">
                大人：<input type="text" v-model="aldult" />
              </div>
              <div class="inputText">
                孩童：<input type="text" v-model="children" />
              </div>
              <div class="inputText">
                嬰兒：<input type="text" v-model="baby" />
              </div>
            </div>
            <div class="price col-sm-4">
              大人一人:{{ aldultPrice }}元<br />
              孩童一人:{{ childrenPrice }}元<br />
              嬰兒一人:{{ babyPrice }}元<br />
            </div>
          </div>
          <div class="precautions">
            身份說明：回程當日，[大人] 滿12歲以上之旅客。[孩童]
            滿2-12歲之小朋友。[嬰兒] 未滿2歲之幼兒。
          </div>
          <div class="aBox">
            <a href="#">報名須知</a><br />
            <a href="#">旅遊契約書</a>
          </div>
        </div>
        <div class="middle_right col-sm-4">
          <div class="moneyBox">
            <div class="moneyTitle">費用明細</div>
            <hr />
            <div class="moneyComputed">團費：</div>
            <div class="moneyComputed row">
              <div class="col-sm-3">大人</div>
              <div class="col-sm-3">x{{ aldult }}位</div>
              <div class="col-sm-6 priceText">
                TWD {{ aldult * aldultPrice }}
              </div>
            </div>
            <div class="moneyComputed row">
              <div class="col-sm-3">孩童</div>
              <div class="col-sm-3">x{{ children }}位</div>
              <div class="col-sm-6 priceText">
                TWD {{ children * childrenPrice }}
              </div>
            </div>
            <div class="moneyComputed row">
              <div class="col-sm-3">嬰兒</div>
              <div class="col-sm-3">x{{ baby }}位</div>
              <div class="col-sm-6 priceText">TWD {{ baby * babyPrice }}</div>
            </div>
            <hr />
            <div class="total row">
              <div class="col-sm-6">總價</div>
              <div class="col-sm-6 priceText">TWD {{ total }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottomBlock">
      <div class="checkBox_box">
        <input type="checkbox" />
        <span>我已經閱讀了「報名須知」與「旅遊契約書」，並同意其內容。</span>
      </div>
      <button @click="checkOut">報名</button>
    </div>
  </div>
</template>

<style scoped>
div {
  /* border: 0.1px solid; */
}
.body {
  margin: 120px auto;
  padding: 10px;
  width: 1000px;
  min-height: 600px;
  background-color: #fff;
}
.topTitle {
  font-size: 30px;
  font-weight: 800;
}
.date,
.leftTitle,
.inputText {
  font-size: 20px;
}
.priceList {
  margin-left: 25px;
}
.inputText {
  margin-top: 5px;
}
input {
  border-radius: 20px;
  width: 100px;
  height: 25px;
}
.price {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 15px;
}
.precautions {
  margin-top: 10px;
  margin-left: 35px;
  font-size: 12px;
}
.aBox {
  margin-top: 230px;
  margin-left: 35px;
}
.moneyBox {
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #b2e593;
}
.moneyTitle {
  font-size: 25px;
  font-weight: 800;
}
.moneyComputed {
  font-size: 20px;
  margin: 15px auto;
}
.priceText {
  text-align: right;
}
.total {
  font-size: 20px;
  font-weight: 800;
  margin-left: 3px;
  margin-bottom: 20px;
}

.bottomBlock {
  display: flex;
  margin-top: 100px;
  align-items: center;
  justify-content: center;
}
.checkBox_box {
  display: flex;
  justify-content: center;
  align-items: center;
}
input[type="checkbox"] {
  margin: 10px;
  width: 20px;
}
button {
  width: 100px;
  font-size: 20px;
  font-weight: 800;
  border: none;
  background-color: #d9d9d9;
}
</style>

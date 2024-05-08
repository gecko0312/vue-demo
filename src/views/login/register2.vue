<script setup>
import headerMenu from "../headerMenu.vue";
import { useRouter } from "vue-router";
const router = useRouter();
function goHome() {
  router.push({ path: "/" });
}
</script>

<template>
  <headerMenu />
  <div class="container">
    <h2>歡迎加入綠能勇士！</h2>
    <hr />
    <!-- 第一列 -->
    <div class="row">
      <div class="col-sm-12">
        <label>請輸入您的姓名：</label>
        <input
          type="text"
          placeholder="請輸入您的姓名"
          class="form-contorl long-text"
        />
      </div>
    </div>
    <!-- 第二列 -->
    <div class="row">
      <div class="col-sm-12">
        <label>請輸入您的生日：</label><br />
        <input type="date" class="inputDate" />
      </div>
    </div>
    <!-- 第三列 -->
    <div class="row">
      <div class="col-sm-12">
        <label>請輸入您欲使用的帳號名稱：</label>
        <input type="text" class="form-contorl long-text" />
      </div>
    </div>
    <!-- 第四列 -->
    <div class="box">
      <input type="checkbox" id="c1" required />
      <span
        >我同意<a href="#" onclick="openModal(); return false;"
          >使用者條款</a
        ></span
      ><br />
      <input type="checkbox" id="c2" />
      <span
        >是的，我願意收到綠能旅遊公司及受託代銷等各合作廠商之商品或服務等好康優惠訊息，並接收綠能旅遊公司關係企業專屬活動電子報的寄送</span
      >
    </div>
    <!-- 第五列 -->
    <button type="submit" @click="goHome()">完成註冊</button>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 120px auto;
  padding: 20px;
  /* border: 1px solid; */
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.row {
  margin-top: 30px;
}
h2 {
  text-align: center;
}
label {
  margin-bottom: 8px;
  font-weight: bold;
}
input {
  /* width: 80%; */
  border: 1px solid #ccc;
  border-radius: 4px;
}
.long-text {
  width: 80%;
}
.inputDate {
  width: 120px;
}
.box {
  margin: 20px 0px;
}
button {
  background-color: #e1cdb5;
  color: #000;
  padding: 2px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
}
</style>

<script setup>
import { ref } from "vue";
import headerMenu from "../headerMenu.vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();

const name = ref("");
const birthday = ref("");
const phone = ref("");
const mail = ref("");
const password = ref("");

const register = () => {
  axios
    .post("http://localhost:3000/user", {
      name: name.value,
      mail: mail.value,
      birthday: birthday.value,
      phone: phone.value,
      password: password.value,
    })
    .then((res) => {
      alert("註冊成功");
      router.push({ path: "/login" });
    })
    .catch((error) => {
      alert("註冊失敗");
    });
};
</script>

<template>
  <headerMenu />
  <div class="body">
    <div class="container">
      <h2>歡迎加入綠能勇士！</h2>
      <hr />
      <form action="">
        <!-- 第一列 -->
        <div class="row">
          <div class="col-sm-6">
            <label>請輸入您的姓名：</label>
            <input
              type="text"
              placeholder="請輸入您的姓名"
              class="form-contorl long-text"
              v-model="name"
            />
          </div>
          <div class="col-sm-4">
            <label>請輸入您的生日：</label><br />
            <input type="date" class="inputDate" v-model="birthday" />
          </div>
        </div>
        <!-- 第二列 -->
        <div class="row">
          <div class="col-sm-12"><label>請輸入手機號碼：</label></div>
          <div class="col-sm-2 selectBox">
            <select name="conutry-code" id="conutry-code">
              <option value="+886">+886</option>
            </select>
          </div>
          <div class="col-sm-7 phoneBox">
            <input type="text" class="form-contorl" v-model="phone" />
          </div>
        </div>
        <!-- 第三列 -->
        <div class="row">
          <div class="col-sm-12">
            <label>請輸入電子郵件信箱：</label>
            <input
              type="text"
              placeholder="電子郵件信箱"
              class="form-contorl"
              v-model="mail"
            />
          </div>
        </div>
        <!-- 第四列 -->
        <div class="row">
          <div class="col-sm-12">
            <label>請輸入密碼：</label>
            <input
              type="password"
              placeholder="請輸入密碼"
              class="form-contorl"
              v-model="password"
            />
          </div>
        </div>
        <!-- 第五列 -->
        <div class="row">
          <div class="col-sm-12">
            <label>確認密碼：</label>
            <input
              type="password"
              placeholder="確認密碼"
              class="form-contorl"
            />
          </div>
        </div>
        <!-- 第六列 -->
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
        <!-- 第七列 -->
        <div class="row">
          <div class="col-sm-12">
            <button @click.prevent="" @click="register">完成註冊</button>
          </div>
        </div>
      </form>
    </div>
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
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
}
input[type="checkbox"] {
  width: auto;
}
.selectBox {
  display: flex;
  justify-content: center;
}
button {
  background-color: #e1cdb5;
  color: #000;
  padding: 2px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.box {
  margin: 20px 0px;
}
</style>

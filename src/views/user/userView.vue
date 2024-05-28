<script setup>
import { ref, onBeforeMount } from "vue";
import headerMenu from "@/views/headerMenu.vue";
import axios from "axios";
import { useTokenStore } from "@/stores/token";

const store = useTokenStore();
const userData = ref({});
const temp = ref([]);
onBeforeMount(() => {
  axios.get(`http://localhost:3000/user?${store.token}`).then((res) => {
    for (let i in res.data) {
      temp.value.push(res.data[i]);
    }
    for (let j in temp.value) {
      if (temp.value[j].id == store.token) {
        userData.value = temp.value[j];
      }
    }
    console.log(userData.value);
  });
});
console.log(store.token);
function logout() {
  store.saveToken("f");
}
</script>

<template>
  <headerMenu />
  <div class="body">
    <!-- 左邊區塊 -->
    <div class="leftBlock">
      <!-- 左上 -->
      <div class="userImgBlock">
        <img
          src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
          class="user_img"
        />
        <div class="userNameBox">
          <div class="userName">{{ userData.name }}</div>
          <div class="userLevel">一般會員</div>
        </div>
      </div>
      <!-- 左下 -->
      <div class="iteamBlock">
        <RouterLink to="#"
          ><div class="iteamOption">會員帳號管理</div>
        </RouterLink>
        <RouterLink to="#">
          <div class="iteamOption">會員訂單查詢</div>
        </RouterLink>
        <RouterLink to="/proposalRecord/underReviewItem">
          <div class="iteamOption">提案紀錄</div>
        </RouterLink>
        <RouterLink to="/"
          ><div class="iteamOption" @click="logout">登出</div></RouterLink
        >
      </div>
    </div>
    <!-- 右邊區塊 -->
    <div class="rightBlock">
      <!-- 右邊內容 -->
      <div class="userData_main">
        <div class="title">會員帳號管理</div>
        <hr />
        <div class="level">目前會員等級：一般會員</div>
        <div class="point">消費里程數累積：4436</div>
        <el-progress :percentage="87" :stroke-width="20" color="#FFE871" />
        <div class="greenPointBox">
          <div class="greenPoint">綠能點數累積：300點</div>
          <button class="greenPointBtn">前往好禮兌換</button>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <span class="userDataTitle">會員姓名</span>
            <div class="userData">{{ userData.name }}</div>
          </div>
          <div class="col-sm-6">
            <span class="userDataTitle">生日</span>
            <div class="userData">{{ userData.birthday }}</div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <span class="userDataTitle">聯絡E-mail</span>
            <div class="userData">{{ userData.mail }}</div>
          </div>
          <div class="col-sm-6">
            <span class="userDataTitle">聯絡手機</span>
            <div class="userData">{{ userData.phone }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  width: 1500px;
  margin: 100px auto;
  padding: 10px;
  display: flex;
}
.userImgBlock,
.iteamBlock {
  width: 300px;
  margin: 10px 10px;
}
/* 左上 */
.userImgBlock {
  display: flex;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
}
.user_img {
  width: 80px;
}
.userNameBox {
  width: calc(100% - 80px);
  padding: 10px;
}
.userName,
.userLevel {
  margin: auto;
  text-align: center;
}
.userName {
  font-size: 25px;
}
/* 左下 */
.iteamBlock {
  background-color: #fff;
  border-radius: 10px;
}
.iteamOption {
  margin: 10px auto;
  text-align: center;
  font-size: 30px;
}
a {
  color: #000;
  text-decoration: none;
}
/* 右 */
.userData_main {
  width: 1130px;
  margin: 10px 5px;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
}
.title {
  font-size: 30px;
}
hr {
  border: 1px solid #000;
}
.level,
.point {
  margin: 10px auto;
  font-size: 20px;
}
.level {
  font-weight: 800;
}
.el-progress {
  margin: 25px auto;
}
.greenPointBox {
  margin: 20px auto;
  display: flex;
}
.greenPoint {
  font-size: 30px;
}
.greenPointBtn {
  margin: 0px 20px;
  background: #67ebac;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;
}
.userDataTitle {
  font-size: 25px;
  font-weight: 500;
}
.userData {
  padding: 5px;
  border-radius: 5px;
  background-color: antiquewhite;
}
</style>

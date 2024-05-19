<script setup>
import { ref } from "vue";
import headerMenu from "../headerMenu.vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useTokenStore } from "@/stores/token.js";

const store = useTokenStore();
const mail = ref("");
const password = ref("");
const test = ref({});
const router = useRouter();

const login = () => {
  axios
    .get(
      `http://localhost:3000/user/?mail=${mail.value}&password=${password.value}`
    )
    .then((res) => {
      if (
        (mail.value == res.data[0].mail) &
        (password.value == res.data[0].password)
      ) {
        store.saveToken(res.data[0].id);
        // console.log(test);
        alert("登入成功");
        router.push({ path: "/" });
      } else {
        alert("登入失敗");
      }
    })
    .catch((error) => {
      alert("登入失敗or錯誤");
    });
};
</script>

<template>
  <headerMenu />

  <div class="container">
    <h2>登入</h2>
    <form>
      <input type="text" placeholder="帳號" v-model="mail" />
      <input type="password" placeholder="密碼" v-model="password" />
      <input type="submit" value="登入" @click.prevent="" @click="login" />
    </form>
    <p>還沒有帳號？ <RouterLink to="/register">註冊帳號</RouterLink></p>
  </div>
</template>

<style scoped>
/* .body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #a0ced9;
} */
.container {
  max-width: 400px;
  margin: 200px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}
.container h2 {
  text-align: center;
}
.container input[type="text"],
.container input[type="password"],
.container input[type="submit"] {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}
.container input[type="submit"] {
  background-color: #fcf5c7;
  color: #000;
  cursor: pointer;
}
.container input[type="submit"]:hover {
  background-color: #ffee93;
}
</style>

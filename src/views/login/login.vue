<script setup>
import headerMenu from "../headerMenu.vue";
</script>

<template>
  <headerMenu />

  <div class="container">
    <h2>登入</h2>
    <form>
      <input type="text" placeholder="帳號" />
      <input type="password" placeholder="密碼" />
      <input type="submit" value="登入" />
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

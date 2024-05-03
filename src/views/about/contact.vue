<script setup>
import headerMenu from "../headerMenu.vue";
</script>

<template>
  <headerMenu />
  <div class="body">
    <h1>請於這裡聯繫我們！</h1>
    <form method="post">
      <label for="name">請輸入貴公司/組織名稱：</label>
      <input type="text" id="name" name="name" required /><br /><br />

      <label for="email">請輸入您的電子郵件：</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        pattern="[a-zA-Z0-9._%+-]+@gmail.com"
      /><br />

      <label for="message">請說明您的需求或建議：</label>
      <textarea
        id="message"
        name="message"
        rows="4"
        required
        placeholder="我們將會在3個工作日內回覆您！"
      ></textarea
      ><br /><br />

      <input type="submit" value="發送" />
    </form>
  </div>
</template>

<style scoped>
.body {
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
    url("../../components/aboutOur_bg.jpg");
  background-size: cover;
  background-position: center;
  background-color: antiquewhite;
  color: white;
}
h1 {
  color: #ffd000;
  text-align: center;
}

form {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 80%;
  margin: 0 auto;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #000;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input[type="submit"] {
  background-color: #00b35f;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

input[type="submit"]:hover {
  background-color: #00b35f;
}
</style>

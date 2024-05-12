<script setup>
import headerMenu from "../headerMenu.vue";
import { useRouter } from "vue-router";
const router = useRouter();
function goRegister_sec() {
  router.push({ path: "/register_sec" });
}
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
          <div class="col-sm-12">
            <label>請輸入電子郵件信箱：</label>
            <input
              type="text"
              placeholder="電子郵件信箱"
              class="form-contorl"
            />
          </div>
        </div>
        <!-- 第二列 -->
        <div class="row">
          <div class="col-sm-12">
            <label>請輸入密碼：</label>
            <input
              type="password"
              placeholder="請輸入密碼"
              class="form-contorl"
            />
          </div>
        </div>
        <!-- 第三列 -->
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
        <!-- 第四列 -->
        <div class="row">
          <div class="col-sm-12"><label>請輸入手機號碼：</label></div>

          <div class="col-sm-2 selectBox">
            <select name="conutry-code" id="conutry-code">
              <option value="+886">+886</option>
            </select>
          </div>
          <div class="col-sm-7 phoneBox">
            <input type="text" class="form-contorl" />
          </div>
          <div class="col-sm-3">
            <button>發送驗證碼</button>
          </div>
        </div>
        <!-- 第五列 -->
        <div class="row">
          <label>請輸入驗證碼：</label>
          <div class="col-sm-2">
            <input type="text" class="form-contorl small-text" />
          </div>
          <div class="col-sm-10">
            <div class="moveBox">
              <label> 沒有收到驗證碼嗎？</label>
              <button>重新發送驗證碼</button>
            </div>
          </div>
        </div>
        <!-- 第六列 -->
        <div class="row">
          <div class="col-sm-12">
            <button @click="goRegister_sec()">驗證並註冊</button>
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
.small-text {
  width: 100px;
}
.moveBox {
  margin-left: 10px;
}
</style>

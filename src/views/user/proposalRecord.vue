<script setup>
import { ref, computed } from "vue";
import headerMenu from "@/views/headerMenu.vue";
import { RouterView, useRouter } from "vue-router";

const router = useRouter();
const rightBlock = ref(null);
// 返回上一頁
const goBack = () => {
  router.push({ path: "/userView" });
};
</script>

<template>
  <headerMenu />
  <div class="body">
    <!-- 左邊區塊 -->
    <div class="leftBlock">
      <el-menu
        default-active="/proposalRecord/underReviewItem"
        class="el-menu-vertical-demo"
        mode="vertical"
        @select="handleSelect"
        router
      >
        <el-menu-item index="/proposalRecord/underReviewItem"
          >尚未審核提案</el-menu-item
        >
        <el-menu-item index="/proposalRecord/audited">已審核提案</el-menu-item>
      </el-menu>
      <div class="returnBtn" @click="goBack">返回上一頁</div>
    </div>
    <!-- 右邊區塊 -->
    <div class="rightBlock" ref="rightBlock">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.body {
  display: flex;
  margin: 100px auto;
  width: 1000px;
  min-height: 800px;
  border-radius: 10px;
}
/* 左邊區塊 */
.leftBlock {
  margin-right: 20px;
  padding: 10px;
}
.el-menu {
  border-radius: 5px;
  margin-bottom: 20px;
}
.el-menu-item {
  font-size: 18px;
}
.returnBtn:hover {
  background-color: rgb(183, 183, 250);
}
.returnBtn {
  font-size: 18px;
  text-align: center;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
}
/* 右邊區塊 */
.rightBlock {
  width: 80%;
  max-height: 800px;
  padding: 10px 0px;
  background-color: #fff;
  border-radius: 5px;
  overflow-y: overlay;
}
</style>

<script setup>
import greenTravel_img from "@/components/icons/綠能旅遊icon.png";
import { ref } from "vue";
import { useGetGenerativeModelGP } from "./useGetGenerativeModelGP.js";
import AIAnswer from "./Answer.vue";
import headerMenu from "../headerMenu.vue";

const showMsg = ref([
  {
    id: 0,
    text: "您好",
    src: greenTravel_img,
  },
]);
const question = ref("");
const answer = ref("");
const isLoading = ref(false);
const answerBox = ref(null);
const i = ref(1);

const fetchAnswer = async () => {
  answer.value = "";
  isLoading.value = true;
  showMsg.value.push({
    id: i.value++,
    text: question.value,
    src: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
  });

  try {
    answer.value = await useGetGenerativeModelGP(question.value);
    showMsg.value.push({
      id: i.value++,
      text: answer.value,
      src: greenTravel_img,
    });
  } catch (error) {
    console.log({ error });
  } finally {
    isLoading.value = false;
    question.value = "";
  }
  await nextTick();
  answerBox.value.scrollTop = answerBox.value.scrollHeight;
};
</script>

<template>
  <headerMenu />

  <div class="body">
    <form class="mb-5" @submit.prevent="fetchAnswer">
      <div class="answerBox" ref="answerBox">
        <div v-for="iteam in showMsg" class="msgBox" :key="iteam.id">
          <el-avatar :size="30" :src="iteam.src" />
          <div class="msgTextBody">
            <div class="msgText">
              {{ iteam.text }}
            </div>
          </div>
        </div>
        <!-- <AIAnswer :answer="answer" /> -->
      </div>
      <div class="questionBox">
        <el-input v-model="question" placeholder="在這裡輸入提示" />
        <button type="submit" :disabled="!question">
          <i class="bi bi-cursor-fill"></i>
        </button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.body {
  margin: 100px auto 0px;
  padding-top: 20px;
  width: 1700px;
  height: 800px;
  border-radius: 5px;
  // background-color: null;
  // border: 1px solid;
}
.answerBox {
  width: 1500px;
  height: calc(800px - 85px);
  max-height: calc(800px - 85px);
  margin: 0px auto;
  overflow-y: overlay;
  background-color: white;
  // border: 1px solid;
}
.msgBox {
  display: flex;
  padding: 10px;
  // border: 1px solid;
}
.msgTextBody {
  max-width: 750px;
  background: #d9d9d9;
  border-radius: 20px;
  // border: 1px solid;
}
.el-avatar {
  margin-top: 5px;
  margin-right: 10px;
}
.msgText {
  padding: 5px 15px 0px;
  margin-bottom: 8px;
  font-weight: bold;
}
.questionBox {
  margin-top: 15px;
  position: relative;
  display: flex;
  justify-content: center;
  // border: 1px solid;
}
.el-input {
  border: 1px solid #796c6cf9;
  width: calc(100% - 200px);
  height: 45px;
  border-radius: 5px;
}
button {
  position: absolute;
  top: 10px;
  right: 110px;
  border: none;
  background: none;
}
</style>

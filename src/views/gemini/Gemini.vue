<script setup>
import greenTravel_img from "@/components/icons/綠能旅遊icon.png";
import { ref, computed } from "vue";
import { useGetGenerativeModelGP } from "./useGetGenerativeModelGP.js";
import headerMenu from "../headerMenu.vue";
import { useAnswerProcessed } from "./AnswerProcessed.js";
import axios from "axios";
import { useTokenStore } from "@/stores/token.js";
import moment from "moment";

const store = useTokenStore();
const AnswerProcessed = useAnswerProcessed();
const showMsg = ref([
  {
    id: 0,
    text: "您好",
    src: greenTravel_img,
  },
]);
const question = ref("");
const question_temp = ref("");
const answer = ref("");
const isLoading = ref(false);
const answerBox = ref(null);
const AItravel_data = ref("");
const arrayLength = ref(0);
const NowTime = ref();
const NowDate = ref();
const i = ref(1);
const questionInputText = computed(() => {
  return isLoading.value ? "Loading..." : "在這裡輸入提示";
});

// 提問
const fetchAnswer = async () => {
  answer.value = "";
  isLoading.value = true;
  showMsg.value.push({
    id: i.value++,
    text: question.value,
    src: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
  });
  question_temp.value = question.value;
  question.value = "";
  try {
    answer.value = await useGetGenerativeModelGP(question_temp.value);
    answer.value = AnswerProcessed.AnswerProcessed(answer.value);
    showMsg.value.push({
      id: i.value++,
      text: answer.value,
      src: greenTravel_img,
    });
  } catch (error) {
    console.log({ error });
  } finally {
    isLoading.value = false;
  }
  await nextTick();
  answerBox.value.scrollTop = answerBox.value.scrollHeight;
};
// 建立提案
const createProposal = async () => {
  arrayLength.value = showMsg.value.length;
  AItravel_data.value = showMsg.value[arrayLength.value - 1];
  NowTime.value = moment().format("hh:mm a");
  NowDate.value = moment().format("YYYY/MM/DD ");
  await axios.post("http://localhost:3000/travelProposal", {
    data: AItravel_data.value.text,
    creator_id: store.token,
    createTime: NowTime.value,
    createDate: NowDate.value,
  });
  alert("成功建立提案");
  // console.log(AItravel_data.value.text);
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
      </div>

      <div class="questionBox">
        <div class="createProposalBtn" @click="createProposal">建立提案</div>
        <el-input
          v-model="question"
          :placeholder="questionInputText"
          :disabled="isLoading"
        />
        <button class="submitQuestionBtn" type="submit" :disabled="!question">
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
}
.answerBox {
  width: 1500px;
  height: calc(800px - 85px);
  max-height: calc(800px - 85px);
  margin: 0px auto;
  overflow-y: overlay;
  background-color: white;
}
.msgBox {
  display: flex;
  padding: 10px;
}
.msgTextBody {
  max-width: 750px;
  background: #d9d9d9;
  border-radius: 20px;
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
}
.createProposalBtn:hover {
  background-color: #9f9e9e;
}
.createProposalBtn {
  position: absolute;
  top: -35px;
  right: 120px;
  border-radius: 20px;
  padding: 2px 10px;
  border: none;
  cursor: pointer;
  background-color: #d9d9d9;
}
.el-input {
  border: 1px solid #796c6cf9;
  width: calc(100% - 200px);
  height: 45px;
  border-radius: 5px;
}
.submitQuestionBtn {
  position: absolute;
  top: 10px;
  right: 110px;
  border: none;
  background: none;
}
</style>

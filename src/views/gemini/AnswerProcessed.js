import { ref } from "vue";

export const useAnswerProcessed = () => {
  function AnswerProcessed(answer) {
    const NewAnswer = ref("");
    const answerText = ref("");

    answer = answer.split("*");
    NewAnswer.value = answer.filter((value) => {
      return value && value.trim();
    });
    const i = ref(0);
    for (i.value in NewAnswer.value) {
      answerText.value += NewAnswer.value[i.value] + " ";
    }
    return answerText;
  }
  return { AnswerProcessed };
};

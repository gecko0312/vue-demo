import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTokenStore = defineStore("token", () => {
  // state
  const tokenJson = ref("");
  //   getter
  const token = computed(() => {
    try {
      return tokenJson.value || window.localStorage.getItem("TokenInfo") || "f";
    } catch {
      alert("json格式錯誤");
      throw err;
    }
  });
  //   action
  function saveToken(data) {
    tokenJson.value = data;
    window.localStorage.setItem("TokenInfo", data);
  }

  return { token, saveToken };
});

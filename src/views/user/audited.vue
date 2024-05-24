<script setup>
import { ref, onBeforeMount } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const data = ref([]);
onBeforeMount(() => {
  axios.get(`http://localhost:3000/travelData`).then((res) => {
    data.value.push(res.data[0]);
  });
});

const gosignUp = () => {
  router.push({ path: "/signUp" });
};
</script>

<template>
  <div class="accordion" id="accordionExample">
    <div v-for="item in data" class="accordion-item" :key="item.id">
      <h2 class="accordion-header" :id="item.id">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#a"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          {{ item.createDate }}所創建的提案
        </button>
      </h2>
      <div
        id="a"
        class="accordion-collapse collapse show"
        :aria-labelledby="item.id"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <div class="row">
            <div class="col-sm-10">
              創建時間：{{ item.createDate }} {{ item.createTime }}
            </div>
            <div class="col-sm-2">
              <button @click="gosignUp">前往報名頁面</button>
            </div>
          </div>
          <hr />
          <div class="dataTitle">詳細行程：</div>
          {{ item.data }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion-button {
  font-size: 20px;
}
.col-sm-2 {
  text-align: right;
}
.dataTitle {
  margin: 5px auto;
  font-size: 20px;
  font-weight: 600;
}
button {
  font-size: 15px;
  border: none;
  border-radius: 5px;
  background-color: #d9d9d9;
}
</style>

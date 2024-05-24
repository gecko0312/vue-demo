<script setup>
import { ref } from "vue";
import axios from "axios";
import { useTokenStore } from "@/stores/token";

const store = useTokenStore();
const data = ref([]);
const onData = ref(false);
axios.get(`http://localhost:3000/travelProposal?${store.token}`).then((res) => {
  for (var i in res.data) {
    data.value.push(res.data[i]);
  }
});
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
            <div class="col-sm-2">審核中</div>
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
</style>

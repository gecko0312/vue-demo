<script setup>
import { ref } from "vue";
import headerMenu from "./headerMenu.vue";
const searchResultText = ref("");
const date = ref("");

const test_data = ref([]);

for (let i = 1; i < 11; i++) {
  test_data.value.push({
    id: i,
    title: "title" + i,
    current: i,
  });
}

const clickBtn = () => {
  i++;
  console.log(i);
};
const data_length = ref(test_data.value.length);
console.log(data_length.value);

const current_page = ref(1);
const handleCurrentChange = (val) => {
  console.log("current page:" + val);
  current_page.value = val;
};
</script>

<template>
  <headerMenu />
  <div class="body">
    <form action="">
      <div class="topBox">
        <div class="searchBox">
          <label>旅遊關鍵字搜尋：</label>
          <input type="text" placeholder="請出入地點、景點" />
          <button class="searchBtn">
            <i class="bi bi-search"></i>
          </button>
        </div>
        <div class="calendarBox">
          <label>出遊區間搜尋：</label>
          <span class="dateBox">
            <el-date-picker
              v-model="date"
              type="daterange"
              range-separator="~"
              start-placeholder="Start date"
              end-placeholder="End date"
              :size="size"
            />
          </span>
          <input type="checkbox" /><label>僅顯示成團</label>
        </div>
      </div>
    </form>
    <div class="searchResultBox">
      <span class="searchResultText">{{ searchResultText }}</span>
    </div>
    <div class="cardBox">
      <div v-for="iteam in test_data" class="card">
        <img src="@/components/image/花蓮.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ iteam.title }}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="paginationBox">
        <el-pagination
          v-model:currentPage="current_page"
          :page-size="1"
          background
          layout="prev, pager, next"
          :total="data_length"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  border: 1px solid;
}
.topBox {
  max-width: 800px;
  margin: 120px auto 5px;
  padding: 20px 30px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* border: 1px solid red; */
}
.searchBox,
.calendarBox {
  /* border: 1px solid; */
  max-width: 600px;
  margin: 10px auto;
}
label {
  font-weight: bold;
}
input[type="text"] {
  margin: 0px 5px;
  width: 70%;
}
.dateBox {
  margin: 0px 20px;
}
.searchBtn {
  background: none;
  margin: 0 5px;
  border: none;
  border-radius: 50%;
}
.searchResultBox {
  max-width: 800px;
  margin: 0px auto 10px;
  /* border: 1px solid; */
}
.searchResultText {
  margin-left: 20px;
}
.cardBox {
  display: flex;
  flex-wrap: wrap;
  /* border: 1px solid; */
  max-width: 1600px;
  height: 1000px;
  margin: 10px auto 0px;
}
.card {
  margin: 10px auto 0px;
  width: 280px;
  height: 450px;
}
.paginationBox {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  /* border: 1px solid; */
}
</style>

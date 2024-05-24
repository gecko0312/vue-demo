<script setup>
import { ref, onBeforeMount } from "vue";
import headerMenu from "@/views/headerMenu.vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const data = ref([]);

onBeforeMount(() => {
  axios.get("http://localhost:3000/travelData").then((res) => {
    data.value.push(res.data[0]);
  });
});

const goCheckOut = () => {
  router.push({ path: "/checkOut" });
};
</script>

<template>
  <headerMenu />
  <div class="body">
    <!-- 上方區塊 -->
    <div class="topBlock">
      <div class="topTitle">{{ data[0].title }}</div>
      <div class="dataBlock">
        <el-image
          :src="data[0].title_img"
          fit="contain"
          style="min-width: 450px"
        />
        <div class="dataTextBlock">
          <div class="dataText_peopleBlock">
            <div class="dataText_people">全部人數：{{ data[0].max }}</div>
            <div class="dataText_people">目前人數：{{ data[0].current }}</div>
            <div class="dataText_people">
              剩餘人數：{{ data[0].max - data[0].current }}
            </div>
          </div>
          <div class="dataText_dateBlock">
            <div class="dataText_date">
              去程：{{ data[0].go_date }} 共{{ data[0].days }}天
            </div>
            <div class="dataText_date">回程：{{ data[0].back_date }}</div>
          </div>
          <div class="dataText_bottomBlock row">
            <div class="dataTextMoneyBlock col-sm-10">
              <div class="dataText_money">
                25人以下：TWD {{ data[0].original_price }}
              </div>
              <div class="dataText_money_now">
                &nbsp;&nbsp;50人~26人：TWD {{ data[0].original_price * 0.9 }}
              </div>
              <div class="dataText_money">
                75人~51人：TWD {{ data[0].original_price * 0.8 }}
              </div>
            </div>
            <div class="buttonBox col-sm-2">
              <button @click="goCheckOut">報名</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 下方區塊 -->
    <div class="bottomBlock">
      <div class="bottomTitle">
        行程特色
        <hr />
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="journeyTitle">
            {{ data[0].first_journey_title }}
            <hr />
          </div>
          <span>
            {{ data[0].first_journey_data }}
          </span>
        </div>
        <div class="col-sm-6">
          <el-image
            :src="data[0].first_journey_img"
            fit="contain"
            style="min-width: 450px"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <el-image
            :src="data[0].sec_journey_img"
            fit="contain"
            style="min-width: 450px"
          />
        </div>
        <div class="col-sm-6">
          <div class="journeyTitle">
            {{ data[0].sec_journey_title }}
            <hr />
          </div>
          <span>{{ data[0].sec_journey_data }}</span>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="journeyTitle">
            {{ data[0].third_journey_title }}
            <hr />
          </div>
          <span>{{ data[0].third_journey_data }}</span>
        </div>
        <div class="col-sm-6">
          <el-image
            :src="data[0].third_journey_img"
            fit="contain"
            style="min-width: 450px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  margin: 120px auto;
  width: 1000px;
  min-height: 800px;
}
/* 上方區塊 */
.topBlock {
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
}
.topTitle,
.bottomTitle,
.journeyTitle {
  font-size: 30px;
  font-weight: 700;
}
.dataBlock {
  display: flex;
}
.dataTextBlock {
  width: 100%;
  margin-left: 10px;
}
.dataText_people,
.dataText_date,
.dataText_money,
.dataText_money_now {
  font-size: 20px;
}
.dataText_people,
.dataText_date {
  font-weight: 600;
}
.dataText_bottomBlock {
  margin-left: 1px;
}
.dataTextMoneyBlock {
  border-radius: 5px;
  background-color: #d9d9d9;
}
.dataText_money_now {
  color: red;
  font-weight: 600;
}
.dataText_dateBlock {
  margin: 35px auto;
}
.buttonBox {
  display: flex;
  align-items: flex-end;
}
button {
  font-size: 20px;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  background-color: #67ebac;
}
/* 下方區塊 */
.bottomBlock {
  margin-top: 50px;
}
.bottomTitle {
  text-align: center;
}
.row {
  margin: 15px auto;
}
</style>

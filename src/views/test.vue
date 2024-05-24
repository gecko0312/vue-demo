<script setup>
import { ref } from "vue";
import moment from "moment";

const text = ref(
  "**第 1 天** * **上午 8:00**：在酒店享用早餐。 * **上午 9:00**：參觀艾菲爾鐵塔（約 2 小時）。 * **中午 11:00**：在 Champ de Mars 附近享用午餐（約 1 小時）。 * **下午 12:00**：參觀羅浮宮博物館（約 3 小時）。 * **下午 3:00**：參觀凱旋門和香榭麗舍大街（約 1 小時）。 * **晚上 7:00**：在傳統的法式餐廳享用晚餐（約 2 小時）。 **第 2 天** * **上午 8:30**：在酒店享用早餐。 * **上午 9:30**：搭乘地鐵前往聖心堂（約 1 小時）。 * **上午 10:30**：參觀聖心堂和蒙馬特區（約 2 小時）。 * **中午 12:30**：在蒙馬特區的當地咖啡廳享用午餐（約 1 小時）。 * **下午 1:30**：參觀巴黎聖母院（約 1 小時）。 * **下午 2:30**：探索拉丁區（約 1 小時）。 * **晚上 6:30**：在拉丁區的傳統法式小酒館享用晚餐（約 2 小時）。 **第 3 天** * **上午 8:15**：在酒店享用早餐。 * **上午 9:15**：搭乘地鐵前往凡爾賽宮（約 1 小時）。 * **上午 10:15**：參觀凡爾賽宮（約 3 小時）。 * **下午 1:15**：在凡爾賽宮花園享用午餐（約 1 小時）。 * **下午 2:15**：探索凡爾賽宮花園（約 1 小時）。 * **下午 3:15**：返回酒店（約 1 小時）。 * **晚上 7:00**：在酒店附近的餐廳享用晚餐（約 2 小時）。 **第 4 天** * **上午 8:00**：在酒店享用早餐。 * **上午 9:00**：探索瑪黑區和猶太區（約 2 小時）。 * **中午 11:00**：在瑪黑區享用午餐（約 1 小時）。 * **下午 12:00**：參觀畢加索博物館（約 1 小時）。 * **下午 1:00**：探索 Marais 區的精品店和藝廊（約 1 小時）。 * **晚上 6:30**：在瑪黑區的時髦餐廳享用晚餐（約 2 小時）。 **第 5 天** * **上午 8:00**：在酒店享用早餐。 * **上午 9:00**：參觀盧森堡花園（約 1 小時）。 * **上午 10:00**：參觀潘提翁（約 1 小時）。 * **中午 11:00**：在聖日耳曼區享用午餐（約 1 小時）。 * **下午 12:00**：探索聖日耳曼區的書店和咖啡廳（約 1 小時）。 * **下午 1:00**：搭乘地鐵返回酒店（約 1 小時）。 * **下午 2:00**：打包行李，準備離境。"
);
const test = ref("");
test.value = text.value.split("*");
test.value = test.value.filter((value) => {
  return value && value.trim();
});
const a = ref("");
const text1 = ref(0);
for (text1.value in test.value) {
  a.value += test.value[text1.value] + "\t";
}

const time = ref();
// time.value = new Date();
console.log(time.value);
const day = ref();
const month = ref();
const year = ref();
time.value = moment().format("YYYY/MM/DD hh:mm:ss a");
console.log(time.value);
</script>

<template>
  <div class="body">
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="q">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#a1"
            aria-expanded="true"
            aria-controls="b"
          >
            Accordion Item #1
          </button>
        </h2>
        <div
          id="a1"
          class="accordion-collapse collapse show"
          aria-labelledby="q"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="q">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Accordion Item #1
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="q"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="q">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Accordion Item #2
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Accordion Item #3
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
    <div>test:{{ test }}</div>
    <hr />
    <div>a:{{ a }}</div>
    <hr />
    <div v-for="iteam in test">{{ iteam }}</div>
  </div>
</template>

<style scoped>
.body {
  margin: 200px auto;
  width: 1000px;
  padding: 20px;
  background-color: #fff;
}
</style>

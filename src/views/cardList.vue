<script setup>
import { ref } from "vue";
// let scrollContainer = document.getElementById("cardList");
function nextCard() {
  document.getElementById("cardList").style.scrollBehavior = "smooth";
  document.getElementById("cardList").scrollLeft += 900;
}
function backCard() {
  document.getElementById("cardList").style.scrollBehavior = "smooth";
  document.getElementById("cardList").scrollLeft -= 900;
}
</script>
<template>
  <div style="display: flex">
    <button @click="backCard" class="controlCardListBtn_back">
      <i class="bi bi-chevron-compact-left"></i>
    </button>
    <div class="cardList mx-auto" id="cardList">
      <div v-for="iteam in 20" class="cardBox">
        <div class="card text-center" style="width: 250px">
          <img
            src="../components/image/白沙灣.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title{{ iteam }}</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
    <button @click="nextCard" class="controlCardListBtn_next">
      <i class="bi bi-chevron-compact-right"></i>
    </button>
  </div>
</template>

<style>
.cardList {
  display: flex;
  width: 1200px;
  overflow-x: scroll;
}
.cardList::-webkit-scrollbar {
  display: none;
}
.cardBox {
  margin: 0px 5px;
}
.controlCardListBtn_next {
  position: absolute;
  bottom: 70px;
  right: 250px;
  width: 50px;
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px 1px;
  border: 1px solid rgb(255, 255, 255);
  /* opacity: 0.8; */
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  /* top: calc(50% - 40px); */
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* -webkit-box-align: center; */
  /* -webkit-box-pack: center; */
  /* right: 7px; */
  /* z-index: 3; */
  /* transition: all 0.3s ease 0s; */
  /* transform: scale(1); */
}
.controlCardListBtn_back {
  position: absolute;
  left: 250px;
  bottom: 70px;
  width: 50px;
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px 1px;
  border: 1px solid rgb(255, 255, 255);
  /* opacity: 0.8; */
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  /* top: calc(50% - 40px); */
  /* display: flex; */
  /* -webkit-box-align: center; */
  /* align-items: center; */
  /* -webkit-box-pack: center; */
  /* justify-content: center; */
  /* right: 7px; */
  /* z-index: 3; */
  /* transition: all 0.3s ease 0s; */
  /* transform: scale(1); */
}
</style>

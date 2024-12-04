<template>
  <div class="cases">
    <div class="cases_main">
      <h3>We bridge the gap between wedding industry and technology</h3>
      <div class="number_block">
        <div class="number">
          <img src="@/assets/images/цуввштп_шсщт%201.png" alt="icon">
          <div class="cost_number">
            <h3>567</h3>
            <img src="@/assets/images/Element%2005.png" alt="icon">
          </div>
          <p>couples got married online and were not in the same country</p>
        </div>
        <div class="number">
          <img src="@/assets/images/saving-money.png" alt="icon">
          <div class="cost_number">
            <h3>1000000$+</h3>
            <img src="@/assets/images/Element%2005.png" alt="icon">
          </div>
          <p>that is how much couples saved and spent on a down payment on a house, paying off student debt, or a family vacation</p>
        </div>
        <div class="number">
          <img src="@/assets/images/people-rushing.png" alt="icon">
          <div class="cost_number">
            <h3>1000+</h3>
            <img src="@/assets/images/Element%2005.png" alt="icon">
          </div>
          <p>hours were saved instead of spent on solving wedding dilemmas and conversations with wedding vendors</p>
        </div>
        <div class="number">
          <img src="@/assets/images/certificate.png" alt="icon">
          <div class="cost_number">
            <h3>100%</h3>
            <img src="@/assets/images/Element%2005.png" alt="icon">
          </div>
          <p>online process from getting the marriage license to receiving marriage certificate</p>
        </div>
      </div>
      <div class="cases_in_picture">
        <div class="changed_block">
          <div class="cases_in_picture_case" v-for="cases in casesData" :key="cases.id">
            <img :src="`${mediaUrl}${cases.image.url}`" alt="picture">
            <div class="text_case"><h3>{{cases.article}}</h3></div>
            <div class="text_case"><h3 class="cost_money">{{cases.cost_money}}</h3><h6>Saved money on a wedding</h6></div>
            <div class="text_case"><h3 class="cost_time">{{cases.cost_time}}</h3><h6>Time saved on organizing a wedding</h6></div>
          </div>
        </div>
        <div class="tabs">
          <div class="tab" v-for="(tab, index) in casesData" :key="index" @click="changeSlide(index)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      casesData: [],
      mediaUrl: 'http://154.12.254.79',
      widthBlock: null
    }
  },
  methods: {
    async getCases() {
      try {
        const response = await axios.get('http://154.12.254.79/api/cases?populate=*');
        if (response) {
          this.casesData = response.data.data;
        }
      } catch (error) {
        console.log(error)
      }
    },
    changeSlide(index) {
      let transform = (this.widthBlock / this.casesData.length) * index;
      let block = document.querySelector('.changed_block');
      block.style.transform = `translateX(-${transform}px)`;
    }
  },
  async mounted() {
    await this.getCases();
    this. widthBlock = (document.querySelector('.changed_block').clientWidth) * this.casesData.length;
  }
}
</script>

<style scoped>
.cases {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 40px 0;
  justify-content: center;
  align-items: center;
}
.cases_main {
  width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
}
.number_block {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 40px;
}
.number {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background: var(--shape-color);
  border-radius: 12px;
  border: 2px solid #fff;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  padding: 12px;
}
.cost_number {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: -12px;
  align-items: center;
}
.cases_in_picture {
  width: 1280px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: relative;
}
.changed_block {
  width: 100%;
  display: flex;
  flex-direction: row;
  transform: translateX(0);
  transition: transform 0.5s ease-in-out;
}
.cases_in_picture_case {
  width: 100%;
  position: relative;
}
.cases_in_picture_case img {
  width: 1280px;
  object-fit: cover;
  aspect-ratio: 16/9;
  border-radius: 16px;
  filter: brightness(60%);
}
.text_case {
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: absolute;
  align-items: end;
}
.text_case:nth-child(2) {
  width: 95%;
  bottom: 15%;
  left: 24px;
  box-sizing: border-box;
  padding: 16px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
}
.text_case:nth-child(3) {
  top: 10%;
  right: 24px;
}
.text_case:nth-child(4) {
  top: 30%;
  right: 24px;
}
.text_case h3, h6, h4, h2 {
  color: #fff;
}
.cost_money {
  color: #fff;
}
.cost_time {
  color: #fff;
}
.tabs {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 8px;
  position: absolute;
  bottom: 10%;
  left: 10%;
}
.tab {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--shape-color);
  cursor: pointer;
}
@media all and (max-width: 550px) {
  .cases {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 40px 10px;
    justify-content: center;
    align-items: center;
  }
  .cases_main {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }
  .cases_main h3 {
    text-align: center;
  }
  .number_block {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .number {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    background: var(--shape-color);
    border-radius: 12px;
    border: 2px solid #fff;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    padding: 12px;
  }
  .number img {
    width: 64px;
  }
  .cost_number {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: -12px;
    align-items: center;
  }
  .cases_in_picture {
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    position: relative;
  }
  .changed_block {
    width: 100%;
    display: flex;
    flex-direction: row;
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;
  }
  .cases_in_picture_case {
    width: 100%;
    position: relative;
  }
  .cases_in_picture_case img {
    width: calc(100vw - 20px);
    object-fit: cover;
    border-radius: 16px;
    filter: brightness(60%);
    aspect-ratio: 9/6;
  }
  .text_case {
    display: flex;
    flex-direction: column;
    gap: 4px;
    position: absolute;
    align-items: end;
  }
  .text_case:nth-child(2) {
    width: 95%;
    bottom: 15%;
    left: 12px;
    box-sizing: border-box;
    padding: 8px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(6px);
  }
  .text_case:nth-child(2) h3 {
    font-size: 14px;
    font-weight: 500;
  }
  .text_case:nth-child(3) {
    top: 5%;
    right: 12px;
  }
  .text_case:nth-child(3) h3 {
    font-size: 20px;
  }
  .text_case:nth-child(4) h3 {
    font-size: 20px;
  }
  .text_case:nth-child(4) {
    top: 25%;
    right: 12px;
  }
  .text_case h3, h6, h4, h2 {
    color: #fff;
  }
  .cost_money {
    color: #fff;
  }
  .cost_time {
    color: #fff;
  }
  .tabs {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 8px;
    position: absolute;
    bottom: 5%;
    left: 10%;
  }
  .tab {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--shape-color);
    cursor: pointer;
  }
}
</style>
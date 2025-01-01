<template>
  <Header></Header>
  <div class="about_hero">
    <div class="about_main">
      <div class="about_hero_main">
        <h2>HELLO, I'M MAKSIM</h2>
        <h6>Let me share with you a story of how I started  an ALTAR</h6>
      </div>
      <div class="history">
        <div class="left_side">
          <h2>2015</h2>
          <p>I arrived in New York in 2015. New York had captured my heart at first sight           during my time here as a student through the work and travel program in 2011. When I won the green card, there was no doubt in my mind about where I wanted to be – the bustling city of New York.
            <br><br>
            Upon arriving in 2015, I found myself without friends, relatives, experience, and even proficiency in English. My first priority was to secure a job. I became a manager in a wholesale company – not exactly my dream job, but a necessity to cover the high cost of living in New York.
            <br><br>
            Working in an office environment turned out to be a dull experience for me, and I felt like I was slowly withering away. Everything changed when my wife joined me in New York. Back in Russia, she was a wedding planner, and her passion for the wedding business was something she wanted to continue in the city.
          </p>
        </div>
        <div class="right_side">
          <img src="@/assets/images/2015.jpg" alt="icon">
          <img src="@/assets/images/2015-2.jpg" alt="icon">
        </div>
      </div>
      <div class="history">
        <div class="left_side_2017">
          <img src="@/assets/images/2017.jpg" alt="icon">
        </div>
        <div class="right_side_2017">
          <h2>2017</h2>
          <p>Realizing she needed a wedding officiant for her work, she reached out to me while I was at my job. Inspired by her love for the TV show "Friends," she suggested, "Honey, do you remember how Joey got ordained online to marry Monica and Chandler, Phoebe and Mike? Maybe you can do that too? Can you please do some research? Bye, love you."
            <br><br>
            I promptly researched the idea and, within a week, obtained my license from the American Marriage Ministries. I managed to secure a day off from work to register myself with the city clerk's office in New York. On May 30, 2017, I officially became a licensed wedding officiant in New York.
            <br><br>
            <span>Ta-dam</span>
            <br><br>
            Such a quintessential New York story, right?<br>It seems like every good and great thing in my life stems from the inspiration of my lovely wife, Anna.
          </p>
        </div>
      </div>
      <div class="history">
        <div class="left_side_2020">
          <h2>2020</h2>
          <p>Starting my career in 2017 and writing this text in December 2024, I can proudly say that I have officiated over 3,000 wedding ceremonies, both offline and online.</p>
        </div>
        <div class="right_side_2020">
          <img src="@/assets/images/2020.jpg" alt="icon">
          <img src="@/assets/images/about_hero.jpg" alt="icon">
        </div>
      </div>
      <div class="history">
        <div class="right_side_2020_next">
          <img src="@/assets/images/2020-1.jpg" alt="icon">
          <img src="@/assets/images/2020-2.jpg" alt="icon">
        </div>
        <div class="left_side_2020">
          <p>By the way, about online wedding ceremonies
            <br><br>
            In 2020, the pandemic hit our world, and all courts in New York were closed. I began performing wedding ceremonies for couples in New York parks.
          </p>
        </div>
      </div>
      <div class="history">
        <div class="left_side_2020">
          <p>Then, Governor Andrew Cuomo issued an executive order allowing online weddings in New York. On June 12, 2020, I performed my first online wedding ceremony on Zoom.</p>
        </div>
        <div class="right_side_2020_final">
          <img src="@/assets/images/2020-3.jpg" alt="icon">
        </div>
      </div>
      <div class="history">
        <div class="right_side_2021">
          <h2>2021-2024</h2>
          <p>In 2021, when the pandemic ended, New York State authorities banned couples from marrying online.
            <br><br>
            However, Utah County authorities in the state of Utah became the first in the United States to allow any couple to get married online, regardless of where they were in the world (whether both were in the same location or in different locations). This special arrangement was introduced in 2020 when county offices were closed for in-person visits due to the pandemic.
            <br><br>
            As of now, Utah remains the only state in America where online weddings are fully permitted.
          </p>
        </div>
      </div>
      <div class="history">
        <div class="right_side_2024">
          <h2>2024</h2>
          <p>After four years of conducting online weddings and testing various hypotheses, I decided to create a unified, life-changing portal for LGBTQ+ couples, for couples from countries like Israel, where strict religious laws forbid nontraditional or civil wedding ceremonies. For members of the military, couples with disabilities, and for certain immigration purposes, when restrictions or illness make travel difficult and call it ALTAR.
          </p>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/ui_components/Header.vue";
import Footer from "@/components/ui_components/Footer.vue";
export default {
  components: {Header, Footer},
}
</script>

<style scoped>
.about_hero {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 40px 0;
}
.about_main {
  width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  gap: 32px;
}
.about_hero_main {
  width: 100%;
  height: 50vh;
  display: flex;
  background-image: url("../assets/images/about_hero.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.about_hero_main h2 {
  color: #fff;
}
.about_hero_main h6 {
  color: #fff;
}
.history {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 140px;
  box-sizing: border-box;
  padding: 40px 0;
}
.left_side {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-self: center;
}
.left_side p {
  box-sizing: border-box;
  padding-left: 24px;
  border-left: 4px solid var(--blue);
}
.right_side {
  width: 100%;
  display: flex;
  position: relative;
}
.right_side img{
  width: 45%;
  position: absolute;
  border-radius: 8px;
}
.right_side img:nth-child(1) {
  top: 0;
  left: 0;
}
.right_side img:nth-child(2) {
  bottom: 0;
  right: 0;
}
.right_side_2017 {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 32px;
}
.right_side_2017 p {
  box-sizing: border-box;
  padding-left: 24px;
  border-left: 4px solid var(--blue);
}
.left_side_2017 {
  width: 100%;
}
.left_side_2017 img {
  width: 100%;
  border-radius: 8px;
}
.left_side_2020 {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-self: center;
}
.left_side_2020 p {
  box-sizing: border-box;
  padding-left: 24px;
  border-left: 4px solid var(--blue);
}
.right_side_2020 {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.right_side_2020 img {
  width: 60%;
  border-radius: 8px;
}
.right_side_2020 img:nth-child(1) {
  transform: translate(-12px, -12px) rotate(-6deg);
}
.right_side_2020 img:nth-child(2) {
  transform: translate(40%, -12px) rotate(6deg);
}
.right_side_2020_next {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 16px;
}
.right_side_2020_next img {
  width: calc(50% - 8px);
  border-radius: 8px;
}
.right_side_2020_final {
  width: 100%;
  display: flex;
}
.right_side_2020_final img {
  width: 100%;
  border-radius: 8px;
}
.right_side_2021 {
  width: 100%;
  gap: 32px;
  display: flex;
  flex-direction: column;
}
.right_side_2021 p {
  width: 100%;
  box-sizing: border-box;
  padding-left: 24px;
  border-left: 4px solid var(--blue);
}
.right_side_2024 {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.right_side_2024 p {
  width: 100%;
  box-sizing: border-box;
  padding-left: 24px;
  border-left: 4px solid var(--blue);
}
</style>
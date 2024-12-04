<template>
  <div class="step">
    <div class="step_main">
      <h3>Discover the Beautiful Stages of Your Online Wedding Ceremony</h3>
      <div class="step_container">
        <div class="step_block">
          <img src="@/assets/images/icon_before_wedding.png" alt="icon">
          <p>Step 1</p>
          <h4>Before wedding</h4>
          <h6>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</h6>
        </div>
        <div class="step_block">
          <img src="@/assets/images/hello--users-people-hello.png" alt="icon">
          <p>Step 2</p>
          <h4>During ceremony</h4>
          <h6>Just click the Zoom link that we sent it to you before ceremony. Enjoy your wedding ceremony, which takes around 15 minutes to 60 minutes All other aspects of the ceremony are left up to you, the couple, and any cultural traditions or religious tenets you choose to include. At the end your officiant will digitally sign and submit your marriage license.</h6>
        </div>
        <div class="step_block">
          <img src="@/assets/images/content-media-folder--content-media-folder-music-video.png" alt="icon">
          <p>Step 3</p>
          <h4>After ceremony</h4>
          <h6>You’ll receive a digital copy of your US marriage certificate within 1 hour on your email. The next business day, the County marriage license office will print a certified copy of your license and mail it to the address you’ve requested.  And yes, we remember, we’ll send link to your ceremony writhing next couple days.</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.step {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 40px 0;
}
.step_main {
  width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}
.step_main h3 {
  width: 60%;
  text-align: center;
}
.step_container {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 16px;
}
.step_block {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
  padding: 24px;
  align-items: start;
  border-radius: 16px;
  background-color: rgba(255, 230, 145, 1);
}
.step_block p {
  color: white;
  font-weight: bold;
}
.step_block img {
  height: 48px;
  object-fit: contain;
}
@media all and (max-width: 550px) {
  .step {
    padding: 40px 10px;
  }
  .step_container {
    flex-direction: column;
  }
  .step_main h3 {
    width: 100%;
  }
}
</style>
<template>
  <div class="steps">
    <div class="steps_main">
      <h3>Discover the Beautiful Stages of Your Online Wedding Ceremony</h3>
      <div class="steps_block">
        <div class="progress_bar">
          <div class="progress_bar_color"></div>
          <div class="step" @click="changeStep(1)">1</div>
          <div class="step" @click="changeStep(2)">2</div>
          <div class="step" @click="changeStep(3)">3</div>
        </div>
        <div class="left_side_steps">
          <div class="left_side_steps_step" :class="{activestep: step === 1}">
            <img src="@/assets/images/icon_before_wedding.png" alt="icon">
            <h4>Before wedding</h4>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            <div class="action">
              <p>Learn more</p>
              <img src="@/assets/images/chevron-right.svg" alt="icon">
            </div>
          </div>
          <div class="left_side_steps_step" :class="{activestep: step === 2}">
            <img src="@/assets/images/hello--users-people-hello.png" alt="icon">
            <h4>During ceremony</h4>
            <p>
              Just click the Zoom link that we sent it to you before ceremony. Enjoy your wedding ceremony, which takes around 15 minutes to 60 minutes All other aspects of the ceremony are left up to you, the couple, and any cultural traditions or religious tenets you choose to include. At the end your officiant will digitally sign and submit your marriage license.</p>
            <div class="action">
              <p>Learn more</p>
              <img src="@/assets/images/chevron-right.svg" alt="icon">
            </div>
          </div>
          <div class="left_side_steps_step" :class="{activestep: step === 3}">
            <img src="@/assets/images/content-media-folder--content-media-folder-music-video.png" alt="icon">
            <h4>After ceremony</h4>
            <p>
              You’ll receive a digital copy of your US marriage certificate within 1 hour on your email. The next business day, the County marriage license office will print a certified copy of your license and mail it to the address you’ve requested.  And yes, we remember, we’ll send link to your ceremony writhing next couple days.</p>
            <div class="action">
              <p>Learn more</p>
              <img src="@/assets/images/chevron-right.svg" alt="icon">
            </div>
          </div>
        </div>
        <div class="right_side_steps">
          <video :class="{activeVideo: step === 1}" src="@/assets/images/starter-template-copy.mp4" type="video/mp4" loop muted autoplay playsinline webkit-playsinline preload="auto"></video>
          <video :class="{activeVideo: step === 2}" src="@/assets/images/my-eye-popping-video.mp4" type="video/mp4" loop muted autoplay playsinline webkit-playsinline preload="auto"></video>
          <video :class="{activeVideo: step === 3}" src="@/assets/images/my-fabulous-video.mp4" type="video/mp4" loop muted autoplay playsinline webkit-playsinline preload="auto"></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
    }
  },
  methods: {
    changeStep(step) {
      this.step = step;
      if (window.innerWidth <= 550) {
        if (this.step === 1) {
          document.querySelector('.progress_bar_color').style.width = `0`;
        } else if (this.step === 2) {
          document.querySelector('.progress_bar_color').style.width = `50%`;
        } else if (this.step === 3) {
          document.querySelector('.progress_bar_color').style.width = `100%`;
        }
      }
      else {
        if (this.step === 1) {
          document.querySelector('.progress_bar_color').style.height = `0`;
        } else if (this.step === 2) {
          document.querySelector('.progress_bar_color').style.height = `50%`;
        } else if (this.step === 3) {
          document.querySelector('.progress_bar_color').style.height = `100%`;
        }
      }
    }
  },
  mounted() {
    setInterval(() => {
      this.step++;
      if (this.step > 3) {
        this.step = 1
      }
    }, 30000)
  },
  watch: {
    step(newValue) {
      this.changeStep(newValue);
    }
  }
}
</script>

<style scoped>
.steps {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 40px 0;
  justify-content: center;
  align-items: center;
}
.steps_main {
  width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 80px;
}
.steps_main h3 {
  width: 60%;
}
.steps_block {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 48px;
  align-items: center;
}
.progress_bar {
  display: flex;
  height: 360px;
  width: 16px;
  border-radius: 8px;
  background: grey;
  position: relative;
}
.progress_bar_color {
  width: 100%;
  height: 0;
  background: var(--shape-color);
  border-radius: 8px;
  transition: height 1s ease;
}
.step {
  position: absolute;
  box-sizing: border-box;
  padding: 16px;
  border-radius: 50%;
  line-height: 50%;
  color: white;
  background: var(--shape-color);
  cursor: pointer;
}
.step:nth-child(4) {
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
}
.step:nth-child(2) {
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
}
.step:nth-child(3) {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
}
.left_side_steps {
  width: 100%;
  position: relative;
}
.left_side_steps_step {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  flex-direction: column;
  gap: 24px;
  align-items: start;
  transition: all 1s ease;
}
.left_side_steps_step img {
  width: 80px;
  object-fit: contain;
}
.activestep {
  position: relative !important;
  opacity: 1 !important;
}
.activeVideo {
  position: relative !important;
  opacity: 1 !important;
  animation: rotate 1s ease !important;
}
@keyframes rotate {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
.action {
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  box-sizing: border-box;
  padding: 4px 20px;
  border: 1px solid var(--text-color);
}
.action img {
  width: 32px;
}
.right_side_steps {
  width: 100%;
  position: relative;
}
.right_side_steps video {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  border-radius: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: all 1s ease;
  animation: out 1s ease;
}
@keyframes out {
  0% {
    width: 100%;
  }
  100% {
    width: 0;
  }
}
@media all and (max-width: 550px) {
  .steps {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 40px 10px;
    justify-content: center;
    align-items: center;
  }
  .steps_main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
  .steps_main h3 {
    width: 100%;
    text-align: center;
  }
  .steps_block {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
  }
  .progress_bar {
    display: flex;
    height: 8px;
    width: 90%;
    border-radius: 8px;
    background: grey;
    position: relative;
    order: 3;
  }
  .progress_bar_color {
    width: 0;
    height: 100%;
    background: var(--shape-color);
    border-radius: 8px;
    transition: width 1s ease;
  }
  .step {
    position: absolute;
    box-sizing: border-box;
    padding: 12px;
    border-radius: 50%;
    line-height: 50%;
    color: white;
    background: var(--shape-color);
    cursor: pointer;
  }
  .step:nth-child(4) {
    top: 50%;
    left: 100%;
    transform: translate(-50%, -50%);
    z-index: 5;
  }
  .step:nth-child(2) {
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    z-index: 5;
  }
  .step:nth-child(3) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
  }
  .left_side_steps {
    width: 100%;
    position: relative;
  }
  .left_side_steps_step {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    flex-direction: column;
    gap: 16px;
    transition: all 1s ease;
  }
  .left_side_steps_step img {
    width: 80px;
    object-fit: contain;
  }
  .activestep {
    position: relative !important;
    opacity: 1 !important;
  }
  .activeVideo {
    position: relative !important;
    opacity: 1 !important;
  }
  .action {
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
    box-sizing: border-box;
    padding: 4px 20px;
    border: 1px solid var(--text-color);
  }
  .action img {
    width: 32px;
  }
  .right_side_steps {
    width: 100%;
    position: relative;
  }
  .right_side_steps video {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    border-radius: 16px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: all 1s ease;
    animation: none !important;
  }
}
</style>
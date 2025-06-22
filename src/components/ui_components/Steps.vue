<template>
  <div class="steps">
    <div class="steps_main">
      <h3>Here’s how ALTAR works:</h3>
      <div class="steps_tab">
        <div class="tab" @click="step = 1">
          <h3>1</h3>
          <h5>Invite your partner</h5>
          <div :class="{active: step === 1}" class="line"></div>
        </div>
        <div class="tab" @click="step = 2">
          <h3>2</h3>
          <h5>Fill in the information</h5>
          <div :class="{active: step === 2}" class="line"></div>
        </div>
        <div class="tab" @click="step = 3">
          <h3>3</h3>
          <h5>Select ceremony date</h5>
          <div :class="{active: step === 3}" class="line"></div>
        </div>
      </div>
      <div class="video-step">
        <div class="video-text" v-if="step === 1">
          <video src="@/assets/videos/firststep.mp4" autoplay muted loop></video>
          <h6>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</h6>
        </div>
        <div class="video-text" v-if="step === 2">
          <video src="@/assets/videos/step2.mp4" autoplay muted loop></video>
          <h6>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</h6>
        </div>
        <div class="video-text" v-if="step === 3">
          <video src="@/assets/videos/step3.mp4" autoplay muted loop></video>
          <h6>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</h6>
        </div>
      </div>
      <a href="https://app.tryaltar.com"><WhiteButton><slot>Get Married</slot></WhiteButton></a>
    </div>
  </div>
</template>

<script>
import WhiteButton from "@/components/ui_components/WhiteButton.vue";

export default {
  components: {WhiteButton},
  data() {
    return {
      step: 1,
      size: null,
    }
  },
  methods: {

  },
  mounted() {
    this.size = window.innerWidth;
  },
  watch: {

  }
}
</script>

<style scoped>
.steps {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 60px 0;
  justify-content: center;
  align-items: center;
  background: var(--back-yellow);
}
.steps_main {
  width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding: 64px;
  border-radius: 24px;
  align-items: center;
}
.steps_main h3 {
  text-align: center;
}
.steps_tab {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.tab {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}
.line {
  width: 100%;
  height: 6px;
  background: #f6f6f6;
  transition: background 0.2s ease-in-out;
}
.active {
  background: var(--shape-color);
}
.video-step {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.video-text {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
}
.video-text video {
  width: 100%;
  border-radius: 24px;
}
.video-text h6 {
  text-align: center;
}
@media all and (max-width: 550px) {
  .steps {
    padding: 32px 0;
  }
  .steps_main {
    width: 100%;
    padding: 0 10px;
    gap: 16px;
  }
  .tab h5 {
    font-size: 12px;
  }
  .video-text video {
    border-radius: 12px;
  }
}
</style>
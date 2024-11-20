<template>
  <div class="video-container">
    <div class="video_main">
      <div class="zagolovok">
        <h3>Memorable Wedding Ceremonies</h3>
        <h6>Experience the magic of online weddings with us.</h6>
      </div>
      <div class="videos">
        <div class="video" v-for="video in videos" :key="video.id">
          <video :src="`${mediaUrl}${video.video.url}`" controls="controls" :poster="`${mediaUrl}${video.cover.url}`"></video>
          <h4>{{ video.article }}</h4>
          <p>{{ video.description }}</p>
        </div>
      </div>
      <WhiteButton><slot>View All</slot></WhiteButton>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import WhiteButton from "@/components/ui_components/WhiteButton.vue";
export default {
  components: {WhiteButton},
  data() {
    return {
      videos: [],
      mediaUrl: 'http://154.12.254.79'
    }
  },
  methods: {
    async getVideos() {
      try {
        const response = await axios.get('http://154.12.254.79/api/weddings?populate=*')
        if (response) {
          this.videos = response.data.data;
        }
      } catch(error) {
        console.log(error)
      }
    }
  },
  async mounted() {
    await this.getVideos();
  }
}
</script>

<style scoped>
.video-container {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 80px 0;
}
.video_main {
  width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
}
.zagolovok {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
}
.videos {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 48px;
}
.video {
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.video video {
  width: 300px;
  border-radius: 12px;
}
</style>
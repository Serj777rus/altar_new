<template>
  <div class="video-container">
    <div class="video_main">
      <div class="zagolovok">
        <h3>2000+ couples have been married on Altar. Be the next</h3>
<!--        <h6>Experience the magic of online weddings with us.</h6>-->
      </div>
      <div class="videos">
        <div class="video" v-for="video in videos" :key="video.id" @mouseover="playVideo(video.id)" @mouseleave="pauseVideo(video.id)">
          <video :id="video.id" :src="`${mediaUrl}${video.video.url}`" muted loop playsinline></video>
          <h4>{{ video.article }}</h4>
          <p>{{ video.description }}</p>
          <img class="poster" :class="{active: isActiveVideo === video.id}" :src="`${mediaUrl}${video.cover.url}`" alt="poster"/>
        </div>
      </div>
      <div class="hero_utp">
        <div class="utp">
          <p>100% online</p>
        </div>
        <div class="utp">
          <p>2 days average from I do to marriage</p>
        </div>
        <div class="utp">
          <p>Less then 1 hour to create marriage license</p>
        </div>
      </div>
<!--      <WhiteButton><slot>View All</slot></WhiteButton>-->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    videos: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      mediaUrl: 'https://admin.tryaltar.com',
      isActiveVideo: null,
    }
  },
  methods: {
    playVideo(id) {
      let videoElement = document.getElementById(id);
      if (videoElement) {
        this.isActiveVideo = id
        videoElement.removeAttribute('poster');
        videoElement.play()
      }
    },
    pauseVideo(id) {
      let videoElement = document.getElementById(id);
      if (videoElement) {
        this.isActiveVideo = null
        videoElement.pause()
        videoElement.currentTime = 0;
      }
    }
  },
}
</script>

<style scoped>
.video-container {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
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
  gap: 16px;
}
.video {
  width: 100%;
  height: 600px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  flex: 1;
  transition: all 600ms ease;
  overflow: hidden;
  border-radius: 16px;
}
.video:hover {
  flex: 2;
}
.video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}
.video h4 {
  position: absolute;
  top: 24px;
  left: 24px;
  z-index: 5;
  color: white;
  font-size: 32px;
}
.video p {
  position: absolute;
  bottom: 24px;
  left: 24px;
  z-index: 5;
  color: white;
  font-size: 18px;
}
.poster {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  transition: opacity 200ms ease;
}
.active {
  opacity: 0;
}
.hero_utp {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
}
.utp {
  box-sizing: border-box;
  padding: 8px 18px;
  background: var(--shape-color);
  border-radius: 16px;
}
.utp p {
  font-weight: 400;
  text-align: center;
  font-size: 16px;
}
@media all and (max-width: 550px) {
  .video-container {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 40px 10px;
    box-sizing: border-box;
  }
  .video_main {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }
  .zagolovok {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
  .zagolovok h3 {
    text-align: center;
  }
  .videos {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: start;
    align-items: center;
    gap: 32px;
  }
  .video {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .video video {
    width: 100%;
    border-radius: 12px;
  }
  .hero_utp {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
  }
  .utp {
    box-sizing: border-box;
    padding: 8px 18px;
    background: var(--shape-color);
    border-radius: 16px;
  }
  .utp p {
    font-weight: 400;
    text-align: center;
    font-size: 16px;
  }
}
</style>
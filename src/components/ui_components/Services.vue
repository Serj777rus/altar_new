<template>
  <div class="services">
    <div class="services_main">
      <h3>For Who?</h3>
      <div class="service">
        <div class="service_card" v-for="service in services" :key="service.id" :class="{active: isActive === service.id}">
          <div class="left_side_card">
            <img v-if="service.image.mime === 'image/png'" :src="`${mediaUrl}${service.image.url}`" alt="image">
            <video v-if="service.image.mime === 'video/mp4'" :src="`${mediaUrl}${service.image.url}`" autoplay muted loop playsinline webkit-playsinline preload="auto"></video>
            <div class="banner_image">{{ service.article }}</div>
          </div>
          <div class="right_side_card">
            <h6>Our Services</h6>
            <h3>{{ service.Service }}</h3>
            <p>{{ service.description }}</p>
            <WhiteButton><slot>Read more</slot></WhiteButton>
          </div>
        </div>
      </div>
      <div class="tabs">
        <div class="tab" v-for="tab in services" :key="tab.id" @click="isActive = tab.id">
          <img :src="`${mediaUrl}${tab.moreimages.url}` || `${mediaUrl}${tab.image.url}`" alt="image">
          <p>{{ tab.Service }}</p>
        </div>
      </div>
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
      services: [],
      mediaUrl: 'http://154.12.254.79',
      isActive: 7
    }
  },
  methods: {
    async getServices() {
      try {
        const response = await axios.get('http://154.12.254.79/api/forwhos?populate=*')
        if (response.data.data !== null) {
          this.services = response.data.data;
          localStorage.setItem('services', JSON.stringify(this.services));
        }
      } catch(error) {
        console.log(error)
      }
    }
  },
  async mounted() {
    await this.getServices();
    console.log(this.services)
    this.isActive = this.services[0].id;
  }
}
</script>

<style scoped>
.services {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 80px 0;
  justify-content: center;
  align-items: center;
}
.services_main {
  width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
}
.services_main h3 {
  text-align: center;
}
.service {
  width: 100%;
  position: relative;
  height: 320px;
}
.service_card {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 80px;
  align-items: center;
  justify-content: center;
  transform: translateX(-200%);
  position: absolute;
  top: 0;
  left: 0;
  transition: all 1s ease;
}
.left_side_card {
  width: 100%;
  position: relative;
}
.left_side_card img {
  max-width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 12px;
}
.left_side_card video {
  max-width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 12px;
}
.banner_image {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1;
  color: var(--text-color);
  box-sizing: border-box;
  padding: 16px 48px;
  background: var(--shape-color);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
}
.right_side_card {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: start;
}
.right_side_card h3 {
  color: var(--shape-color);
}
.active {
  transform: translateX(0);
}
.tabs {
  width: fit-content;
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
  box-sizing: border-box;
  padding: 8px;
  border-radius: 12px;
  background: var(--shape-color);
}
.tab {
  height: 96px;
  position: relative;
}
.tab img {
  height: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 8px;
  filter: brightness(60%);
  cursor: pointer;
}
.tab p {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  cursor: pointer;
}
@media all and (max-width: 550px) {
  .services {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 40px 10px;
    justify-content: center;
    align-items: center;
  }
  .services_main {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }
  .services_main h3 {
    text-align: center;
  }
  .service {
    width: 100%;
    position: relative;
    height: 760px;
  }
  .service_card {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;
    transform: translateX(-200%);
    position: absolute;
    top: 0;
    left: 0;
    transition: all 1s ease;
  }
  .left_side_card {
    width: 100%;
    position: relative;
  }
  .left_side_card img {
    max-width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 12px;
  }
  .left_side_card video {
    max-width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 12px;
  }
  .banner_image {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1;
    color: var(--text-color);
    box-sizing: border-box;
    padding: 16px 48px;
    background: var(--shape-color);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
  }
  .right_side_card {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: start;
  }
  .right_side_card h3 {
    color: var(--shape-color);
  }
  .active {
    transform: translateX(0);
  }
  .tabs {
    width: fit-content;
    display: flex;
    flex-direction: row;
    gap: 12px;
    justify-content: center;
    box-sizing: border-box;
    padding: 8px;
    border-radius: 12px;
    background: var(--shape-color);
  }
  .tab {
    height: 72px;
    position: relative;
  }
  .tab img {
    height: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 8px;
    filter: brightness(60%);
    cursor: pointer;
  }
  .tab p {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-align: center;
    cursor: pointer;
  }
}
</style>
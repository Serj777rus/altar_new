<template>
  <div class="services">
    <div class="services_main">
      <h3>All in one solution for all couples</h3>
      <div class="service">
        <div class="service_card" v-for="service in services" :key="service.id">
          <div class="left_side_card">
            <video v-if="service.video.mime === 'video/mp4' || service.video.mime === 'video/webm'" :src="`${mediaUrl}${service.video.url}`" autoplay muted loop playsinline webkit-playsinline preload="auto"></video>
          </div>
          <div class="right_side_card">
<!--            <h6>Our Services</h6>-->
            <h4>{{ service.name_service }}</h4>
            <p>{{ service.description_service }}</p>
<!--            <h6>{{ service.article_service }}</h6>-->
<!--            <p>{{ service.article_advantages }}</p>-->
<!--            <ul>-->
<!--              <li v-for="advantage in service.advantages" :key="advantage.id">{{ advantage.advantage }}</li>-->
<!--            </ul>-->
            <WhiteButton><slot>Read more</slot></WhiteButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WhiteButton from "@/components/ui_components/WhiteButton.vue";
export default {
  props: {
    services: {
      type: Array,
      required: true,
    }
  },
  components: {WhiteButton},
  data() {
    return {
      mediaUrl: 'https://admin.tryaltar.com',
      isActive: 7
    }
  },
  watch: {
    services: {
      handler(newValue) {
        if (newValue) {
          this.isActive = this.services[0].id;
        }
      }
    }
  }
}
</script>

<style scoped>
.services {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 60px 0;
  justify-content: center;
  align-items: center;
}
.services_main {
  width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: start;
}
.services_main h3 {
  width: 100%;
  text-align: center;
}
.service {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  row-gap: 32px;
}
.service_card {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  //border-radius: 12px;
  //-webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  //-moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  //box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-sizing: border-box;
}
.left_side_card {
  width: 100%;
  position: relative;
}
.left_side_card video {
  max-width: 100%;
  aspect-ratio: 5/4;
  object-fit: cover;
  border-radius: 12px;
}
.right_side_card {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: start;
}
.right_side_card h4 {
  color: var(--shape-color);
}
.right_side_card h6 {
  font-weight: 800;
  box-sizing: border-box;
  padding: 12px;
  border-left: 4px solid var(--shape-color);
}
.right_side_card ul li::marker {
  color: var(--shape-color);
  font-size: 32px;
  align-self: center;
  justify-self: center;
}
.right_side_card ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.right_side_card ul li {
  line-height: 100%;
  align-items: start;
  justify-content: start;
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
    grid-template-columns: 1fr;
    row-gap: 32px;
  }
  .service_card {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;
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
    aspect-ratio: 16/9;
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
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 4px;
    justify-content: center;
    overflow: hidden;
    box-sizing: border-box;
    padding: 4px;
    border-radius: 12px;
    background: var(--shape-color);
    order: 2;
  }
  .tab {
    height: 56px;
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
    font-size: 10px;
  }
}
</style>
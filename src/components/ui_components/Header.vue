<template>
  <div class="header">
    <div class="header_main">
      <div class="header_logo" @click="$router.push('/')">
        <img src="@/assets/images/logo.svg" alt="logo">
        <h2>ALTAR</h2>
      </div>
      <div class="menu">
        <p @click="$router.push('/')">Home</p>
        <p @click="$router.push('/blog')">Blog</p>
        <p @click="$router.push('/about')">About Us</p>
        <p @click="$router.push('/contact')">Contact</p>
      </div>
      <BlacButton v-if="size > 550" @click="$emit('open-pop', true)"><slot>Subscribe</slot></BlacButton>
      <img @click="isActiveMenu = true" src="@/assets/images/menu.svg" v-else alt="icon">
    </div>
  </div>
  <div @click="isActiveMenu = false" v-if="size <= 550" class="side-menu" :class="{'active': isActiveMenu}">
    <div class="mobile-menu">
      <div class="header_logo" @click="$router.push('/')">
        <img src="@/assets/images/logo.svg" alt="logo">
        <h2>ALTAR</h2>
      </div>
      <div class="menu-point">
        <p @click="routing('/')">Home</p>
        <p @click="routing('/blog')">Blog</p>
        <p @click="routing('/about')">About Us</p>
        <p @click="routing('/contact')">Contact</p>
      </div>
    </div>
  </div>
</template>

<script>
import BlacButton from "@/components/ui_components/BlacButton.vue";
export default {
  components: {BlacButton},
  data() {
    return {
      size: null,
      isActiveMenu: false
    };
  },
  methods: {
    routing(route) {
      this.isActiveMenu = false;
      this.$router.push(route)
    }
  },
  mounted() {
    this.size = window.innerWidth;
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  background: var(--back-yellow);
}
.header_main {
  width: 1280px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.header_logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  cursor: pointer;
}
.header_logo img {
  width: 48px;
  object-fit: contain;
}
.header_logo h2 {
  font-size: 32px;
  color: var(--text-color);
}
.menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
  cursor: pointer;
}
@media all and (max-width: 550px) {
  .header {
    box-sizing: border-box;
    padding: 20px 10px;
  }
  .header_main {
    width: 100%;
  }
  .menu {
    display: none;
  }
  .header_logo h2{
    font-size: 24px;
  }
  .header_logo img {
    width: 32px;
  }
  .header_logo {
    gap: 4px;
  }
  .side-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100dvh;
    background: rgba(0, 0 , 0, 0.8);
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: end;
    box-sizing: border-box;
    transition: right .2s ease;
  }
  .mobile-menu {
    width: 70%;
    height: 100%;
    border-radius: 24px 0 0 24px;
    padding: 64px 32px;
    background: white;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 64px;
    align-items: end;
    z-index: 101;
  }
  .menu-point {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 32px;
  }
  .menu-point p {
    font-size: 32px;
    font-weight: 600;
    color: var(--text-color);
  }
  .active {
    right: 0;
  }
}
</style>
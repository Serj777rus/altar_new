<template>
  <div class="header">
    <div class="header_main">
      <div class="header_logo" @click="$router.push('/')">
        <img src="@/assets/images/logo.svg" alt="logo">
        <h2>ALTAR</h2>
      </div>
      <BlacButton @click="$emit('open-pop', true)"><slot>Subscribe</slot></BlacButton>
    </div>
  </div>
</template>

<script>
import BlacButton from "@/components/ui_components/BlacButton.vue";
export default {
  components: {BlacButton},
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
@media all and (max-width: 550px) {
  .header {
    box-sizing: border-box;
    padding: 40px 10px;
  }
}
</style>
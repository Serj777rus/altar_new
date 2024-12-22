<template>
  <div class="header">
    <div class="header_main">
      <div class="header_logo">
        <img src="@/assets/images/logo.svg" alt="logo">
        <h2>ALTAR</h2>
      </div>
      <BlacButton @click="$emit('open-pop', true)"><slot>Contact US</slot></BlacButton>
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
  padding-top: 48px;
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
}
.header_logo img {
  width: 48px;
  object-fit: contain;
}
.header_logo h2 {
  font-size: 32px;
  color: var(--shape-color);
}
@media all and (max-width: 550px) {
  .header {
    box-sizing: border-box;
    padding: 0 10px;
  }
}
</style>
<template>
  <div class="modal" :class="{active: isActive}">
    <div class="modal_container">
      <img src="@/assets/images/icons/Facebook.png" alt="icon">
      <img src="@/assets/images/icons/fb_messenger.png" alt="icon">
      <img src="@/assets/images/icons/instagram.png" alt="icon">
      <img src="@/assets/images/icons/telegram.png" alt="icon">
      <img src="@/assets/images/icons/tiktok.png" alt="icon">
      <img src="@/assets/images/icons/twitter.png" alt="icon">
      <img src="@/assets/images/icons/vk.png" alt="icon">
      <img src="@/assets/images/icons/whatsapp.png" alt="icon">
      <p @click="$emit('closePop')">&#215;</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: false
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.modal {
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  margin: 0;
  box-sizing: border-box;
  position: fixed;
  bottom: -100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  transition: all 1s ease;
}
.active {
  bottom: 0;
}
.modal_container {
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 24px 48px;
  border-radius: 12px;
  border: 2px solid #eaeaea;
  background: #fff;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
  position: relative;
}
.modal_container img {
  width: 48px;
  transition: all 200ms ease;
  cursor: pointer;
}
.modal_container img:hover {
  transform: translateY(-12px);
}
.modal_container p {
  position: absolute;
  top: -24px;
  right: -24px;
  cursor: pointer;
  font-size: 32px;
  font-weight: bold;
}
@media all and (max-width: 550px) {
  .modal {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 10px;
    margin: 0;
    box-sizing: border-box;
    position: fixed;
    bottom: -100%;
    left: 0;
    z-index: 1000;
    transition: all 1s ease;
  }
  .active {
    bottom: 0;
  }
  .modal_container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 12px 24px;
    border-radius: 48px;
    background: var(--shape-color);
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
    position: relative;
  }
  .modal_container img {
    width: 32px;
    transition: all 200ms ease;
    cursor: pointer;
  }
  .modal_container img:hover {
    transform: translateY(-12px);
  }
  .modal_container p {
    position: absolute;
    top: -32px;
    right: 12px;
    cursor: pointer;
    font-size: 32px;
    font-weight: bold;
  }
}
</style>
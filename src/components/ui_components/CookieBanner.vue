<template>
  <div class="cookie-banner" :class="{active: isActive}">
    <div class="cookie-banner-main">
      <div class="cookie-text">
        <img src="@/assets/images/icons/cookie.png" alt="cookies">
        <p>Our website use cookies. By continuing navigating, we assume your permission to deploy cookies as detailed in our Privacy Policy.</p>
      </div>
      <div class="buttons">
        <button class="blue_btn" @click="$emit('accept')">Accept cookies</button>
        <button class="white_btn" @click="$emit('decline')">Decline</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: false
  }
}
</script>

<style scoped>
.cookie-banner {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 24px 0;
  transform: translateY(100%);
  transition: all 1s ease;
  z-index: 1000;
}
.active {
  transform: translateY(0%);
}
.cookie-banner-main {
  width: 1280px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 32px 32px;
  box-sizing: border-box;
  border: 1px solid #D9DBE9;
  border-radius: 20px;
  box-shadow: 0 14px 42px 0 rgba(8, 15, 52, 0.06);
  z-index: 1000;
}
.cookie-text {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 22px;
}
.cookie-banner-main img {
  width: 68px;
  height: 68px;
  object-fit: contain;
}
.cookie-banner-main p {
  font-size: 18px;
  color: #6F6C90;
}
.buttons {
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  gap: 20px;
}
.blue_btn {
  box-sizing: border-box;
  padding: 18px 26px;
  border-radius: 56px;
  background: #4A3AFF;
  color: white;
  box-shadow: 0 3px 12px 0 rgba(74, 58, 255, 0.18);
  border: none;
  display: flex;
  flex-direction: row;
  gap: 8px;
  cursor: pointer;
}
.blue_btn::before {
  content: "";
  width: 14px;
  height: 14px;
  display: block;
  background-image: url("@/assets/images/icons/cookiemini.png");
  background-repeat: no-repeat;
  background-size: 14px 14px;
  background-position: center center;
}
.white_btn {
  box-sizing: border-box;
  padding: 18px 26px;
  border: 1px solid #EFF0F6;
  border-radius: 56px;
  background: #FFFFFF;
  color: var(--text-color);
  box-shadow: 0 4px 8px 0 rgba(74, 58, 255, 0.08);
  cursor: pointer;
}
@media all and (max-width: 550px) {
  .cookie-banner {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 24px 10px;
    transform: translateY(100%);
    transition: all 1s ease;
    z-index: 1000;
  }
  .active {
    transform: translateY(0%);
  }
  .cookie-banner-main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    padding: 32px 32px;
    box-sizing: border-box;
    border: 1px solid #D9DBE9;
    border-radius: 20px;
    box-shadow: 0 14px 42px 0 rgba(8, 15, 52, 0.06);
    z-index: 1000;
    gap: 12px;
  }
  .cookie-text {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 22px;
  }
  .cookie-banner-main img {
    width: 48px;
    height: 48px;
    object-fit: contain;
  }
  .cookie-banner-main p {
    font-size: 14px;
    color: #6F6C90;
  }
  .buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    gap: 8px;
  }
  .blue_btn {
    box-sizing: border-box;
    width: 100%;
    padding: 18px 26px;
    border-radius: 56px;
    background: #4A3AFF;
    color: white;
    box-shadow: 0 3px 12px 0 rgba(74, 58, 255, 0.18);
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
  }
  .blue_btn::before {
    content: "";
    width: 14px;
    height: 14px;
    display: block;
    background-image: url("@/assets/images/icons/cookiemini.png");
    background-repeat: no-repeat;
    background-size: 14px 14px;
    background-position: center center;
  }
  .white_btn {
    box-sizing: border-box;
    width: 100%;
    padding: 18px 26px;
    border: 1px solid #EFF0F6;
    border-radius: 56px;
    background: #FFFFFF;
    color: var(--text-color);
    box-shadow: 0 4px 8px 0 rgba(74, 58, 255, 0.08);
    cursor: pointer;
  }
}
</style>
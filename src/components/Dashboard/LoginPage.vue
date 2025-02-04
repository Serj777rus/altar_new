<template>
  <div class="container">
    <div class="main">
      <div class="form_div">
        <form @submit.prevent="">

        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("@/assets/dashboard/login_background.png");
  background-size: cover;
}
.main {
  width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);
  border-radius: 32px;
}
.form_div {
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  border-radius: 24px;
}
form {
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
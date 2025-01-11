<template>
  <div class="form_pop" :class="{active: isActive}">
    <div class="pop_main">
        <img src="@/assets/images/Featured_icon.png" alt="icon">
        <h6>Hi, send us your data</h6>
        <p>and we callback as soon as posible</p>
        <form @submit.prevent="sendForm">
          <div class="form-group">
            <label for="first_name">Name</label>
            <input v-model="formData.first_name" type="text" name="first_name" id="first_name" placeholder="Inter your name" required>
          </div>
          <div class="form-group">
            <label for="phone">Phone</label>
            <input v-model="formData.phone" type="text" name="phone" id="phone" placeholder="Inter your phone number" required>
          </div>
          <div class="form-group">
            <label for="phone">Email</label>
            <input v-model="formData.email" type="text" name="email" id="email" placeholder="Inter your Email" required>
          </div>
          <div class="check-group">
            <input type="checkbox" name="check" id="check" @click="btnDisabled = !btnDisabled">
            <p>You confirm that you have read and agree to the privacy policy</p>
          </div>
          <button type="submit" class="btn" :disabled="!btnDisabled">Submit</button>
          <p v-if="message !== null" style="align-self: center; color: green; text-align: center">Thank you {{formData.first_name}}, your data is sended!</p>
        </form>
        <div class="close_pop" @click="$emit('close-pop', false)">+</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    isActive: Boolean,
  },
  data() {
    return {
      formData: {
        first_name: '',
        phone: '',
        email: ''
      },
      btnDisabled: false,
      message: null,
    }
  },
  methods: {
    async sendForm() {
      try {
        const response = await axios.post('api/sendForm', this.formData)
        if (response.status === 200) {
          this.message = response.data.id;
          this.formData = {
            first_name: '',
            phone: '',
            email: ''
          }
          setTimeout(() => {
            this.$emit('close-pop', false);
            this.message = null;

            }, 1000)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.form_pop {
  width: 100%;
  height: 100vh;
  display: flex !important;
  justify-content: center;
  align-items: center;
  background: rgba(10, 13, 18, .7);
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: -1;
  transition: all 1s ease;
}
.pop_main {
  width: 400px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background: #fff;
  box-shadow: 0 20px 24px -4px rgba(10, 13, 18, .1), 0 8px 8px -4px rgba(10, 13, 18, .04);
  box-sizing: border-box;
  padding: 24px;
  gap: 4px;
  position: relative;
}
.pop_main h6 {
  font-weight: 500;
}
.pop_main form {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
}
.form-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
label {
  font-family: 'Roboto', serif;
  font-weight: 300;
  font-size: 14px;
}
form input {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 14px;
  border-radius: 4px;
  border: 1px solid #D5D7DA;
}
.check-group {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: start;
  justify-content: start;
}
.check-group input {
  width: fit-content;
}
.check-group p {
  font-size: 12px;
}
.btn {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 10px 18px;
  justify-content: center;
  align-items: center;
  background: #7F56D9;
  border-radius: 8px;
  border: none;
  color: #fff;
  margin-top: 24px;
}
.close_pop {
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 32px;
  font-weight: 300;
  font-family: 'Roboto', serif;
  transform: rotate(-45deg);
  margin: 0;
  cursor: pointer;
}
.active {
  opacity: 1;
  z-index: 999;
}
@media all and (max-width: 550px) {
  .pop_main {
    width: 90%;
  }
}
</style>
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="footer_main">
    <div class="footer_div">
      <div class="footer_text">
        <h4 class="letter" v-for="(letter, index) in textArr" :key="index" :class="{activeletter: index <= precent}">{{ letter }}</h4>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      height: 0,
      divHeight: 0,
      top: 0,
      bottom: 0,
      step: 0,
      text: 'It has never been easier to get married. We are on mission to disrupt the traditional wedding and make this process simple, fast, legal and fully online. So, no more wedding dilemma. Our couples love us, and you will too.',
      textArr: [],
      precent: null
    }
  },
  mounted() {
    this.textArr = this.text.split(' ');

    this.$nextTick(() => {
      this.height = document.querySelector('.footer_main').getBoundingClientRect().height;
      this.divHeight = document.querySelector('.footer_text').getBoundingClientRect().height
      this.step = (this.height - window.innerHeight) / this.textArr.length;
      window.addEventListener('scroll', () => {
        this.top = Math.round(document.querySelector('.footer_main').getBoundingClientRect().top)
      })
    })
  },
  watch: {
    top(newValue) {
      if (newValue) {
        if ((this.top - 40) <= 0) {
          this.precent = Math.round((((this.top) / -1) / this.step))
        }
      }
    }
  }
}
</script>

<style scoped>
.footer_main {
  width: 100%;
  height: 3000px;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  padding: 40px 0;
  box-sizing: border-box;
}
.footer_div {
  width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
}
.footer_text {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 24px;
  position: sticky;
  top: 80px;
  justify-content: space-between;
  row-gap: 8px;
  align-items: center;
  box-sizing: border-box;
  border-radius: 32px;
  //box-shadow: 0 8px 16px 2px rgba(0, 0, 0, .2);
  background: #fff;
  //padding: 48px;
  /* background: rgb(247, 247, 247); */
}
.letter {
  line-height: 100%;
  font-size: 72px;
  font-weight: 500;
  /* color: rgba(170, 90, 109, .2); */
  color:rgba(51, 51, 51, 0.3);
  transition: all .3s ease;
}
.activeletter {
  color: rgba(184, 134, 11);
}
@media all and (max-width: 550px) {
  .footer_main {
    width: 100%;
    display: none;
    justify-content: center;
    /* align-items: center; */
    padding: 40px 10px
  }

  .footer_div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
  }

  .footer_text {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 24px;
    position: sticky;
    top: 40px;
    justify-content: space-between;
    row-gap: 4px;
    align-items: center;
    box-sizing: border-box;
    border-radius: 12px;
    box-shadow: 0 8px 16px 2px rgba(0, 0, 0, .2);
    background: #fff;
    padding: 24px;
    /* background: rgb(247, 247, 247); */
  }

  .letter {
    line-height: 100%;
    font-size: 36px;
    font-weight: 500;
    /* color: rgba(170, 90, 109, .2); */
    color: rgba(51, 51, 51, 0.3);
    transition: all .3s ease;
  }

  .activeletter {
    color: var(--shape-color);
  }
}
</style>
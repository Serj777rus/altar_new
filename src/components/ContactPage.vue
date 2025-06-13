<template>
  <Header></Header>
  <div class="container">
    <main class="main">
      <div class="content">
        <h2>Contact US</h2>
        <div class="image_contact">
          <div class="item">
            <img src="@/assets/images/Dashboard/Connectivity%2003.svg" alt="icon">
            <p>Provide us with your number, and we'll give you a call.
              Get answers directly from our experts.</p>
            <BlacButton><slot>Call Us</slot></BlacButton>
          </div>
          <div class="item">
            <img src="@/assets/images/Dashboard/Messages%2002.svg" alt="icon">
            <p>Have a question or need assistance? Send us an email, and
              our team will respond to your inquiry.</p>
            <BlacButton><slot>Mail Us</slot></BlacButton>
          </div>
          <div class="item">
            <img src="@/assets/images/Dashboard/Messages%2005.svg" alt="icon">
            <p>Engage in real-time conversations through our live chat. Get
              quick, convenient solutions from our team.</p>
            <BlacButton><slot>Chat Us</slot></BlacButton>
          </div>
        </div>
      </div>
    </main>
  </div>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/ui_components/Header.vue";
import Footer from "@/components/ui_components/Footer.vue";
import BlacButton from "@/components/ui_components/BlacButton.vue";
export default {
  inject: ['useHead'],
  components: {
    Header,
    Footer,
    BlacButton,
  },
  mounted() {
    this.useHead.addHeadObjs({
      title: "Contact US",
      meta: [
        {name: "description", content: 'Contact page ALTAR'},
          {property: "og:title", content: 'Contact US'},
          { property: 'og:description', content: 'Contact page ALTAR' },
      ]
    })
  }
}
</script>

<style scoped>
  .container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main {
    width: 1280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 128px 0;
  }
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
  }
  .image_contact {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 32px;

  }
  .item {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
  .item p {
    text-align: center;
  }
  @media all and (max-width: 550px) {
    .main {
      width: 100%;
      padding: 64px 0;
    }
    .image_contact {
      flex-direction: column;
    }
    .item img {
      width: 50%;
    }
  }
</style>
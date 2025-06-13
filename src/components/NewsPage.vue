<template>
  <div class="main">
    <div class="contents-block">
      <Header @open-pop="PopUpActive = true"></Header>
      <div class="content">
        <div class="post" v-for="post in posts" :key="post.id">
          <div class="image-text">
            <img :src="`${fileBaseUrl}` + post.poster.formats.small.url" alt="">
            <div class="text-date">
              <h4>{{ post.article }}</h4>
              <p>{{ post.date }}</p>
            </div>
          </div>
          <router-link :to="`/blog/${post.slug}`"><button>Read more</button></router-link>
        </div>
      </div>
    </div>
    <Footer></Footer>
    <PopUp :isActive="PopUpActive" @close-pop="closePop"></PopUp>
  </div>
</template>

<script>
import Header from "@/components/ui_components/Header.vue";
import Footer from "@/components/ui_components/Footer.vue";
import axios from "axios";
import {inject} from "vue";
import PopUp from "@/components/ui_components/PopUp.vue";
export default {
  components: {PopUp, Header, Footer },
  inject: ['useHead'],
  data() {
    return {
      posts: null,
      apiBaseUrl: null,
      fileBaseUrl: null,
      PopUpActive: false,
    }
  },
  methods: {
    closePop(value) {
      this.PopUpActive = value
    },
    async getPosts() {
      try {
        const response = await axios.get(`${this.apiBaseUrl}getPosts`)
        if (response.status === 200) {
          console.log(response.data.data)
          this.posts = response.data.data;
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  async mounted() {
    this.apiBaseUrl = inject("apiBaseUrl");
    this.fileBaseUrl = inject("fileBaseUrl");
    await this.getPosts()
    this.useHead.addHeadObjs({
      title: 'Blog',
      meta: [
        { name: 'description', content: 'Blog about online marriage' },
        { property: 'og:title', content: 'Blog' },
        { property: 'og:description', content: 'Blog about online marriage' },
      ]
    })
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.contents-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.content {
  width: 1280px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding: 60px 0;
  gap: 16px;
}
.post {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  border-bottom: 1px solid #eee;
}
.image-text {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;
  height: 100%;
  width: fit-content;
}
.post img {
  width: 10%;
  border-radius: 12px;
}
.text-date {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
}
.post a {
  width: fit-content;
  white-space: nowrap;
}
.post button {
  width: 100%;
  padding: 12px 16px;
  background: transparent;
  border: 1px solid var(--text-color);
  border-radius: 12px;
  cursor: pointer;
}
@media all and (max-width: 550px) {
  .content {
    width: 100%;
    padding: 60px 12px !important;
  }
  .post {
    padding: 24px 12px;
    width: auto;
    gap: 8px;
    flex-direction: column;
    align-items: start;
    grid-gap: 8px;
  }
  .text-date {
    gap: 8px;
  }
  .post img {
    display: none;
  }
  .post a {
    white-space: none;
  }
  .post button {
    padding: 8px 16px;
    font-size: 12px;
    border-radius: 6px;
  }
}
</style>
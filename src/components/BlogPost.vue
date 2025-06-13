<template>
  <div class="main">
    <Header @open-pop="PopUpActive = true"></Header>
    <div class="main-container">
      <div class="back" @click="$router.back(-1)">
        <img src="@/assets/images/arrow_back.svg" alt="icon">
        <p>Back</p>
      </div>
      <div class="cover-block">
        <img :src="`${fileBaseUrl}` + article?.poster.formats.large.url" alt="">
        <div class="overlay"></div>
        <h3>{{ article?.article }}</h3>
      </div>
      <div class="content">
        <div class="text">
          <h6 class="art-desc">{{ article?.description }}</h6>
          <div class="article-block" v-for="block in article?.article_block" :key="block.id">
            <h4>{{ block.head }}</h4>
            <div class="rich-text" v-html="renderedMarket(block.content)"></div>
          </div>
        </div>
        <div class="sticky">
          <div class="date-share">
            <div class="date">
              <p>Publication Date</p>
              <span>{{ article?.date }}</span>
            </div>
            <img @click="navi" src="@/assets/images/share.svg" alt="icon">
          </div>
          <div class="mini-articles">
            <p>Table of content</p>
            <ul>
              <li v-for="item in article?.article_block" :key="item.id">{{ item.head }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
  <PopUp :isActive="PopUpActive" @close-pop="closePop"></PopUp>
</template>

<script>
import axios from "axios";
import {inject} from "vue";
import Header from "@/components/ui_components/Header.vue";
import Footer from "@/components/ui_components/Footer.vue";
import PopUp from "@/components/ui_components/PopUp.vue";
import { marked } from 'marked';

const myRenderer = new marked.Renderer();

myRenderer.image = function (href, title, text) {
  // Страховка от не-строк
  if (typeof href !== 'string') {
    console.warn('ОШИБКА: href не строка', href);
    href = href?.href || ''; // Если вдруг пришёл объект с полем href
  }

  return `<img src="${href}" alt="${text}" class="md-image" style="width: 100%; aspect-ratio: 16/9; object-fit: cover;border-radius: 12px" loading="lazy">`;
};

marked.setOptions({
  breaks: true,
  gfm: true,
  renderer: myRenderer,
});
export default {
  components: {Header, Footer, PopUp},
  inject: ['useHead'],
  data() {
    return {
      apiBaseUrl: null,
      fileBaseUrl: null,
      slug: null,
      article: null,
      PopUpActive: false,
      shareData: {
        url: window.location.href,
        title: null
      }
    }
  },
  methods: {
    async getArticle() {
      const res = await axios.get(`${this.apiBaseUrl}getPost`, {
        params: {
          slug: this.slug
        }});
      this.article = res.data.data[0];
      this.shareData.title = this.article.article
    },
    renderedMarket(text) {
      return marked.parseInline(text)
    },
    closePop(value) {
      this.PopUpActive = value
    },
    async navi() {
      try {
        await navigator.share(this.shareData)
      } catch (error) {
        console.log(error)
      }
    }
  },
  async mounted() {
    this.fileBaseUrl = inject("fileBaseUrl");
    this.apiBaseUrl = inject("apiBaseUrl");
    this.slug = this.$route.params.slug
    if (this.slug) {
      await this.getArticle();
      this.useHead.addHeadObjs({
        title: this.article?.article,
        meta: [
          { name: 'description', content: this.article?.description },
          { property: 'og:title', content: this.article?.article },
          { property: 'og:description', content: this.article?.description },
          { property: 'og:image', content: this.article?.poster.formats.small.url },
        ]
      })
    }
    console.log(navigator.canShare)
  }
}
</script>

<style scoped>
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 1280px;
  padding: 24px 0;
}
.back {
  width: fit-content;
  padding: 16px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}
.cover-block {
  width: 100%;
  display: flex;
  position: relative;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
}
.cover-block h3 {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  text-align: center;
}
.cover-block img {
  width: 100%;
  object-fit: cover;
  aspect-ratio: 16/5;
}
.content {
  width: 1280px;
  height: 100%;
  padding: 60px 0;
  display: flex;
  flex-direction: row;
  gap: 32px;
  box-sizing: border-box;
}
.text {
  width: 70%;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.art-desc {
  padding-left: 32px;
  border-left: 2px solid var(--shape-color);
}
.article-block {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: 'Roboto', serif;
  font-weight: 300;
}
.sticky {
  padding: 24px 0;
  width: 30%;
  height: fit-content;
  display: flex;
  position: sticky;
  top: 0;
  flex-direction: column;
  gap: 32px;
}
.date-share {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.mini-articles {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
ul {
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 12px;
  background: #f6f6f6;
  padding: 24px 24px;
}
ul li {
  list-style-position: inside;

}
@media all and (max-width: 550px) {
  .back {
    padding: 12px;
    width: fit-content;
  }
  .main-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    padding: 24px 0;
  }
  .cover-block {
    width: 100%;
    padding: 0;
  }
  .cover-block img {
    aspect-ratio: 16/9;
  }
  .cover-block h3 {
    font-size: 24px;
    padding: 0 24px;
    width: 80%;
  }
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 0 12px;
    box-sizing: border-box;
  }
  .text {
    width: 100%;
    order: 2;
    padding: 0;
  }
  .sticky {
    width: 100%;
    order: 1;
    position: relative;
    padding: 0;
  }
  .rich-text {
    width: 100%;
  }
  ul {
    width: auto;
  }
}
</style>
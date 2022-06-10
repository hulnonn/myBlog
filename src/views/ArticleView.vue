<template>
  <div class="article-container">
    <aside class="aside-nav">
      <div class="nav-items">nav1</div>
      <div class="nav-items">nav1</div>
      <div class="nav-items">nav1</div>
      <div class="nav-items">nav1</div>
      <div class="nav-items">nav1</div>
    </aside>
    <div v-html="article" class="markdown-body"></div>
  </div>
</template>

<script>
import '@/../node_modules/github-markdown-css/github-markdown-dark.css'
// api
import { getArticel } from '@/api/article.js'
import * as marked from 'marked'
export default {
  name: 'ArticleView',
  data() {
    return {
      article: ''
    }
  },
  methods: {
    async getArticelAndRender() {
      const result = await getArticel('2')
      const htmlMd = marked.parse(result.data)
      this.article = htmlMd
    }
  },
  mounted() {
    this.getArticelAndRender()
  }
}
</script>

<style lang="scss" scoped>
.article-container {
  margin-top: 60px;

  .aside-nav {
    position: fixed;
    top: 60px;
    left: 0;
    .nav-items {
      width: 200px;
      height: 50px;
      background-color: red;
      text-align: center;
    }
  }

  .markdown-body {
    box-sizing: border-box;
    width: 800px;
    margin: 0 auto;
    padding: 20px;
    overflow: auto;
  }
}

@media (max-width: 720px) {
  .article-container {
    margin-top: 50px;

    .markdown-body {
      width: 100vw;
      padding: 10px;
    }
  }
}
</style>

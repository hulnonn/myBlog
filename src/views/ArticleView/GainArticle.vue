<template>
  <div class="gain-article">
    <div class="markdown">
      <div v-html="article" class="markdown-body"></div>
    </div>
  </div>
</template>
<script>
import '@/style/github-markdown-dark.css'
// api
import { getArticel } from '@/api/article.js'
import * as marked from 'marked'
export default {
  name: 'GainArticle',
  data() {
    return {
      article: ''
    }
  },
  props: ['articleId'],
  methods: {
    async getArticelAndRender() {
      const result = await getArticel(this.articleId)
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
.gain-article {
  .markdown {
    .markdown-body {
      box-sizing: border-box;
      width: 800px;
      margin: 0 auto;
      padding: 20px;
      overflow: auto;
    }
  }
}
@media (max-width: 720px) {
  .gain-article {
    .markdown {
      .markdown-body {
        width: 100vw;
        padding: 10px;
      }
    }
  }
}
</style>

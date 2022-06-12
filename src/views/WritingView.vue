<template>
  <div class="writting-container">
    <div class="editor-container">
      <v-md-editor v-model="article" height="800px"></v-md-editor>
      <div class="digest-editor">
        <div class="input-items">
          <label for="title">标题：</label>
          <input type="text" id="title" v-model="digest.title" class="input">
          <button @click="postDigest">发表文章</button>
        </div>
        <div class="input-items">
          <label for="category">类别：</label>
          <select name="category-select" id="category" v-model="digest.category">
            <option value="">文章类别</option>
            <option value="html">HTML</option>
            <option value="js">JavaScript</option>
            <option value="css">CSS</option>
            <option value="vue">Vue</option>
            <option value="other">其它</option>
          </select>
        </div>
        <div class="input-items">
          <label for="tag">标签：</label>
          <input type="text" id="tag" v-model="tags" class="input" placeholder="html, js, css, vue以及其它, 用空格分隔">
        </div>
        <div class="input-items">
          <label for="keywords">关键字：</label>
          <input type="text" id="keyword" v-model="digest.keywords" class="input">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// api
import { postArticleDigest, postArticle } from '@/api/article.js'
export default {
  name: 'WritingView',
  data() {
    return {
      article: '',
      digest: {
        title: '',
        createTime: '',
        category: '',
        id: '',
        path: '',
        tags: [],
        keywords: ''
      },
      tags: ''
    }
  },
  computed: {
    digestLength() {
      return this.$store.state.articleDigest.length + 1 || 0
    }
  },
  methods: {
    async postDigest() {
      // 判断， 如果文章果断或者没有填写文章信息则直接返回
      if (this.tags === '' || this.digest.keywords === '') {
        alert('文章信息必填')
        return undefined
      }
      if (this.article.length < 150) {
        alert('文章过短')
        return undefined
      }
      // 获取创建文章的时间
      const time = new Date()
      const timeStr = `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`
      this.digest.createTime = timeStr
      // 新文章的id就是新摘要的长度
      this.digest.id = this.digestLength.toString()
      this.digest.path = '/article/gainArticle/' + this.digestLength
      const tags = this.tags.split(' ')
      tags.forEach(item => {
        this.digest.tags.push({ color: this.createClassName(item), title: item })
      })
      // 发送请求，参数为文章和文章摘要
      try {
        const { data } = await postArticle(this.article, this.digest.title)
        if (data.code === 200) {
          const { data: data2 } = await postArticleDigest(this.digest)
          if (data2.code === 200) {
            this.$store.dispatch('gainArticleDigest')
            this.article = ''
            this.tags = ''
            this.digest = {
              title: '',
              createTime: '',
              category: '',
              id: '',
              path: '',
              tags: [],
              keywords: ''
            }
            alert('文章发布成功')
          } else {
            throw data2.message
          }
        } else {
          throw data.message
        }
      } catch (error) {
        alert(error.message)
        return undefined
      }
    },
    createClassName(tag) {
      let className
      switch (tag) {
        case 'Vue':
        case 'vue':
          className = 'tag-green'
          break
        case 'CSS':
        case 'css':
          className = 'tag-yellow'
          break
        case 'JavaScript':
        case 'javascript':
        case 'Javascript':
        case 'js':
          className = 'tag-orange'
          break
        case 'html':
        case 'HTML':
          className = 'tag-blue'
          break
        default:
          className = 'tag-red'
          break
      }
      return className
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/handle.scss';
.writting-container {
  margin-top: 60px;
  overflow-x: clip;
  .editor-container {
    width: 1500px;
    margin: 0 auto;
    .editor-item {
      width: 100%;
      height: 650px;
      z-index: 1;
    }
    .digest-editor {
      margin-top: 20px;
      .input-items {
        @include font_color('font_color');
        font-size: 18px;

        .input {
          outline-style: none;
          border: 1px solid #ccc;
          border-radius: 3px;
          padding: 5px 10px;
          width: 300px;
          font-size: 16px;
        }
      }
    }
  }
  @media (max-width: 720px) {
    .writting-container {
      margin-top: 50px;
    }
  }
}
</style>

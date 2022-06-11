<template>
  <div class="writting-container">
    <div class="editor-container">
      <mavon-editor v-model="article" />
    </div>
    <div class="digest-editor">
      <div class="input-items">
        <label for="title">标题：</label>
        <input type="text" id="title" v-model="digest.title">
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
        <input type="text" id="tag" v-model="tags">
      </div>
    </div>
    <button @click="postDigest">click</button>
  </div>
</template>

<script>
// api
import { postArticleDigest, postArticle } from '@/api/article.js'
export default {
  name: 'WritingView',
  data() {
    return {
      article: '# 我是一级标题',
      digest: {
        title: '',
        createTime: '',
        category: '',
        id: '',
        path: '',
        tags: []
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
      const time = new Date()
      const timeStr = `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`
      this.digest.createTime = timeStr
      this.digest.id = this.digestLength.toString()
      this.digest.path = '/article/gainArticle/' + this.digestLength
      const tags = this.tags.split(' ')
      tags.forEach(item => {
        this.digest.tags.push({ color: 'tag-green', title: item })
      })
      for (const key in this.digest) {
        if (this.digest[key] === '') {
          alert('请填写信息')
          return undefined
        }
      }
      try {
        const { data } = await postArticle(this.article, this.digest.title)
        if (data.code === 200) {
          const { data: data2 } = await postArticleDigest(this.digest)
          if (data2.code === 200) {
            this.$store.dispatch('gainArticleDigest')
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
    }
  }
}
</script>

<style lang="scss" scoped>
.writting-container {
  margin-top: 60px;
}
@media (max-width: 720px) {
  .writting-container {
    margin-top: 50px;
  }
}
</style>

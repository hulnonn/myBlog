<template>
  <div class="container">
    <input type="text" class="search" placeholder="请输入关键字" v-model="searchKeyword" @keydown.enter="search">
    <ArticleDigest :digests="articleDigestByKeyword" />
  </div>
</template>

<script>
import ArticleDigest from '@/components/ArticleDigest'
export default {
  name: 'SearchView',
  components: { ArticleDigest },
  data() {
    return {
      searchKeyword: ''
    }
  },
  props: {
    keyword: {
      type: String,
      default: ''
    }
  },
  computed: {
    articleDigest() {
      return this.$store.state.articleDigest || []
    },
    articleDigestByKeyword() {
      if (this.keyword === '') {
        return []
      }
      const reg = new RegExp(this.keyword, 'i')
      // 判断是否可以在标题、关键字、类型、tag中找到元素
      const result = this.articleDigest.filter(item => {
        if (reg.test(item.title)) {
          return true
        }
        if (reg.test(item.keywords)) {
          return true
        }
        if (reg.test(item.category)) {
          return true
        }
        return item.tags.some(tag => reg.test(tag.title))
      })
      return result
    }
  },
  methods: {
    search() {
      if (this.searchKeyword === '') {
        alert('请输入内容')
        return undefined
      }
      this.$router.push('/search/' + this.searchKeyword)
      this.searchKeyword = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .search {
    margin-bottom: 50px;
    width: 550px;
    height: 45px;
    padding: 0 20px;
    box-sizing: border-box;
    border-radius: 10px;
    border: none;
    outline: none;
    background-color: #fbb3b3;
    color: #333;
    font-size: 18px;
  }
}
@media (max-width: 720px) {
  .container {
    margin-top: 80px;
    input {
      display: none;
    }
  }
}
</style>

<template>
  <div>
    <!-- <h1>{{articleCategory}}</h1> -->
    <ArticleDigest :digests="articleCategory"></ArticleDigest>
  </div>
</template>

<script>
import ArticleDigest from '@/components/ArticleDigest.vue'
export default {
  name: 'DigestList',
  components: { ArticleDigest },
  props: ['category'],
  computed: {
    articleDigest() {
      return this.$store.state.articleDigest
    },
    articleCategory() {
      return this.articleDigest.filter(item => item.category === this.category)
    }
  }
}
</script>

<style>
</style>

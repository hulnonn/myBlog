<template>
  <div class="article-container">
    <p>ArticleView</p>
  </div>
</template>

<script>
export default {
  name: 'ArticleView'
}
</script>

<style lang="scss" scoped>
.article-container {
  margin-top: 60px;
}

@media (max-width: 720px) {
  .article-container {
    margin-top: 50px;
  }
}
</style>

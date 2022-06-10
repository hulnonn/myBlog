<template>
  <div class="article-container">
    <aside class="aside-nav">
      <div class="nav-items">nav1</div>
      <div class="nav-items">nav1</div>
      <div class="nav-items">nav1</div>
      <div class="nav-items">nav1</div>
      <div class="nav-items">nav1</div>
    </aside>
    <router-view></router-view>
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
}

@media (max-width: 720px) {
  .article-container {
    margin-top: 50px;
  }
}
</style>

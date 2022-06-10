<template>
  <div class="article-container">
    <aside class="aside-nav">
      <div class="nav-items" v-for="nav in navs" :key="nav.id">
        <router-link :to="nav.path">{{nav.title}}</router-link>
      </div>
    </aside>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'ArticleView',
  data() {
    return {
      navs: [
        { id: '001', path: '/article/digestList/html', title: 'HTML' },
        { id: '002', path: '/article/digestList/js', title: 'JavaScript' },
        { id: '003', path: '/article/digestList/css', title: 'Css' },
        { id: '004', path: '/article/digestList/vue', title: 'Vue' },
        { id: '005', path: '/article/digestList/other', title: '其它' }
      ]
    }
  },
  computed: {
    articleDigest() {
      return this.$store.state.articleDigest
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/handle.scss';
.article-container {
  margin-top: 60px;

  .aside-nav {
    position: fixed;
    top: 30%;
    left: 0;
    height: 100vh;
    .nav-items {
      // width: 240px;
      border-right: 1px solid #999;
      a {
        display: block;
        margin: 0 auto;
        box-sizing: border-box;
        width: 240px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        @include font_color('font_color');
        transition: all 0.3s ease;
        &:hover {
          padding-left: 20px;
        }
      }
    }
  }
}

@media (max-width: 720px) {
  .article-container {
    margin-top: 50px;
    .aside-nav {
      top: 50px;
    }
  }
}
</style>

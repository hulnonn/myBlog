<template>
  <div class="article-container">
    <aside class="aside-nav">
      <div class="nav-items" v-for="nav in navs" :key="nav.id">
        <router-link :to="nav.path">{{nav.title}}</router-link>
      </div>
    </aside>
    <router-view class="main-container"></router-view>
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
      ],
      showAside: false
    }
  },
  computed: {
    articleDigest() {
      return this.$store.state.articleDigest
    }
  },
  methods: {
    handleMobile() {
      this.showAside = !this.showAside
    }
  },
  created() {
    if (document.documentElement.clientWidth > 720) {
      this.showAside = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/handle.scss';
.article-container {
  display: flex;
  margin-top: 60px;

  .aside-nav {
    transition: all 0.3s ease;
    position: fixed;
    @include background_color('body_color');
    z-index: 2;
    top: 60px;
    left: 0;
    padding-top: 50px;
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
  .main-container {
    padding: 0 250px;
    margin: 0 auto;
  }
}

@media (max-width: 720px) {
  .article-container {
    margin-top: 50px;
    .aside-nav {
      display: none;
    }
    .main-container {
      padding: 0;
    }
  }
}
</style>

<template>
  <div class="article-container">
    <transition name="aside_nav_ani">
      <aside class="aside-nav" v-show="showAside">
        <div class="nav-items" v-for="nav in navs" :key="nav.id">
          <router-link :to="nav.path">{{nav.title}}</router-link>
        </div>
      </aside>
    </transition>
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
  },
  mounted() {
    this.$bus.$on('handleMobile', this.handleMobile)
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/handle.scss';
.article-container {
  display: flex;
  margin-top: 60px;

  .aside-nav {
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
      top: 350px;
      left: auto;
      right: 0;
      .nav-items {
        border: none;
        &:first-child {
          border-top: 1px solid rgba($color: #aaa, $alpha: 0.5);
        }
        a {
          width: 30vw;
        }
      }
    }
    .main-container {
      padding: 0;
    }
  }
}

// 动画
.aside_nav_ani-enter-active,
.aside_nav_ani-leave-active {
  transition: all 0.3s ease !important;
}

.aside_nav_ani-enter {
  transform: translateX(100%) !important;
}
.aside_nav_ani-enter-to {
  transform: translateX(0%) !important;
}
.aside_nav_ani-leave {
  transform: translateX(0);
}
.aside_nav_ani-leave-to {
  transform: translateX(100%);
}
</style>

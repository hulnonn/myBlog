<template>
  <div id="home">
    <BannerComponent></BannerComponent>
    <main id="main">
      <aside class="home-aside">
        <div class="self-info home-aside-items">
          <div class="avatar-container"></div>
          <div class="self-intro">
            <h3>前端工程师</h3>
            <p>从事前端开发一年了</p>
          </div>
        </div>
        <div class="objectives home-aside-items">
          <h3 style="margin-bottom: 10px">学习目标：</h3>
          <p class="object-time" style="margin-bottom: 10px">学习 Vue 源码</p>
          <p class="object-time" style="margin-bottom: 10px">学会 React</p>
          <p class="object-time" style="margin-bottom: 10px">使用 Koa 搭建后台服务器</p>
        </div>
        <div class="clock home-aside-items">
          <SimpleCloak></SimpleCloak>
        </div>
      </aside>
      <div class="articles-asid">
        <ArticleDigest :digests="articleDigest"></ArticleDigest>
      </div>
    </main>
  </div>
</template>

<script>
import BannerComponent from '@/components/BannerComponent.vue'
import SimpleCloak from '@/components/SimpleCloak.vue'
import ArticleDigest from '@/components/ArticleDigest.vue'
export default {
  name: 'HomeView',
  components: { BannerComponent, SimpleCloak, ArticleDigest },
  computed: {
    articleDigest() {
      return this.$store.state.articleDigest
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_handle.scss';
$default_radius: 0.7rem;
#home {
  #main {
    display: flex;
    justify-content: center;
    margin: 20px auto 0;

    .home-aside {
      flex-shrink: 0;
      width: 300px;
      box-sizing: border-box;
      margin-bottom: 20px;
      border-radius: $default_radius;
      @include font_color('font_color');

      .home-aside-items {
        transition: all 0.3s ease;
        @include background_color('item_color');
        margin-bottom: 20px;
        padding: 20px;
        border-radius: $default_radius;
      }

      .self-info {
        display: flex;
        justify-content: space-between;
        .avatar-container {
          width: 80px;
          height: 80px;
          border-radius: 80px;
          background: url('@/assets/avatar.jpg') no-repeat center center/100% 100%;
        }
        .self-intro {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: space-around;
        }
      }
    }
  }
}

@media (max-width: 720px) {
  #home {
    #main {
      width: 94vw;
      flex-wrap: wrap;
      .home-aside {
        width: 94vw;
      }
    }
  }
}
</style>

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

      <div class="blogs-aside">
        <div class="blogs">
          <a href="#">
            <div class="blog">
              <h3>
                <a href="#">关于我的博客</a>
              </h3>
              <p>2022-06-07</p>
              <a class="tags">置顶</a>
              <a class="tags tag-green">其它</a>
            </div>
          </a>
        </div>
        <div class="blogs">
          <a href="#">
            <div class="blog">
              <h3>
                <a href="#">关于我的博客</a>
              </h3>
              <p>2022-06-07</p>
              <a class="tags">置顶</a>
              <a class="tags tag-green">其它</a>
            </div>
          </a>
        </div>
        <div class="blogs">
          <a href="#">
            <div class="blog">
              <h3>
                <a href="#">关于我的博客</a>
              </h3>
              <p>2022-06-07</p>
              <a class="tags">置顶</a>
              <a class="tags tag-green">其它</a>
            </div>
          </a>
        </div>
        <div class="blogs">
          <a href="#">
            <div class="blog">
              <h3>
                <a href="#">关于我的博客</a>
              </h3>
              <p>2022-06-07</p>
              <a class="tags">置顶</a>
              <a class="tags tag-green">其它</a>
            </div>
          </a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import BannerComponent from '@/components/BannerComponent.vue'
import SimpleCloak from '@/components/SimpleCloak.vue'
export default {
  name: 'HomeView',
  components: { BannerComponent, SimpleCloak }
}
</script>

<style lang="scss" scoped>
@import '@/style/_handle.scss';
$default_radius: 0.7rem;
#home {
  #main {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 20px auto 0;

    .home-aside {
      min-width: 300px;
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

    .blogs {
      transition: all 0.3s ease;
      width: 40vw;
      min-width: 370px;
      box-sizing: border-box;
      margin: 0 0 20px 20px;
      padding: 20px;
      @include background_color('item_color');
      border-radius: $default_radius;
      a {
        display: block;
        @include font_color('font_color');

        h3 {
          font-weight: 400;
          margin-bottom: 10px;
        }

        p {
          margin-bottom: 10px;
          color: #666;
        }
        .tags {
          display: inline;
          margin: 0 5px;
          padding: 3px 10px;
          border-radius: 10px;
          background-color: #222;
          color: #ebebeb !important;
          font-size: 12px;
        }

        .tag-green {
          background-color: #ece40d;
          color: #400 !important;
        }
      }
    }
  }
}

@media (max-width: 720px) {
  #home {
    #main {
      width: 94vw;
      .home-aside {
        min-width: 370px;
      }
      .blogs {
        margin: 0 0 20px 0;
      }
    }
  }
}
</style>

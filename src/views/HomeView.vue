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

      <div class="articles-aside">
        <div class="articles">
          <a href="#">
            <div class="article">
              <h3>
                <a href="#">关于我的博客</a>
              </h3>
              <p>2022-06-07</p>
              <a class="tags">置顶</a>
              <a class="tags tag-green">其它</a>
            </div>
          </a>
        </div>
        <div class="articles" v-for="d in articleDigests" :key="d.id">
          <router-link :to="d.path">
            <div class="article">
              <h3>{{d.title}}</h3>
              <p>{{d.createTime}}</p>
              <a class="tags" v-for="tag in d.tags" :key="tag.title" :class="tag.color">{{tag.title}}</a>
            </div>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import BannerComponent from '@/components/BannerComponent.vue'
import SimpleCloak from '@/components/SimpleCloak.vue'
// API
import { getArticleDigest } from '@/api/article.js'
export default {
  name: 'HomeView',
  data() {
    return {
      articleDigests: []
    }
  },
  components: { BannerComponent, SimpleCloak },
  methods: {
    async gainArticleDigest() {
      try {
        const result = await getArticleDigest()
        this.articleDigests = result.data
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted() {
    this.gainArticleDigest()
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

    .articles {
      transition: all 0.3s ease;
      flex-shrink: 0;
      width: 900px;
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
          background-color: #26d12f;
          color: #fff !important;
        }
        .tag-yellow {
          background-color: #fff94c;
          color: #200 !important;
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
      .articles {
        width: 94vw;
        margin: 0 0 20px 0;
      }
    }
  }
}
</style>

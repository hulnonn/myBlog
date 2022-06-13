<template>
  <div class="digest-container">
    <div class="articles" v-for="d in digests" :key="d.id">
      <router-link :to="d.path">
        <div class="article">
          <h3>
            {{d.title}}
            <button class="article-btn edit-article" @click.prevent="editArticle(d.id)">编辑</button>
            <button class="article-btn delete-article" @click.prevent="deleteArticle(d.id)">删除</button>
          </h3>
          <p>{{d.createTime}}</p>
          <a class="tags" v-for="tag in d.tags" :key="tag.title" :class="tag.color">{{tag.title}}</a>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleDigest',
  props: {
    digests: {
      type: Array,
      required: true
    }
  },
  methods: {
    editArticle(id) {
      if (sessionStorage.getItem('verifyWord') === '前端开发') {
        this.$router.push('/writing/' + id)
        return undefined
      }
      alert('请先输入口令')
      this.$router.push('/verify/' + id)
    },
    deleteArticle() {
      alert('无权访问')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_handle.scss';
$default_radius: 0.7rem;
.articles {
  transition: all 0.3s ease;
  flex-shrink: 0;
  width: 750px;
  box-sizing: border-box;
  margin: 0 0 20px 20px;
  padding: 20px;
  @include background_color('item_color');
  border-radius: $default_radius;
  a {
    display: block;
    @include font_color('font_color');

    h3 {
      position: relative;
      font-weight: 400;
      margin-bottom: 10px;
      width: 77%;

      .article-btn {
        position: absolute;
        font-size: 14px;
        color: #fff;
        height: 30px;
        line-height: 30px;
        padding: 0 20px;
        border-radius: 4px;
        background-color: #1b9af7;
        border-color: #1b9af7;
        font-weight: 300;
        text-decoration: none;
        text-align: center;
        display: inline-block;
        appearance: none;
        cursor: pointer;
        border: none;
        transition-property: all;
        transition-duration: 0.3s;
      }
      .edit-article {
        right: -85px;
        top: 0;
        background-color: #1b9af7;
        border-color: #1b9af7;
      }
      .delete-article {
        right: -160px;
        top: 0;
        background-color: #f74e1b;
        border-color: #f74e1b;
      }
    }

    p {
      margin-bottom: 10px;
      color: #666;
    }
    .tags {
      display: inline;
      margin: 0 5px;
      padding: 3px 10px;
      border-radius: 4px;
      background-color: #222;
      color: #fff;
      font-size: 12px;
    }

    .tag-green {
      background-color: #26d12f; // Vue
    }
    .tag-yellow {
      background-color: #fff94c; // CSS
      color: #200;
    }
    .tag-blue {
      background-color: #0284ff; // HTML
    }
    .tag-orange {
      background-color: #ffc100; // JavaScript
      color: #222;
    }
    .tag-red {
      background-color: #ff7979; // 其它
    }
  }
}
@media (max-width: 720px) {
  .articles {
    width: 94vw;
    margin: 0 0 20px 0;
  }
  .article-btn {
    display: none !important;
  }
}
</style>

<template>
  <div class="digest-container">
    <div class="articles" v-for="d in digests" :key="d.id">
      <router-link :to="d.path">
        <div class="article">
          <h3>{{d.title}}</h3>
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
@media (max-width: 720px) {
  .articles {
    width: 94vw;
    margin: 0 0 20px 0;
  }
}
</style>

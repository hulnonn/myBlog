<template>
  <div id="app">
    <CommonHeader></CommonHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import CommonHeader from '@/components/CommonHeader.vue'
export default {
  name: 'App',
  components: { CommonHeader },
  created() {
    this.$store.dispatch('gainArticleDigest')
  }
}
</script>

<style lang="scss">
@import '@/style/_handle.scss';
body {
  transition: all 0.3s ease;
  @include background_color('body_color');
  &::-webkit-scrollbar {
    width: 12px !important;
    height: 12px !important;
    padding: 0 4px !important;
  }
  &::-webkit-scrollbar-thumb {
    @include background_color('scroll_coilor');
    border: 3px solid transparent !important;
    border-radius: 6px !important;
    background-clip: content-box !important;
  }
}
</style>

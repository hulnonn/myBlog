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
  components: { CommonHeader }
}
</script>

<style lang="scss">
@import '@/style/_handle.scss';
body {
  transition: all 0.3s ease;
  height: 2000px;
  @include background_color('body_color');
}
</style>

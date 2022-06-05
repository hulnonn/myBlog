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
  height: 2000px;
  background: url('@/assets/banner-test.png') no-repeat;
  @include background_color('bg_color');
}
</style>

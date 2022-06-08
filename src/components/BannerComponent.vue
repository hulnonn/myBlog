<template>
  <section id="banner-container">
    <div class="slogan">
      <div class="avatar"></div>
      <div class="words">
        <h1>欢迎来到我的博客</h1>
        <h3>Have a good time! Thanks</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BannerComponent'
}
</script>

<style lang="scss" scoped>
#banner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
  background: url('@/assets/banner1.png') no-repeat center center/cover;
  .slogan {
    display: flex;
    justify-content: space-between;
    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 50px;
      background: url('@/assets/run.gif') no-repeat;
    }
    .words {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      margin-left: 30px;
      h1 {
        color: #eee;
      }
      h3 {
        color: #eee;
        font-family: Consolas, Arial, 'Microsoft YaHei', '宋体';
      }
    }
  }
}
</style>

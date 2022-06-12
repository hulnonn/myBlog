<template>
  <div class="container">
    <div class="input-container">
      <input type="text" @keyup.enter="verify" v-model="verifyWord" id="input" />
      <p>输入口令按回车前往写作页</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WritingVerify',
  data() {
    return {
      verifyWord: ''
    }
  },
  methods: {
    verify() {
      if (this.verifyWord === '前端开发') {
        sessionStorage.setItem('verifyWord', '前端开发')
        this.$router.replace('/writing')
        this.verifyWord = ''
        return undefined
      }
      this.verifyWord = ''
      alert('口令错误')
    }
  },
  mounted() {
    // this.$nextTick(() => {
    document.getElementById('input').focus()
    // })
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  widows: 100vw;
  height: 100vh;
  .input-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 400px;
    height: 250px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 0 50px 0px rgba($color: #b3b3b3, $alpha: 0.5);
    input {
      width: 300px;
      height: 40px;
      padding: 0 15px;
      box-sizing: border-box;
      border-radius: 10px;
      border: none;
      outline: none;
      background-color: #fbb3b3;
      color: #333;
      font-size: 18px;
    }
  }
}
</style>

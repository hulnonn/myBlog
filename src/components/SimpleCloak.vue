<template>
  <div class="container">
    <canvas id="canvas" ref="canvas"></canvas>
    <div class="time-info">
      <p>{{date1}}</p>
      <p style="text-align: center">{{time}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimpleCloak',
  data() {
    return {
      timer: null,
      timer2: null,
      date: new Date()
    }
  },
  computed: {
    date1() {
      const date = this.date
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      return `${year} 年 ${month} 月 ${day} 日`
    },
    time() {
      const date = this.date
      const arr = ['一', '二', '三', '四', '五', '六', '日']
      const xingqi = arr[date.getDay() - 1]
      const hour = date.getHours()
      const minute = date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes()
      const second = date.getSeconds()
      return `${hour}:${minute}:${second} 星期${xingqi}`
    }
  },
  methods: {
    ResizeCanvas() {
      const s = 100
      const canvas = document.getElementById('canvas')
      const ctx = canvas.getContext('2d')
      canvas.width = canvas.height = s
      const radius = canvas.height / 2
      ctx.translate(radius, radius)

      // radi
      this.DrawClock()
    },
    DrawClock() {
      const canvas = document.getElementById('canvas')
      const ctx = canvas.getContext('2d')
      const radius = (canvas.height / 2) * 0.9
      DrawFace(ctx, radius)
      DrawNumbers(ctx, radius)
      DrawTime(ctx, radius)
      function DrawFace(ctx, radius) {
        ctx.beginPath()
        ctx.arc(0, 0, radius, 0, 2 * Math.PI)
        ctx.fillStyle = 'skyblue'
        ctx.fill()

        const grad = ctx.createRadialGradient(0, 0, radius * 0.9, 0, 0, radius)
        grad.addColorStop(0, '#333')
        grad.addColorStop(0.5, 'white')
        grad.addColorStop(1, '#333')

        ctx.strokeStyle = grad
        ctx.lineWidth = radius * 0.04
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI)
        ctx.fillStyle = '#333'
        ctx.fill()
      }

      function DrawNumbers(ctx, radius) {
        ctx.font = radius * 0.2 + 'px arial'
        ctx.textBaseline = 'middle'
        ctx.textAlign = 'center'
        for (let num = 1; num <= 12; num++) {
          const ang = (num * Math.PI) / 6
          ctx.rotate(ang)
          ctx.translate(0, -radius * 0.8)
          ctx.rotate(-ang)
          ctx.fillText(num.toString(), 0, 0)
          ctx.rotate(ang)
          ctx.translate(0, radius * 0.8)
          ctx.rotate(-ang)
        }
      }
      function DrawHand(ctx, pos, length, width) {
        ctx.beginPath()
        ctx.lineWidth = width
        ctx.lineCap = 'round'
        ctx.moveTo(0, 0)
        ctx.rotate(pos)
        ctx.lineTo(0, -length)
        ctx.stroke()
        ctx.rotate(-pos)
      }
      function DrawTime(ctx, radius) {
        const date = new Date()
        let hour = date.getHours()
        let minute = date.getMinutes()
        let second = date.getSeconds()

        hour = hour % 12
        hour = (hour * Math.PI) / 6 + (minute * Math.PI) / (6 * 60) + (second * Math.PI) / (360 * 60)
        DrawHand(ctx, hour, radius * 0.5, radius * 0.05)
        minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60)
        DrawHand(ctx, minute, radius * 0.8, radius * 0.03)
        second = (second * Math.PI) / 30
        DrawHand(ctx, second, radius * 0.9, radius * 0.02)
      }
    }
  },
  mounted() {
    this.ResizeCanvas()
    this.timer = setInterval(this.DrawClock, 1000)
    this.timer2 = setInterval(() => {
      this.date = new Date()
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
    clearInterval(this.timer2)
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-around;
  .time-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
  }
}
</style>

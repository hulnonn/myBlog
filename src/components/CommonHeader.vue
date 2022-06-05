<template>
  <header id="header_container">
    <div class="header_left">
      <nav class="header_nav">
        <div class="nav_items" v-for="route in routes" :key="route.id">
          <router-link :to="route.path">{{route.title}}</router-link>
        </div>
      </nav>
      <div class="search_input">
        <input type="text">
      </div>
      <div class="dark_mode_switch" @click="changeColorTheme">
        <img src="@/assets/icons/moon.svg" ref="themeIcon">
      </div>
    </div>
    <div class="header_right" v-if="isMobile" @click="handleAsideNav">
      <img src="@/assets/icons/menu.svg">
    </div>
    <!-- 移动端导航栏 -->
    <aside v-if="isMobile">
      <transition name="aside_nav_ani">
        <nav id="aside_nav" v-show="showAsideNav">
          <div class="aside_nav_items" v-for="route in routes" :key="route.id">
            <router-link :to="route.path">{{route.title}}</router-link>
          </div>
        </nav>
      </transition>
    </aside>
  </header>
</template>

<script>
export default {
  name: 'CommonHeader',
  data() {
    return {
      routes: [
        { id: '000', path: '/', title: '首页' },
        { id: '001', path: '/summary', title: '归档' },
        { id: '002', path: '/tag', title: '首页' },
        { id: '003', path: '/note', title: '笔记' },
        { id: '004', path: '/life', title: '生活' },
        { id: '005 ', path: '/trip', title: '旅程' },
        { id: '006', path: '/friends', title: '朋友' }
      ],
      isMobile: document.documentElement.clientWidth < 720,
      showAsideNav: false
    }
  },
  computed: {
    isDarkMode() {
      return this.$store.state.isDarkMode
    }
  },
  methods: {
    handleAsideNav() {
      this.showAsideNav = !this.showAsideNav
    },
    changeColorTheme() {
      this.$store.commit('CHANGE_COLOR_THEME')
      const type = this.isDarkMode ? 'dark' : 'light'
      const src = this.isDarkMode ? require('@/assets/icons/moon.svg') : require('@/assets/icons/sun.svg')
      this.$refs.themeIcon.src = src
      document.documentElement.setAttribute('data-theme', type)
    }
  },
  created() {
    window.addEventListener('resize', () => {
      const width = document.documentElement.clientWidth
      this.isMobile = width < 720
    })
  },
  mounted() {
    this.changeColorTheme()
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/_handle.scss';
$pcHeight: 60px;
$mobileHeight: 50px;

#header_container {
  position: fixed;
  margin-bottom: $pcHeight;
  display: flex;
  align-items: center;
  top: 0;
  width: 100vw;
  height: $pcHeight;
  line-height: $pcHeight;
  @include background_color('bg_color');

  .header_right {
    display: none;
    align-items: center;
    position: absolute;
    right: 1.5rem;
    text-align: center;
    img {
      width: 2rem;
    }
  }

  .header_left {
    position: absolute;
    left: 1.5rem;
    display: flex;
    justify-content: space-between;

    .header_nav {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .nav_items {
        min-width: 50px;
        height: $pcHeight;
        text-align: center;
        margin-left: 10px;
        &:nth-child(1) {
          margin: 0;
        }
        &:last-child {
          margin-right: 20px;
        }
        a {
          font-size: 16px;
          @include font_color(font_color);
        }
      }
    }

    .search_input {
      margin-left: 10px;
      min-width: 100px;
      input {
        width: 92%;
        height: 60%;
        border: none;
        background: #414141 url('@/assets/icons/search.svg') no-repeat 5px center/25px;
        border-radius: 25px;
        color: #eeeaea;
        padding-left: 30px;
        box-sizing: border-box;
        font-size: 14px;
        outline: none;
        vertical-align: middle;
      }
    }

    .dark_mode_switch {
      display: flex;
      align-items: center;
      text-align: center;
      img {
        width: 1.9rem;
      }
    }
  }
}

aside {
  position: absolute;
  right: 0;
  top: $pcHeight;
  #aside_nav {
    width: 40vw;
    @include background_color('bg_color');

    .aside_nav_items {
      text-align: center;

      a {
        @include font_color(font_color);
        font-weight: 700;
      }
    }
  }
}

// 动画
.aside_nav_ani-enter-active,
.aside_nav_ani-leave-active {
  transition: all 0.3s ease;
}

.aside_nav_ani-enter-to,
.aside_nav_ani-leave {
  transform: translateX(0%);
}
.aside_nav_ani-leave-to,
.aside_nav_ani-enter {
  transform: translateX(100%);
}

@media screen and (max-width: 720px) {
  #header_container {
    margin-bottom: $mobileHeight;
    height: $mobileHeight;
    line-height: $mobileHeight;
    .header_right {
      display: flex;
    }

    .header_left {
      position: absolute;
      left: 2rem;
      display: flex;
      justify-content: space-between;

      .header_nav {
        display: none;
        height: $mobileHeight;

        .nav_items {
          height: $mobileHeight;
        }
      }

      .search_input {
        margin-left: -8px;
      }
    }
  }
  aside {
    top: $mobileHeight;
  }
}
</style>

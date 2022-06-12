<template>
  <div class="gain-article">
    <div class="markdown">
      <mavon-editor v-model="article" :tabSize="2" class="editor-item" :toolbars=toolbars codeStyle="atom-one-dark" :autofocus="false" />
    </div>
  </div>
</template>
<script>
// import '@/style/github-markdown-dark.css'
// import '@/style/a11y-dark.css'
// api
import { getArticel } from '@/api/article.js'
export default {
  name: 'GainArticle',
  data() {
    return {
      article: '',
      toolbars: {
        bold: false, // 粗体
        italic: false, // 斜体
        header: false, // 标题
        underline: false, // 下划线
        strikethrough: false, // 中划线
        mark: false, // 标记
        superscript: false, // 上角标
        subscript: false, // 下角标
        quote: false, // 引用
        ol: false, // 有序列表
        ul: false, // 无序列表
        link: false, // 链接
        imagelink: false, // 图片链接
        code: false, // code
        table: false, // 表格
        fullscreen: false, // 全屏编辑
        readmodel: false, // 沉浸式阅读
        htmlcode: false, // 展示html源码
        help: false, // 帮助
        /* 1.3.5 */
        undo: false, // 上一步
        redo: false, // 下一步
        trash: false, // 清空
        save: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: false, // 左对齐
        aligncenter: false, // 居中
        alignright: false, // 右对齐
        /* 2.2.1 */
        subfield: false, // 单双栏模式
        preview: false // 预览
      }
    }
  },
  props: ['articleId'],
  methods: {
    async getArticelAndRender() {
      const result = await getArticel(this.articleId)
      this.article = result.data
    }
  },
  mounted() {
    this.getArticelAndRender()
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/handle.scss';
.markdown {
  width: 1000px;
  margin: 30px auto 0;
  .editor-item {
    width: 100%;
    height: 900px;
    z-index: 1;
  }
}
::v-deep .hljs {
  font-size: 1rem;
  padding: 10px;
}
@media (max-width: 720px) {
  .markdown {
    margin-top: -50px;
    margin-left: -1px;
    border-right: 1px solid #2f3131;
    width: 100vw;
    .editor-item {
      width: 100%;
      z-index: 1;
    }
  }
  ::v-deep .v-note-wrapper .v-note-op .v-right-item {
    position: fixed !important;
    top: 50px !important;
    right: 10px !important;
    .op-icon {
      color: #797d7d !important;
    }
  }
  ::v-deep .v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-title .v-note-navigation-close {
    display: none;
  }
}
</style>
<style lang="scss">
@import '@/style/handle.scss';
.v-note-wrapper .v-note-panel .v-note-show {
  flex: 0 0 100% !important;
  -webkit-flex: 0 0 100% !important;
  width: 100% !important;
  transform: translateX(-50%);
}

.markdown-body pre {
  padding: 0 !important;
}

.v-note-wrapper .v-note-panel .v-note-show .v-show-content {
  transition: all 0.3s ease;
  @include background_important('item_color');
  @include font_color('font_color');
}

.v-note-wrapper .v-note-op {
  background-color: #282c34 !important;
  border: none !important;
}
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper.transition {
  background-color: #2f3131 !important;
  border-left: none !important;
}
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-title {
  color: #2185d0 !important;
}
.v-note-wrapper .v-note-op .v-right-item .op-icon {
  color: #fff !important;
}
.v-note-wrapper .v-note-panel .v-note-show .v-show-content.scroll-style::-webkit-scrollbar,
.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html.scroll-style::-webkit-scrollbar {
  width: 0 !important;
}
@media (max-widht: 720px) {
  .v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-title .v-note-navigation-close {
    display: none;
  }
  .v-note-wrapper .v-note-panel .v-note-show .v-show-content {
    padding: 0 10px;
    overflow-x: hidden;
  }
}
</style>

export const imageerror = {
  // dom当前作用的dom对象
  inserted(dom, options) {
    //   图片异常的逻辑
    //  监听img标签的错误事件  因为图片加载失败 会触发  onerror事件
    dom.src = dom.src || options.value

    dom.onerror = function() {
      // 图片失败  赋值一个默认的图片
      dom.src = options.value
    }
  },
  // 组件更新的钩子函数
  componentUpdated(dom, options) {
    dom.src = dom.src || options.value
  }
}

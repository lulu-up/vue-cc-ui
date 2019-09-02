// 判断点击是不是自己
const Clickoutside = {
  bind(el, bindings, vnode) {
    const handleClick = function(e) {
      // 如果当前的不包含目标元素, 也就是隐藏日期组件
      // 这个vnode就是组件的虚拟dom
      if (!el.contains(e.target)) {
        // 拿到日历组件的实例, expression就是我们指令传进来的操作;
        vnode.context[bindings.expression]();
      }
    };
    // 为了方便移除
    el.handleClick = handleClick;
    document.addEventListener('click', handleClick);
  },
  unbind(el) {
    document.removeEventListener('click', el.handleClick);
  }
};

export default Clickoutside;

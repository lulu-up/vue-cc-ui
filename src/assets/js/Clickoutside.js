// 判断点击是不是自己

const Clickoutside = {
  bind(el, bindings, vnode) {
    const handleClick = function(e) {
      if (!el.contains(e.target)) {
        vnode.context[bindings.expression]();
      }
    };
    el.handleClick = handleClick;
    document.addEventListener('click', handleClick);
  },
  unbind(el) {
    document.removeEventListener('click', el.handleClick);
  }
};

export default Clickoutside;

import alert from './alert.vue';
export default {
  install(Vue) {
      // 显示弹框
    Vue.prototype.$ccAlert = function(options) {
      let Constructor = Vue.extend(alert), node;
      if (typeof options === 'object' && options instanceof Object) {
        node = new Constructor({
          propsData: options
        });
        node.$slots.default = [options.message];
      } else if (typeof options === 'string') {
        node = new Constructor();
        node.$slots.default = [options];
      }
      node.vm = node.$mount();
      node.vm.visible = true
      document.body.appendChild(node.$el);
    };
      // 移除弹框
      Vue.prototype.$ccHiddenAlert = function() {
        document.body.childNodes.forEach(item => {
          if (item.className === 'cc-alert') {
            document.body.removeChild(item);
          }
        });
      };
  }
};

import toast from './toast.vue';
export default {
  install(Vue) {
    Vue.prototype.$ccToast = function(options) {
      let Constructor = Vue.extend(toast), node;
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
  }
};

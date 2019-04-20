import Loading from './loading.vue';

Loading.install = function(Vue) {
  Vue.component(Loading.name, Loading);
  Vue.prototype.$ccShowLoading = function(options) {
    let Constructor = Vue.extend(Loading);
    let node = new Constructor({
      propsData: options
    });
    node.vm = node.$mount();
    document.body.appendChild(node.$el);
  };
  Vue.prototype.$ccHiddenLoading = function() {
    document.body.childNodes.forEach(item => {
      if (item.className === 'cc-loading') {
        document.body.removeChild(item);
      }
    });
  };
};

export default Loading;
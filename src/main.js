import Vue from 'vue';
// import App from './(不会被打包)App/tab.vue';
import App from './(不会被打包)App/按钮输入.vue';
// import App from './(不会被打包)App/计数器.vue';
// import App from './(不会被打包)App/小星星.vue';
// import App from './(不会被打包)App/骨架.vue';
// import App from './(不会被打包)App/懒加载.vue';
// import App from './(不会被打包)App/分页器.vue';
// import App from './(不会被打包)App/popover.vue'
// import App from './(不会被打包)App/日期选择器.vue';
// import App from './(不会被打包)App/tree.vue'
// import App from './(不会被打包)App/弹出框.vue';

import {
  tab,
  ske,
  rate,
  lazy,
  tree,
  icon,
  input,
  toast,
  alert,
  button,
  popover,
  loading,
  datePicker,
  pagination,
  inputNumber,
} from './components/index';
Vue.use(button)
  .use(tab)
  .use(ske)
  .use(icon)
  .use(tree)
  .use(rate)
  .use(alert)
  .use(input)
  .use(toast)
  .use(popover)
  .use(loading)
  .use(datePicker)
  .use(pagination)
  .use(inputNumber)
  .use(lazy, {
    time: 200,
    loadingImg:'http://img.mp.sohu.com/upload/20170715/7b3ce9cd49604308bdd2b7755f52cab9_th.png',
    error:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564597486512&di=9f7ccdadddbd47791ed80eac0890c5e5&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201501%2F03%2F20150103183647_ZxLtT.jpeg'
  });

new Vue({
  render: h => h(App)
}).$mount('#app');

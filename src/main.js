import Vue from 'vue';
// import App from './App/tab.vue';
// import App from './App/按钮输入.vue';
// import App from './App/计数器.vue';
// import App from './App/小星星.vue';
// import App from './App/骨架.vue';
// import App from './App/懒加载.vue';
// import App from './App/分页器.vue';
// import App from './App/popover.vue'
import App from './App/日期选择器.vue';

// 总的样式
// import './style/index.scss';
// 字体样式
// import './style/fonts/iconfont'
// 使用组件
import {
  button,
  icon,
  toast,
  loading,
  input,
  tab,
  inputNumber,
  rate,
  ske,
  lazy,
  pagination,
  popover,
  datePicker
} from './components/index';
Vue.use(button)
  .use(icon)
  .use(toast)
  .use(loading)
  .use(input)
  .use(tab)
  .use(inputNumber)
  .use(rate)
  .use(ske)
  .use(pagination)
  .use(popover)
  .use(datePicker)
  .use(lazy, {
    time: 200,
    loadingImg:
      'http://img.mp.sohu.com/upload/20170715/7b3ce9cd49604308bdd2b7755f52cab9_th.png',
    error:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564597486512&di=9f7ccdadddbd47791ed80eac0890c5e5&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201501%2F03%2F20150103183647_ZxLtT.jpeg'
  });

new Vue({
  render: h => h(App)
}).$mount('#app');

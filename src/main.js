import Vue from 'vue';

import App from './App.vue';
// 总的样式
// import './style/index.scss';
// 字体样式
// import './style/fonts/iconfont'
// 使用组件
import { button, icon, toast } from './components/index';

Vue.use(button).use(icon).use(toast);
import '../tests/unit/toast.spec.js'

new Vue({
  render: h => h(App)
}).$mount('#app');

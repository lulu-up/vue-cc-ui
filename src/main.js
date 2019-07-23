import Vue from 'vue';

// import App from './App/tab.vue';
// import App from './App/按钮到输入框.vue';
import App from './App/inputNumber.vue';
// 总的样式
// import './style/index.scss';
// 字体样式
// import './style/fonts/iconfont'
// 使用组件
import { button, icon, toast,loading,input,tab,inputNumber } from './components/index';

Vue.use(button).use(icon).use(toast).use(loading).use(input).use(tab).use(inputNumber);


new Vue({
  render: h => h(App)
}).$mount('#app');

import inputNumber from './main/input-number.vue'

inputNumber.install = function(Vue) {
  Vue.component(inputNumber.name, inputNumber);
};

export default inputNumber
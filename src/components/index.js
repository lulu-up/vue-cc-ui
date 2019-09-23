
import tab from './Tab/index';
import ske from './Ske/index';
import lazy from './Lazy/index';
import rate from './Rate/index';
import tree from './Tree/index';
import icon from './Icon/index';
import alert from './Alert/index';
import toast from './Toast/index';
import input from './Input/index';
import button from './Button/index';
import loading from './loading/index';
import popover from './Popover/index';
import pagination from './Pagination/index';
import datePicker from './DatePicker/index';
import inputNumber from './InputNumber/index';
// 总的样式
import '../style/index.scss';
// 字体样式
import '../style/fonts/iconfont';

const components = [
  ske,
  tab,
  // lazy, 因为他要很多配置, 所以需要单独玩一下
  icon,
  rate,
  tree,
  alert,
  input,
  toast,
  button,
  popover,
  loading,
  datePicker,
  pagination,
  inputNumber,
];

let CC = {
  install(Vue) {
    components.forEach(component => {
      Vue.component(component.name, component);
    });
  }
};

export default CC;

export {
  ske,
  tab,
  icon,
  rate,
  tree,
  lazy,
  alert,
  input,
  toast,
  button,
  popover,
  loading,
  datePicker,
  pagination,
  inputNumber,
};

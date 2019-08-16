import button from './Button/index';
import icon from './Icon/index';
import toast from './Toast/index';
import loading from './loading/index';
import input from './Input/index';
import tab from './Tab/index';
import inputNumber from './InputNumber/index';
import rate from './Rate/index';
import ske from './Ske/index';
import lazy from './Lazy/index';
import pagination from './Pagination/index';
import popover from './Popover/index';
import datePicker from './DatePicker/index';
// 总的样式
import '../style/index.scss';
// 字体样式
import '../style/fonts/iconfont';

const components = [
  button,
  icon,
  toast,
  loading,
  input,
  tab,
  inputNumber,
  rate,
  ske,
  pagination,
  popover,
  datePicker
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
};

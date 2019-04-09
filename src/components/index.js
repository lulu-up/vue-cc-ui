import button from './Button/index';
import icon from './Icon/index';
import toast from './Toast/index';
import loading from './loading/index';
// 总的样式
import '../style/index.scss';
// 字体样式
import '../style/fonts/iconfont';

const components = [button, icon, toast, loading];

let CC = {
  install(Vue) {
    components.forEach(component => {
      Vue.component(component.name, component);
    });
  }
};

export default CC;

export { button, icon, toast, loading };

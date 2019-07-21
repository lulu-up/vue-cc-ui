/* Automatically generated by './build/bin/build-entry.js' */

import Button from '../src/components/Button/index.js';

const components = [Button];

let CC = {
  install(Vue) {
    components.forEach(component => {
      Vue.component(component.name, component);
    });
  }
};

// 方便模块化调取
export default {
  version: '0.0.7',
  CC,
  Button
};

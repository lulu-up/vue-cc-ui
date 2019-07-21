import Tab from './main/tab.vue'
import TabPane from './main/tab-pane.vue'

Tab.install = function(Vue) {
  Vue.component(Tab.name, Tab);
  Vue.component(TabPane.name, TabPane);
};

export default Tab
import Tree from './main/tree.vue';

Tree.install = function(Vue) {
  Vue.component(Tree.name, Tree);
};

export default Tree

import Popover from './popover.vue';
import prevent from '@/assets/js/prevent';

Popover.install = function(Vue) {
  Vue.component(Popover.name, Popover);
  Vue.prototype.$clearPopover = function() {
    let ary = document.getElementsByClassName('cc-popover__content');
    for (let i = 0; i < ary.length; i++) {
        ary[i].style.display = 'none';
    }
  };
  // 监听指令
  window.addEventListener('scroll',()=>{
    prevent(1,() => {
      Vue.prototype.$clearPopover()
    },400);
  },false)

  Vue.directive('scroll-clear-popover', {
    bind: el => {
      el.addEventListener('scroll', ()=>{
        prevent(1,() => {
          Vue.prototype.$clearPopover()
        },400);
      }, false);
    }
  });
};

export default Popover;

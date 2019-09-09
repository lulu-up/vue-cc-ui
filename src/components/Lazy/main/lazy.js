import {
  getScrollOffset,
  getViewportSize,
  getHTMLScroll
} from '@/assets/js/utils';
class Lazy {
  install(Vue, options) {
    this.vm = Vue;
    this.timeEl = '';
    this.list = new Set();
    this.time = options.time;
    this.error = options.error;
    this.loadingImg = options.loadingImg;
    this.initDirective();
    this.initScroll();
  }
  initDirective() {
    this.vm.directive('lazy', {
      bind: (el, data) => {
        if(this.loadingImg){
            el.setAttribute('src', this.loadingImg);
        }
        this.list.add({ oImg: el, path: data.value });
      }
    });
    this.vm.directive('lazy-box', {
      bind: el => {
        this.whetherHandle();
        el.addEventListener('scroll', this.whetherHandle.bind(this), false);
      }
    });
  }
  initScroll() {
    // 不管怎么样, 默认先把body监控起来把
    // 先触发一次, 第一屏
    this.whetherHandle();
    window.addEventListener('scroll', this.whetherHandle.bind(this), false);
  }
  whetherHandle() {
    // 完全停下的一瞬间开始计时
    clearTimeout(this.timeEl);
    this.timeEl = setTimeout(() => {
      this.handleScroll();
    }, this.time);
  }
  handleScroll() {
    for (let item of this.list) {
      if (this.isNoLoading(item.oImg)) {
        this.list.delete(item);
      } else {
        this.handleSrc(item);
      }
    }
  }
  // 处理该不该显示的问题
  handleSrc(item) {
    let { oImg, path } = item,
      { top: top1, left: left1 } = getHTMLScroll(oImg),
      { top: top2, left: left2 } = getScrollOffset(),
      { width, height } = getViewportSize(),
      height2 = oImg.offsetHeight / 2,
      width2 = oImg.offsetWidth / 2;
    if (top1 - top2 + height2 > 0 && top1 - top2 + height2 < height) {
      if (left1 - left2 + width2 > 0 && left1 - left2 + width2 < width) {
        oImg.onerror = ()=>{
            oImg.setAttribute('src', this.error);
            
        }
        oImg.setAttribute('src', path);
      }
    }
  }

// 工具类
  isNoLoading(item){
    if(!item)return false
    if(item && item.src === this.loadingImg) return false
    return true
  }
}

export default new Lazy();

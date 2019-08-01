// 加.0
export const myToFixed = value => {
  value = value + '';
  if (value.includes('.')) {
    let sp = value.split('.');
    return sp[0] + '.' + sp[1].slice(0, 1);
  } else {
    return value + '.0';
  }
};

// 算元素距离body的距离
export function getHTMLScroll(node) {
  if (!node) return;
  let result = { top: 0, left: 0 },
    parent = node.offsetParent||node.parentNode,
    children = node; // 获取定位父级
  let task = son => {
    let dom = son.parentNode;
    if (!dom) return;
    if (parent === dom) {
      let domScrollTop = dom.scrollTop || 0,
        domScrollLeft = dom.scrollLeft || 0;
      result.top += children.offsetTop - domScrollTop;
      result.left += children.offsetLeft - domScrollLeft;
      children = parent;
      parent = dom.offsetParent; // 下一个父级
    } else {
      let domScrollTop = dom.scrollTop || 0,
        domScrollLeft = dom.scrollLeft || 0;
      result.top -= domScrollTop;
      result.left -= domScrollLeft;
    }

    if (dom.nodeName !== 'BODY') {
      task(dom);
    }
  };
  task(node);
  return result;
}

export function getViewportSize() {
  if (window.innerHeight) {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  } else {
    if (document.compatMode === 'BackCompat') {
      return {
        width: document.body.clientWidth,
        height: document.body.clientHeight
      };
    } else {
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      };
    }
  }
}

export function getScrollOffset() {
  if (window.pageXOffset) {
    return {
      left: window.pageXOffset,
      top: window.pageYOffset
    };
  } else {
    // 问题: 为什么要相加
    // 因为这两个属性只有一个有用, 另一个肯定是0, 索性直接相加
    return {
      left: document.body.scrollLeft + document.documentElement.scrollLeft,
      top: document.body.scrollTop + document.documentElement.scrollTop
    };
  }
}

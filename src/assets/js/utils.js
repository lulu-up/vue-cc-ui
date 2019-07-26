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
  let result = {
    left: 0,
    top: 0
  };
  let task = son => {
    result.left += son.offsetLeft;
    result.top += son.offsetTop;
    // vue 特有的
    let dom = son.offsetParent || son.parentNode;
    let name = dom.nodeName;
    if (name !== 'BODY') {
      task(dom);
    }
  };
  task(node);
  return result;
}

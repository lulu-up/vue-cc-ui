import toast from '../../src/components/Toast/main/toast';
import Vue from 'vue';

describe('测试toast组件', () => {
  it('1: 将方法挂载原型上', () => {
    toast.install(Vue);
    expect(Vue.prototype.$ccToast).toBeTruthy();
  });

  it('2: 传入参数, 形成dom', () => {
    toast.install(Vue);
    Vue.prototype.$ccToast({
      message: '123'
    });
    let node = document.body.childNodes[0],
      classList = 'cc-toast cc-toast--nomal cc-toast--big';
    expect(node.className).toBe(classList);
  });
});

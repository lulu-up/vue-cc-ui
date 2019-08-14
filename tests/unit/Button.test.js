import { shallowMount } from '@vue/test-utils';
import Button from '../../src/components/Button';
import { findTestWrapper } from '../utils/util';


describe('测试button组件', () => {

  it('1: 可以渲染出button组件', () => {
    const wrapper = shallowMount(Button);
    expect(wrapper.contains('button')).toBe(true);
  });

  it('2: button组件点击时会触发click事件', () => {
    const wrapper = shallowMount(Button);
    const button = findTestWrapper(wrapper,'button').at(0);
    button.trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });

  it('3: 传入icon参数, 可以显示icon组件', () => {
    const wrapper = shallowMount(Button,{
      propsData:{
        icon:'cc-up'
      }
    });
    const icon = findTestWrapper(wrapper,'icon').at(0);
    expect(icon).toBeTruthy();
  });

});

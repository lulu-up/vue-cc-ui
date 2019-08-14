import { shallowMount } from '@vue/test-utils';
import Loading from '../../src/components/Loading';
import { findTestWrapper } from '../utils/util';

describe('测试Loading组件', () => {
  it('1: 可以渲染出Loading组件', () => {
    const wrapper = shallowMount(Loading);
    // 渲染出的dom里面 有class为.cc-loading的dom
    expect(wrapper.classes()).toContain('cc-loading');
  });

  it('2: 传入title显示是否正确', () => {
    const wrapper = shallowMount(Loading, {
      propsData: {
        title: '正在努力ing'
      }
    });
    const title = findTestWrapper(wrapper, 'title').at(0);
    expect(title.text()).toBe('正在努力ing');
  });
});

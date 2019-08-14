import { shallowMount } from '@vue/test-utils';
import Pagination from '../../src/components/Pagination';
import { findTestWrapper } from '../utils/util';

describe('测试分页器组件', () => {
  it('1: 可以渲染出分页器组件', () => {
    const wrapper = shallowMount(Pagination,{
        propsData:{
            pageTotal:5,
            value:1
        }
    });
    expect(wrapper.classes()).toContain('cc-pagination');
  });

  it('2: 传入1000页是否显示1000页', () => {
    const wrapper = shallowMount(Pagination, {
        propsData:{
            pageTotal:1000,
            pageSize:1000,
            value:1
        }
    });
    const li = findTestWrapper(wrapper, 'item');
    expect(li.length).toBe(1000);
  });

  it('3: 点击第三页是否跳转到第三页', () => {
    const wrapper = shallowMount(Pagination, {
        propsData:{
            pageTotal:10,
            pageSize:10,
            value:1
        }
    });
    wrapper.vm.handlClick(3)
    // 发送事件
    expect(wrapper.emitted().input).toBeTruthy();
    // 发送事件的参数, 注意,是数组的形式
    expect(wrapper.emitted().input[0]).toEqual([3])
  });
});
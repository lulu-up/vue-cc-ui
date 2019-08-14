import { shallowMount } from '@vue/test-utils';
import Input from '../../src/components/Input';
import { findTestWrapper } from '../utils/util';


describe('测试Input组件', () => {

  it('1: 可以渲染出Input组件', () => {
    const wrapper = shallowMount(Input);
    expect(wrapper.contains('input')).toBe(true);
  });

  it('2: 输入value与显示的内容相同, 并且修改联动', () => {
    const wrapper = shallowMount(Input,{
        propsData:{
            value:'内容1'
        }
    });
    const input = findTestWrapper(wrapper,'input').at(0);
    expect(input.element.value).toBe('内容1')
    // 改变也随之改变
    wrapper.setProps({ value: '内容2' })
    expect(input.element.value).toBe('内容2')
  });

  it('3: 清除内容按钮有效', () => {
    const wrapper = shallowMount(Input,{
        propsData:{
            value:'内容1',
            clear:true
        }
    });
    // hover 时候才会出现!!
    wrapper.setData({
        hovering:true
    })
    const clear = findTestWrapper(wrapper,'clear').at(0);
    expect(clear).toBeTruthy();

    clear.trigger('click');

    expect(wrapper.emitted().input).toBeTruthy();
  });

  it('4: 传入icon参数, 可以显示icon组件', () => {
    const wrapper = shallowMount(Input,{
      propsData:{
        icon:'cc-up'
      }
    });
    const icon = findTestWrapper(wrapper,'icon').at(0);
    expect(icon).toBeTruthy();
  });

  it('5: 切换type, 出现文本框', () => {
    const wrapper = shallowMount(Input,{
      propsData:{
        type:'textarea'
      }
    });
    const textarea = findTestWrapper(wrapper,'textarea').at(0);
    expect(textarea).toBeTruthy();
  });

});

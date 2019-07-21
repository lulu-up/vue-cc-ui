import { mount } from '@vue/test-utils';
import Toast from '@/components/Toast/main/toast.vue';

describe('toast组件的基本属性', () => {
  it('显示关闭按钮', () => {
    const wrapper = mount(Toast, {
      propsData: {
        type:'success',
        showButton: true,
        message: '随意的信息'
      }
    });
    expect(wrapper.vm.$el.style.zIndex).toBe('10');
    expect(wrapper.vm.$el.classList.contains('cc-toast--success')).toBe(true);
    expect(wrapper.vm.$el.children['0'].classList.contains('cc-toast__closeButton')).toBe(true);
  });

  it('不显示关闭按钮', () => {
    const wrapper = mount(Toast, {
      zIndex: 100,
      propsData: {
        showButton: false,
        message: '随意的信息'
      }
    });
    expect(wrapper.vm.$el.children.length).toBe(0);
    expect(wrapper.vm.$el.style.zIndex).toBe('100');
  });
});

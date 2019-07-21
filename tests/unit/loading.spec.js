import { shallowMount } from '@vue/test-utils';
import Loading from '@/components/Loading/main/loading.vue';

describe('加载组件', () => {
  it('加载组件初始化', () => {
    const wrapper = shallowMount(Loading, {
      propsData: {
          title:'测试文字'
      }
    });
    let dom = wrapper.vm.$el;
    expect(dom.classList.contains('cc-loading')).toBe(true);
    expect(dom.children[1].children[1].innerHTML).toBe('测试文字');
    expect(wrapper.findAll('section')).toHaveLength(1)
  });
});


import { shallowMount } from '@vue/test-utils';
import Toast from '@/components/Icon/main/icon.vue';

describe('icon组件', () => {
  it('icon的传参显示', () => {
    const wrapper = shallowMount(Toast, {
      propsData: {
        name:'cc-up'
      }
    });
    expect(wrapper.vm.$el.childNodes["0"].classList.contains('cc-icon-cc-up')).toEqual(true)
  });
});

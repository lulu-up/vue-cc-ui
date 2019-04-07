import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button/main/button.vue'

describe('按钮组件的基本属性', () => {
  it('按钮的传参显示', () => {
    const wrapper = shallowMount(Button, {
      propsData: { 
        left:true,
        type:'success'
       }
    })
    expect(wrapper.contains('button')).toBe(true)
    expect(wrapper.vm.$el.classList.contains('is-left')).toBe(true)
    expect(wrapper.vm.$el.classList.contains('cc-button--success')).toBe(true)
  })
})

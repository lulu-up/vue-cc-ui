<!-- 与element结构不同 -->
<template>
  <div class="cc-popover"
       @click.stop="handlClick">
       <!-- 为了对抗overfllow:hideen, 要自己去算位置 -->
    <transition name='fade'>
      <div v-if="init"
           v-show='show'
           @click.stop='handlPopover'
           class="cc-popover__content">
        <slot name="content">

        </slot>
      </div>
    </transition>
    <!-- 他被父级包裹, 所以他的距离就是父级的距离 -->
    <slot />
  </div>
</template>

<script>
export default {
  name: "ccPopover",
  props: {},
  data() {
    return {
      init: false,
      show: false
    };
  },
  methods: {
    handlClick() {
      this.init = true;
      this.show = !this.show;
          // 不要监听body, 因为可能height不是100%;
          // 这个document也可以有用户指定
          // 放入的是同名函数, 没问题的
      this.show && document.addEventListener('click',this.close);
    },
    close(){
        console.log('1')
      this.show = false;
      document.removeEventListener('click',this.close)
    },
    handlPopover(){
        this.$emit('handlPopover')
    }
  },
  created() {},
  mounted() {},
  computed: {}
};
</script>
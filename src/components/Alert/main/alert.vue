<template>
  <div class="cc-alert"
       :style='{zIndex}'
       @click="handlerClick($event)">
    <transition name='cc-alert-fade'>
      <div class="cc-alert__context"
           v-show="visible">
        <header>
          <span>{{title}}</span>
          <cc-icon v-if="showClose"
                   name='cc-close'
                   class="cc-alert__icon"
                   @click.native="close"/>
        </header>
        <article> <slot /> </article>
        <footer>
          <cc-button v-if="showCancel"
                     @click="cancel">{{cancelButtonText}}</cc-button>
          <cc-button @click="confirm">{{confirmButtonText}}</cc-button>
        </footer>
      </div>
    </transition>
  </div>
</template>

<script>
import ccButton from "@/components/Button/main/button.vue";
export default {
  components: { ccButton },
  name: "ccAlert",
  props: {
    zIndex: {
      type: Number,
      default: 5
    },
    title: {
      type: [String, Number],
      default: ""
    },
    showClose: {
      type: Boolean,
      default: true
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    closeOnClickModal: {
      type: Boolean,
      default: false
    },
    testConfirm: {
      // 验证函数, 可以决定是否关闭当前的弹出框, return true 就是正常关闭, 否则不关闭
      type: Function
    },
    testCancel: {
      type: Function
    },
    confirmButtonText: {
      type: String,
      default: "确认"
    },
    cancelButtonText: {
      type: String,
      default: "取消"
    }
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    // 点击蒙层, 是否关闭弹框.
    handlerClick(e) {
      if ( e.target.className === "cc-alert" ) {
        this.closeOnClickModal && this.cancel();
      }
    },
    // 关闭与销毁
    close() {
      this.visible = false;
      setTimeout(() => {
        this.$el.remove();
        this.$destroy();
      }, 300);
    },
    // 确认
    confirm() {
      this.testConfirm 
          ? this.testConfirm() && this.close() 
          : this.close();
    },
    // 取消
    cancel() {
      this.testCancel 
          ? this.testCancel() && this.close() 
          : this.close();
    }
  }
};
</script>

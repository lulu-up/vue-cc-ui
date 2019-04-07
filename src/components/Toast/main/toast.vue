<template>
  <transition name="cc-toast-fade"
              @after-leave="deleteEl">
    <div class="cc-toast"
         :class="[
         toastType
         ,{
          'cc-toast--big':showButton
         }]"
         :style="'zIndex:'+zIndex"
         @mousemove="clearTimer"
         @mouseleave="initAutoClose"
         v-show="visible">
      <slot />
      <i class="cc-toast__closeButton"
         @click="deleteEl"
         v-if="showButton">
        <ccIcon name='cc-close'/>
      </i>
    </div>
  </transition>
</template>

<script>
import ccIcon from "@/components/Icon/main/icon.vue";
export default {
  name: "toast",
  components: { ccIcon },
  props: {
    type: {
      type: String,
      default: "nomal"
    },
    autoClose: {
      // 是否自动关闭
      type: Boolean,
      default: true
    },
    closeTime: {
      // 关闭的延时
      type: Number,
      default: 2000
    },
    showButton: {
      // 是否要关闭的x
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      timer: "",
      visible: false
    };
  },
  computed: {
    toastType() {
      let ary = ["nomal", "success", "warning", "danger"];
      if (ary.includes(this.type)) {
        return "cc-toast--" + this.type;
      }
      return "cc-toast--nomal";
    }
  },
  methods: {
    deleteEl() {
      this.visible = false;
      setTimeout(() => {
        this.$el.remove();
        this.$destroy();
      }, 300);
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
    initAutoClose() {
      if (this.autoClose && Math.abs(this.closeTime) > 0) {
        this.timer = setTimeout(() => {
          this.deleteEl();
        }, Math.abs(this.closeTime));
      }
    },
    keydown(e) {
      if (e.keyCode === 27) {
        this.deleteEl();
      }
    }
  },
  mounted() {
    this.initAutoClose();
    document.addEventListener("keydown", this.keydown);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.keydown);
  }
};
</script>
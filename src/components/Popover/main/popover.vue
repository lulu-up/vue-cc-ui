<template>
  <div class="cc-popover"
       ref='popover'>
    <!-- 为了对抗overfllow:hideen, 要自己去算位置 -->
    <!-- 不可以使用stop 会阻止用户的操作 -->
    <transition name='fade'>
      <div v-if="init"
           ref='content'
           v-show='show'
           class="cc-popover__content"
           :class="options.direction"
           :style="{
               top:top+'px',
               left:left+'px'
           }">
        <div class="cc-popover__box">
          <slot name="content"> 请输入内容</slot>
        </div>
      </div>
    </transition>
    <slot />
  </div>
</template>

<script>
import { on, off } from "@/assets/js/utils";
import { getPopoverPosition } from "@/assets/js/vue-popper";
export default {
  name: "ccPopover",
  props: {
    // 事件类型用户自己传
    trigger: {
      type: String,
      default: "hover",
      validator: value => ["click", "hover"].indexOf(value) > -1
    },
    placement: {
      type: String,
      default: "right-middle",
      validator(value) {
        let dator = /^(top|bottom|left|right)(-start|-end|-middle)?$/g.test(
          value
        );
        return dator;
      }
    }
  },
  data() {
    return {
      time: "",
      top: 0,
      left: 0,
      init: false,
      show: false,
      options: {}
    };
  },
  methods: {
    handlClick() {
      // 为了兼容v-if
      // 为了兼容滚动消除
      this.init = true;
      // console.log(this.$refs.content);
      if (this.$refs.content && this.$refs.content.style.display === "none") {
        // 有bug, 必须这样强制写
        this.$refs.content.style.display = "block";
        this.show = true;
      } else {
        this.show = !this.show;
      }
      // 不要监听body, 因为可能height不是100%;
      // 这个document也可以有用户指定
      // 放入的是同名函数, 没问题的
      this.show && document.addEventListener("click", this.close);
    },
    close(e) {
      if (this.isPopover(e)) {
        this.show = false;
        document.removeEventListener("click", this.close);
      }
    },
    isPopover(e) {
      let dom = e.target,
        popover = this.$refs.popover,
        content = this.$refs.content;
      return !(popover.contains(dom) || content.contains(dom));
    },
    // 移入
    handleMouseEnter() {
      clearTimeout(this.time);
      this.init = true;
      this.show = true;
    },
    // 移出
    handleMouseLeave() {
      clearTimeout(this.time);
      this.time = setTimeout(() => {
        this.show = false;
      }, 200);
    }
  },
  watch: {
    init() {
      this.$nextTick(() => {
        let trigger = this.trigger,
          content = this.$refs.content;
        document.body.appendChild(content);
        if (trigger === "hover") {
          on(content, "mouseenter", this.handleMouseEnter);
          on(content, "mouseleave", this.handleMouseLeave);
        }
      });
    },
    show() {
      if (this.show) {
        this.$nextTick(() => {
          let { popover, content } = this.$refs,
            { left, top, options } = getPopoverPosition(
              popover,
              content,
              this.placement
            );
          this.left = left;
          this.top = top;
          this.options = options;
        });
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      let trigger = this.trigger,
        popover = this.$refs.popover;
      if (trigger === "hover") {
        on(popover, "mouseenter", this.handleMouseEnter);
        on(popover, "mouseleave", this.handleMouseLeave);
      } else if (trigger === "click") {
        on(popover, "click", this.handlClick);
      }
    });
  },
  beforeDestroy() {
    let { popover, content } = this.$refs;
    off(content, "mouseleave", this.handleMouseLeave);
    off(popover, "mouseleave", this.handleMouseLeave);
    off(content, "mouseenter", this.handleMouseEnter);
    off(popover, "mouseenter", this.handleMouseEnter);
    off(document, "click", this.close);
    if (document.body.contains(content)) {
      document.body.removeChild(content);
    }
  }
};
</script>

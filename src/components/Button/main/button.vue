<template>
  <!-- 价格光影吧 -->
  <button class="cc-button"
          @touchstart='touchstart($event)'
    :class="[ 
      sizeType,
      type ? 'cc-button--' + type : '',
    {
      'is-bling':bling,
      'is-left':left,
      'is-right':right,
      'is-centre':centre,
      'is-disabled':disabled,
    }]"
          :type="nativeType"
          @click="click">
    <!-- 图标按钮 -->
    <ccIcon v-if="icon"
            :name='icon'
            :color="realyIconColor"
            style="margin-right:2px" />
    <slot />
  </button>
</template>

<script>
import prevent from "@/assets/js/prevent.js";
import ccIcon from "@/components/Icon/main/icon.vue";
export default {
  name: "ccButton",
  components: { ccIcon }, // 不用就删
  props: {
    icon: String, // 图标
    type: String, // 类型
    bling:Boolean, // 条纹
    shake: Number, // 防抖的秒数
    left: Boolean, // 方向
    right: Boolean,
    centre: Boolean,
    throttle: Number, // 节流, 请输入秒数
    disabled: Boolean, // 禁用的时候, icon也要变色
    iconColor: String, // 图标颜色
    nativeType: String, // 原生的类型还是要给的
    clickId: [String, Number], // 相同id的组件走一套计时.
    size: {
      typr: String,
      default: "normal"
    }
  },
  methods: {
    click() {
      let clickType, num;
      if (this.throttle) {
        clickType = 1;
        num = this.throttle;
      } else if (this.shake && this.shake > 0) {
        clickType = 2;
        num = this.shake;
      } else if (this.shake && this.shake < 0) {
        clickType = 3;
        num = this.shake * -1;
      }
      prevent(
        this.clickId,
        () => {
          this.$emit("click");
        },
        num,
        clickType
      );
    },
    touchstart(event) {
      this.$emit("touchstart", event);
    }
  },
  computed: {
    sizeType() {
      let sizeList = ["big", "small"];
      if (sizeList.includes(this.size)) return "size-" + this.size;
      return "size-normal";
    },
    realyIconColor() {
      if (this.disabled) return "#bbbbbb";
      else return this.iconColor;
    }
  }
};
</script>

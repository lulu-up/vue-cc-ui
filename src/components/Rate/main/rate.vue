<!-- element 没有dom上计算的操作, 只有判断的 -->
<template>
  <div class='cc-rate'
       :style="{ 
         cursor: disabled ? 'auto' : 'pointer', // 不让修改的状态也就没必要出现小手了 
       }">
    <i ref='box'
       class='cc-rate__box'
       @click="selectValue()"
       @mouseleave='handelMouseleave()'
       @mousemove='handelMousemove($event)'>
      <span class='cc-rate__dark'>
        <cc-icon v-for='item in num'
                 :key='item'
                 :size="`${size}px`"
                 :name='iconType.name'
                 :color='iconType.darkColor'
                 :class="{ 'cc-rate--big':item < bigIndex}" />
      </span>
      <span class='cc-rate__bright'
            :style="{ width }">
        <cc-icon v-for='item in num'
                 :key='item'
                 :name='iconType.name'
                 :size="`${size}px`"
                 :color='iconType.brightColor'
                 :class="{ 'cc-rate--big':item < bigIndex }" />
      </span>
    </i>
    <span v-if='score'
          class="cc-rate__score">
      <slot name='score'> {{value | fix}} </slot>
    </span>
  </div>
</template>

<script>
import ccIcon from "@/components/Icon/main/icon.vue";
import { getHTMLScroll, myToFixed } from "@/assets/js/utils";
export default {
  name: "ccRate",
  components: { ccIcon },
  props: {
    big: Boolean, // 变大效果
    one: Boolean, // 只让完整的每一颗
    type: String, // 自定义图标
    score: Boolean, // 是否显示分值
    darkColor: String, // 自定义暗色
    disabled: Boolean, // 为true的时候, 不允许修改
    brightColor: String, // 自定义亮色
    total: {
      // 总共多少分
      type: Number,
      default: 5
    },
    num: {
      // 展示几颗星
      type: Number,
      default: 5
    },
    size: {
      // 星的大小
      type: Number,
      default: 20
    },
    value: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      oldVal: 0,
      bigIndex: 0
    };
  },
  methods: {
    // 计算手指的位置
    // 点了有效还是移动就有效?
    handelMousemove(e) {
      // 实时判断的原因是, 可能用户现在禁止改动, 一会又需要改动了!!
      if (!this.disabled) {
        let node = this.$refs.box;
        let value =
          ((e.pageX - getHTMLScroll(node).left) / (this.size * this.num)) *
          this.numTotal;
        value = this.boundary(value);
        // 前面的变大效果
        // 每颗必须完整 一颗的距离

        let i, oneNum;
        if (this.big || this.one) {
          i = 0;
          oneNum = this.numTotal / this.num;
          while (oneNum * i <= value) {
            i++;
          }
          if (this.big) {
            this.bigIndex = i;
          }
        }
        if (this.one) {  // 防止溢出
          value = Math.min(oneNum * i, this.numTotal);
        }
        this.$emit("input", value);
      }
    },
    // 离开区域
    handelMouseleave() {
      this.bigIndex = 0;
      if (!this.disabled) {
        this.$emit("input", this.oldVal);
      }
    },
    // 选择到某个值
    selectValue() {
      this.oldVal = this.value;
      this.$emit("change", myToFixed(this.oldVal));
    },
    // 判断是否超出边界
    boundary(value) {
      if (value <= 0) value = 0;
      if (value >= this.numTotal) value = this.numTotal;
      return value;
    }
  },
  filters: {
    fix: myToFixed
  },
  computed: {
    // icon样式
    iconType() {
      let { type, darkColor, brightColor } = this,
        result = {
          name: type || "cc-stars2",
          brightColor: brightColor || "rgb(247, 186, 42)",
          darkColor: darkColor || "#bbbbbb"
        };
      return result;
    },
    numTotal() {
      // 传入一个有效的总分数吧
      return this.total <= 0 ? this.num : this.total;
    },
    // 移动的长度
    width() {
      let proportion = this.boundary(this.value) / this.numTotal;
      return `${proportion * (this.size * this.num)}px`;
    }
  },
  mounted() {
    this.oldVal = this.value;
  }
};
</script>

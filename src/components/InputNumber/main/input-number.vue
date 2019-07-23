<!-- 1: 计数器的两边应该是用户自己决定的, 我无权干预 -->
<!-- 2: 有默认样式, 用户自己可以传自己想玩的一切东西-->
<!-- 3: placeholder没有必要, 因为肯定有初始值-->
<template>
  <div class="cc-input-number">
    <div class="cc-input-number__reduce"
         @click='reduce'>
      <slot name='left'>
        <cc-icon size='25px'
                 name='cc-reduce2'
                 :color='valueMin' />
      </slot>
    </div>
    <input ref="input"
           class="cc-input-number__input"
           type="number"
           @input="inputChange($event)">
    <div class="cc-input-number__add"
         @click="add">
      <slot name='right'>
        <cc-icon size='25px'
                 name='cc-add2'
                 :color="valueMax" />
      </slot>
    </div>
  </div>
</template>

<script>
import ccIcon from "@/components/Icon/main/icon.vue";
import { setTimeout, clearTimeout } from "timers";
export default {
  name: "ccInputNumber",
  component: { ccIcon },
  props: {
    max: { type: Number }, // 数字不传默认是undefined
    min: { type: Number },
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: [String, Number],
      required: true
    },
    precision: {
      type: Number,
      validator(value) {
        if (value < 1 || value === undefined) {
          return 1;
        } else {
          return parseInt(value);
        }
      }
    }
  },
  data() {
    return {
      time: "",
      oldVal:Infinity
    };
  },
  methods: {
    add() {
      let num = Number(this.value) + this.step;
      this.emitVal(num);
    },
    reduce() {
      let num = Number(this.value) - this.step;
      this.emitVal(num);
    },
    inputChange(e) {
      this.emitVal(Number(e.target.value));
    },
    emitVal(newVal) {
      let { max, min } = this;
      if (max !== undefined && newVal > max) newVal = max;
      if (min !== undefined && newVal < min) newVal = min;
      let ls = Number(newVal).toFixed(this.precision);
      if(ls === this.oldVal)return
      this.oldVal = ls 
      this.$emit("input", ls);
      this.$emit("change", ls);
      this.$refs.input.value = ls;
    }
  },
  computed: {
    valueMin() {
      if (this.value === this.min) return "#bbbbbb";
      return "";
    },
    valueMax() {
      if (this.value === this.max) return "#bbbbbb";
      return "";
    }
  },
  watch: {
    value: {
      handler() {
        // 为了解决, 多组件共同v-model采用的这个方法, 也算是另辟蹊径了
        let { value, time } = this;
        clearTimeout(time);
        time = setTimeout(() => {
          if (value !== undefined) this.emitVal(value);
        });
      },
      immediate: true
    }
  }
};
</script>

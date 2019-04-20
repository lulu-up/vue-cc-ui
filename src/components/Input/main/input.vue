<!--  -->
<template>
  <div class="cc-input"
       :class="{
           'cc-input__error':error,
           'cc-input__normal':!disabled&&!normal,
           'cc-input__abnormal':normal,
           'cc-input__disabled':disabled,
       }"
       :style="{
           'transform-origin':`${transformOrigin} 0`
       }"
       @mouseenter="hovering = true"
       @mouseleave="hovering = false">
    <template v-if="type !== 'textarea'">
      <nav v-if="leftIcon"
           class="cc-input__prefix is-left"
           @click="$emit('clickLeftIcon')">
        <ccIcon :name='leftIcon'
                :color='iconColor'
                :disabled='disabled' />
      </nav>
      <input type="text"
             class='cc-input__inner'
             :value="value"
             :disabled="disabled"
             :readonly="readonly"
             :autofocus="autofocus"
             :placeholder="placeholder"
             :class="{ 'cc-input--input__disabled':disabled }"
             @blur="blur($event.target.value)"
             @input="$emit('input',$event.target.value)"
             @focus="$emit('focus',$event.target.value);focus=true"
             @change="$emit('change',$event.target.value)">
      <nav v-if="icon&&!clear"
           class="cc-input__prefix is-right"
           @click="$emit('clickRightIcon')">
        <ccIcon :name="clear?'cc-close':icon"
                :color='iconColor'
                :disabled='disabled' />
        <slot />
      </nav>
      <nav v-if="showClear"
           class="cc-input__clear is-right"
           @click="clickClear">
        <ccIcon name="cc-close"
                :color='iconColor'
                :disabled='disabled' />
        <slot />
      </nav>
    </template>
    <textarea v-else
              ref="textarea"
              class='cc-input__inner'
              :value="value"
              :disabled="disabled"
              :readonly="readonly"
              :autofocus="autofocus"
              :placeholder="placeholder"
              @blur="$emit('blur',$event.target.value)"
              @input="$emit('input',$event.target.value)"
              @focus="$emit('focus',$event.target.value)"
              @change="$emit('change',$event.target.value)"
              :style="{
                  width:rows,
                  height:cols,
                  ...textareaCalcStyle}"
              :class="{ 
                  'cc-input--input__disabled':disabled,
                  'cc-input--input__autosize':autosize}" />
    </div>
</template>

<script>
import ccIcon from "@/components/Icon/main/icon.vue";
export default {
  components: { ccIcon },
  name: "ccInput",
  props: {
    rows: String,
    icon: String, // 默认是右侧
    cols: String,
    clear: Boolean,
    error: Boolean,
    normal: Boolean,
    leftIcon: String, // 左侧图标
    disabled: Boolean,
    readonly: Boolean,
    iconColor: String,
    autofocus: Boolean,
    value: [String, Number],
    autosize: [Boolean, Object], // 高度自适应
    placeholder: [String, Number],
    type: {
      type: String,
      default: "text"
    },
    status: {
      type: [String],
      default: "normal"
    },
    transformOrigin: {
      type: [String],
      default: "0% 0%"
    }
  },
  data() {
    return {
      focus: false, // 监听输入框的聚焦失焦
      hovering: false,
      textareaCalcStyle: {},
      CONTEXT_STYLE: [
        "width",
        "font-size",
        "box-sizing",
        "line-height",
        "padding-top",
        "font-family",
        "font-weight",
        "text-indent",
        "border-width",
        "padding-left",
        "padding-right",
        "letter-spacing",
        "padding-bottom",
        "text-rendering",
        "text-transform"
      ]
    };
  },
  methods: {
    clickClear() {
      this.$emit("input", "");
      this.$emit("change", "");
      this.$emit("clickRightIcon");
    },
    blur(value) {
      this.focus = false;
      this.$emit("blur", value);
    },
    resizeTextarea() {
      const { autosize, type } = this;
      if (type !== "textarea" || !autosize) return;
      const minRows = autosize.min;
      const maxRows = autosize.max;
      this.textareaCalcStyle = this.calcTextareaHeight(
        this.$refs.textarea,
        minRows,
        maxRows
      );
    },
    calculateNodeStyling(el) {
      window.hiddenTextarea.value = this.value;
      const style = window.getComputedStyle(el);
      const boxSizing = style.getPropertyValue("box-sizing");
      const paddingTop = style.getPropertyValue("padding-top");
      const paddingBottom = style.getPropertyValue("padding-bottom");
      const borderTopWidth = style.getPropertyValue("border-top-width");
      const borderBottomWidth = style.getPropertyValue("border-bottom-width");
      const contextStyle = this.CONTEXT_STYLE.map(
        name => `${name}:${style.getPropertyValue(name)}`
      ).join(";");
      window.hiddenTextarea.setAttribute(
        "style",
        `${contextStyle};${this.HIDDEN_STYLE}`
      );
      return [
        boxSizing,
        parseInt(paddingBottom) + parseInt(paddingTop),
        parseInt(borderBottomWidth) + parseInt(borderTopWidth)
      ];
    },
    calcTextareaHeight(el, min, max) {
      if (!window.hiddenTextarea) {
        window.hiddenTextarea = document.createElement("textarea");
        document.body.appendChild(window.hiddenTextarea);
      }
      let [boxSizing, paddingSize, borderSize] = this.calculateNodeStyling(el);
      let height = window.hiddenTextarea.scrollHeight;
      if (boxSizing == "border-box") {
        height = height + borderSize;
      } else {
        height = height - paddingSize;
      }
      window.hiddenTextarea.parentNode &&
        window.hiddenTextarea.parentNode.removeChild(window.hiddenTextarea);
      window.hiddenTextarea = null;

      if (min && height < min) height = min;
      else if (max && height > max) height = max;
      return { height: height + "px" };
    }
  },
  watch: {
    value() {
      this.$nextTick(this.resizeTextarea);
    }
  },
  computed: {
    showClear() {
      if (
        this.clear &&
        !this.disabled &&
        !this.readonly &&
        (this.hovering || this.focus)
      )
        return true;
      return false;
    }
  },
  mounted() {
    this.$nextTick(this.resizeTextarea);
  }
};
</script>
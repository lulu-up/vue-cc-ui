<template>
  <div 
    class='cc-icon'
    :style="{
    display: 'inline-flex',
    height: iconSize,
    width: iconSize,
    }">
    <svg :style="{fill:color}"
         :class="[
          'cc-icon-'+name,
          { 
            'icon-loading':~name.indexOf('load'),
            'is-disabled':disabled
          }
         ]">
      <use :xlink:href='`#icon-${name}`'></use>
    </svg>
  </div>
</template>
<script>
export default {
  name: "ccIcon",
  props: {
    color: String,
    disabled: Boolean,
    name: {
      type: String,
      required: true
    },
    size: {
      type: [Number, String],
      default: "1em"
    }
  },
  computed: {
    iconSize() {
      if (typeof this.size === "number") return this.size + "px";
      else return this.size;
    }
  }
};
</script>
<template>
  <!-- 我发现不加这个他们就不居中 -->
  <div style="display: inline-flex;">
    <svg :style="{fill:color}"
         :class="[
          'cc-icon-'+name,
          { 
            'icon-loading':~name.indexOf('load')
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
    name: {
      type: String,
      required: true
    },
    // 图标的颜色
    color: {
      type: String,
      default: "black"
    }
  }
};
</script>
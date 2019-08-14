<template>
  <div class="cc-loading"
       @click.stop="onClickLoading"
       :style="{
           'zIndex':boxZIndex,
           'position': position
        }">
    <div class="cc-loading__curtain"
         :style="{
             'opacity':opacity,
             'background-color':curtainColor
            }" />
    <section class="cc-loading__icon"
          :style="{
              'fontSize':iconSize+'px'
              }">
      <ccIcon :name='iconName'
              :color='iconColor' />
      <span :style="{
          'fontSize':textFontSize+'px',
          'color':textColor
          }"
          data-test='title'
          >{{title}}</span>
    </section>

  </div>
</template>

<script>
import ccIcon from "@/components/Icon/main/icon.vue";
export default {
  components: { ccIcon },
  name: "ccLoading",
  props: {
    position: {
      type: String,
      default: "fixed"
    },
    title: {
      type: String,
      default: "加载中 . . ."
    },
    textColor: {
      type: String,
      default: "#3F8BDB"
    },
    opacity: {
      type: Number,
      default: 0.8
    },
    iconName: {
      type: String,
      default: "cc-load1"
    },
    iconColor: {
      type: String,
      default: "#3F8BDB"
    },
    curtainColor: {
      type: String,
      default: "black"
    },
    boxZIndex: {
      type: Number,
      default: 100
    },
    textFontSize: {
      type: Number,
      default: 17
    },
    iconSize: {
      type: Number,
      default: 25
    }
  },
  methods: {
    onClickLoading() {
      this.$emit("click");
    }
  }
};
</script>
<template>
  <div v-show="showItem">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ccTabPane",
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String
    }
  },
  data() {
    return {
      showItem:false
    };
  }
};
</script>

<template>
  <div>
    请问\
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <hr>
    <cc-ske v-if="show1" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.show1 = false;
    }, 13000);
  }
};
</script>
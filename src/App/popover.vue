<!--  -->
<template>
  <div>
    <div class="wrap">
      <cc-popover>
        <template #content>
          是我内容
        </template>
        <cc-button>出现 弹框</cc-button>
      </cc-popover>
    </div>
  </div>
</template>

<script>
// import son from '@/components/son'; // 引组件吧少年
export default {
  // components: { son }, // 不用就删
  name: "",
  props: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
  computed: {}
};
</script>
<style scoped lang='scss'>
  .wrap{
      position: fixed;
      left: 200px;
      top: 200px
  }
</style>
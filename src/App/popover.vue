<!--  -->
<template>
  <div>
    <div class="wrap" v-scroll-clear-popover>
      <cc-popover >
           <!-- <cc-popover placement='right-end'> -->
        <template #content>
            <div class="c">
              容是我内容是我内容
            </div>
        </template>
        <cc-button>出现 弹框</cc-button>
      </cc-popover>
       <cc-popover trigger='click'>
           <!-- <cc-popover placement='right-end'> -->
        <template #content>
            <div class="cc">
              容是我内容是我内容
            </div>
        </template>
        <cc-button>出现 弹框</cc-button>
      </cc-popover>
      <div class="zhan"></div>
    </div>
    <div class="chunl"></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {
    //   setInterval(()=>{
    //      this.$clearPopover()
    //   },3000)
    
  },
  computed: {}
};
</script>
<style scoped lang='scss'>
  .wrap{
      position: absolute;
      left: 100px;
      top: 100px;
      width: 300px;
      overflow: auto;
      border: 1px solid black;
  }
  .c{
      height: 50px;
  }
  .zhan{
    width: 600px;
    height: 20px;
    background-color: orange
  }
  .chunl{
      height: 3000px;
      width: 3000px;
  }
</style>
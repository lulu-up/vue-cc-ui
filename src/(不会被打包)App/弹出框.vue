<!--  -->
<template>
  <div>
      <!-- 点击蒙层, 是否要关闭弹框!!! -->
    <cc-button @click="s">基本造型</cc-button>
    <cc-button @click="k">可以验证信息</cc-button>
  </div>
</template>

<script>
export default {
  methods: {
    s() {
      this.$ccAlert({
        message:
          "基本造型基本造型基本造型基本造型基本造型基本造型基本造型基本造型基本造型基本造型基本造型基本造型基本造型基本造型基本造型基本造型基本造型基本造型基本造型基本造型基本造型基本造型基本造型基本造型基本造型基本造型基本造型基本造型基本造",
        title: "标题当然要很响亮!",
        confirmButtonText: "我是提交",
        showCancel: false,
        showClose:false,
        closeOnClickModal:true
      });
    },
    k() {
      this.$ccAlert({
        title: "不让你关闭系列!",
        message: "随便写一点验证",
        testConfirm: () => {
          setTimeout(() => {
            this.$ccHiddenAlert();
          }, 2000);
          return false;
        },
        testCancel: function() {
          setTimeout(() => {
            this.$ccHiddenAlert();
          }, 2000);
          return false;
        }
      });
    }
  }
};
</script>
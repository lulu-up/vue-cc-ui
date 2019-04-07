<template>
  <div id="app">
    <cc-button>按钮正常</cc-button>
    <cc-button disabled>按钮禁用</cc-button>
    <hr>
    <cc-button left>左边按钮</cc-button>
    <cc-button centre>中间正常</cc-button>
    <cc-button centre>中间正常</cc-button>
    <cc-button right>右边正常</cc-button>
    <hr>
    <cc-button :throttle='1000'
               @click="jl">节流</cc-button>
    <cc-button :throttle='1000'
               @click="jl">节流</cc-button>
    <cc-button :shake='1000'
               @click="fd">前防抖</cc-button>
    <cc-button :shake='-1000'
               @click="fd">后防抖</cc-button>
    <hr>
    <cc-button size='big'>大按钮</cc-button>
    <cc-button size='normal'>中按钮</cc-button>
    <cc-button size='small'>小按钮</cc-button>
    <hr>
    <cc-button icon='cc-up'
               iconColor='red'>图标按钮</cc-button>
    <cc-button icon='cc-left'
               iconColor='red'>图标按钮</cc-button>
    <cc-button icon='cc-right'
               iconColor='red'>图标按钮</cc-button>
    <cc-button icon='cc-delete'
               iconColor='red'>图标按钮</cc-button>
    <cc-button icon='cc-edit'
               disabled>图标按钮</cc-button>
    <cc-button icon='cc-add'
               iconColor='red'>图标按钮</cc-button>
    <cc-button icon='cc-down'
               iconColor='red'>图标按钮</cc-button>
    <!-- 多属性的共同使用没有大碍 -->
    <cc-button icon='cc-search'
               disabled
               iconColor='red'>图标按钮</cc-button>
    <cc-button icon='cc-load1'
               iconColor='red'>图标按钮</cc-button>
    <cc-button icon='cc-load2'
               iconColor='red'>图标按钮</cc-button>
    <hr>
    <cc-button type='success'>type按钮</cc-button>
    <cc-button type='warning'>type按钮</cc-button>
    <cc-button type='danger'>type按钮</cc-button>
    <hr>
    字体图标:
    <ccIcon name='cc-up' />
    <ccIcon name='cc-left'
            color='green' />
    <ccIcon name='cc-right' />
    <ccIcon name='cc-delete' />
    <ccIcon name='cc-edit' />
    <ccIcon name='cc-add' />
    <ccIcon name='cc-down' />
    <ccIcon name='cc-search' />
    <ccIcon name='cc-load1' />
    <ccIcon name='cc-load2' />
    <hr>
    <cc-button type='success' @click="showToast('success')">弹出Taost</cc-button>
    <cc-button type='warning' @click="showToast('warning')">弹出Taost</cc-button>
    <cc-button type='danger' @click="showToast('danger')">弹出Taost</cc-button>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    jl() {
      console.log("节流");
    },
    fd() {
      console.log("防抖", this.$ccToast);
    },
    showToast(type) {
      this.$ccToast({
        type,
        autoClose: true,
        closeTime: 13000,
        showButton: true,
        zIndex:20,
        message: "我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息"
      });
    }
  },
  mounted() {
    this.$ccToast("我是传进来的值我是传进来的值");
  }
};
</script>
<style >
.cc-button {
  margin: 0 4px;
}
</style>
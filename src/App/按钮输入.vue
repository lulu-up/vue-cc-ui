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
    <cc-button bling>bling</cc-button>
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
    <ccIcon name='cc-load2' size='60px' />
    <ccIcon name='cc-load3' :size='70'/>
    <ccIcon name='cc-load4' />
    <ccIcon name='cc-danger' color='red' size='50px' />
    <ccIcon name='cc-go' />
    <ccIcon name='cc-ball' />
    <ccIcon name='cc-stars' />
    <ccIcon name='cc-phone1' />
    <ccIcon name='cc-phone2' />
    <hr>
    <cc-button type='success'
               @click="showToast('success')">弹出Taost</cc-button>
    <cc-button type='warning'
               @click="showToast('warning')">弹出Taost</cc-button>
    <cc-button type='danger'
               @click="showToast('danger')">弹出Taost</cc-button>
    <hr>
    <!-- <cc-loading/> -->
    <div class="loading__box">
      <cc-loading position='absolute'  />
    </div>
    <div class="loading__box">
      <cc-loading position='absolute' iconColor='red' iconName='cc-load3' curtainColor='yellow' title='我是加载标题~~'/>
    </div>
    <cc-button @click="jsLoading()">js方式触发</cc-button>
    <hr>

    <cc-input value='' 
              placeholder='111' 
              @clickRightIcon='clickIcon' 
              @clickLeftIcon='clickIcon' 
              icon='cc-search'
              leftIcon='cc-phone1'/>
    <br>
    <cc-input value='我是传值1111' v-model="bangding" clear/>
    <br>
    6666
    <cc-input value='我是传值1111' icon='cc-phone1' v-model="bangding" clear />
    <br>
    <cc-input value='我是传值2' disabled/>
    <br>
    <cc-input value='我是传值3' readonly />
    <br>
    <cc-input value='我是传值4' error icon='cc-danger' iconColor='red'>文字信息玩好玩</cc-input>
    <br>
    <hr>
    <p>自动获取焦点</p>
    <cc-input autofocus value='我是传值4' error icon='cc-danger' iconColor='red'>文s信息</cc-input>
    <br>
    <hr>
    <cc-input style="width:500px" value='我是传值4' error icon='cc-danger' iconColor='red'>好</cc-input>
    <br>
    <hr>
    <!-- 双向绑定必须显示一个value属性, 监控input方法 -->
     <cc-input v-model="bangding"/>
     <p>{{bangding}}</p> 
    <p>文本框</p>
    <cc-input type='textarea' cols='40px' rows='140px' v-model="bangding"/>
    <br>
    <cc-input type='textarea' v-model="bangding" disabled/>
    <br>
    <!-- normal 不放大 -->
    <cc-input normal cols='200px' rows='400px' type='textarea' v-model="bangding"/>
    <br>
    自适应高度
    <cc-input autosize type='textarea' v-model="bangding"/>
     <cc-input :autosize="{
       min:'200',
       max:'400'
     }" transformOrigin='30% 30%' type='textarea' v-model="bangding"/>
     <br><br><br><br><br><br><br>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      bangding:1
    }
  },
  methods: {
    clickIcon(){
      console.log('点击了输入框的图标')
    },
    jl() {
      console.log("节流");
    },
    fd() {
      console.log("防抖", this.$ccToast);
    },
    jsLoading() {
      this.$ccShowLoading();
      setTimeout(()=>{
      this.$ccHiddenLoading()
      },2000)
    },
    showToast(type) {
      this.$ccToast({
        type,
        autoClose: true,
        closeTime: 13000,
        showButton: true,
        zIndex: 20,
        message:
          "我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息"
      });
    }
  },
  mounted() {
    this.$ccToast("我是传进来的值我是传进来的值");
  }
};
</script>
<style >
body{
  background-color: #eee;
}
.cc-button {
  margin: 0 4px;
}
.loading__box {
  display: inline-block;
  height: 200px;
  width: 200px;
  position: relative;
}
</style>
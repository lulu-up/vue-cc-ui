<template>
  <div id="app">
    <hr>
     <ccIcon name='cc-water' />
    <p>labcc: 显示的名称</p>
    <p>name: 被选中的名称</p>
    <p>内容自不必说</p>
    <p>tab:{{activeName}}</p>
    <p>里面的内容:{{context}}</p>
    <button @click="oncontext">点击加一</button>
    <div class="box">
      <cc-tab v-model="activeName"
              @tab-click="handleClick">
        <cc-tab-pane label="用户管理"
                     icon='cc-danger'
                     name="first">
          <div class="red">
            <p>
              {{context}}
            </p>
          </div>
          <div>
            <p>
              用户管理2
            </p>
          </div>
        </cc-tab-pane>
        <cc-tab-pane label="配置管理"
                     name="second">
          <div class="blue">配置管理</div>
        </cc-tab-pane>
        <cc-tab-pane label="角色管理"
                     icon='cc-phone2'
                     name="third">角色管理</cc-tab-pane>
        <cc-tab-pane label="定时任务补偿"
                     name="fourth">定时任务补偿</cc-tab-pane>
      </cc-tab>
    </div>
    <br>
    <cc-tab v-model="activeName2"
            type="card">
      <cc-tab-pane label="11111号"
                   name="1">111</cc-tab-pane>
      <cc-tab-pane label="22222号"
                   name="2">222</cc-tab-pane>
      <cc-tab-pane label="33333号"
                   name="3">333</cc-tab-pane>
      <cc-tab-pane label="44444号"
                   name="4">444</cc-tab-pane>
    </cc-tab>

    <cc-tab v-model="activeName3"
            type="card">
      <cc-tab-pane label="11111号"
                   name="1">111</cc-tab-pane>
    </cc-tab>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      context: "开心",
      activeName: "second",
      activeName2: "1",
      activeName3: "1"
    };
  },
  methods: {
    oncontext() {
        this.context+='c1'
    },
    handleClick(value) {
      console.log(value);
    }
  }
};
</script>
<style >
.red {
  border: 1px solid red;
  height: 300px;
  width: 700px;
}
.blue {
  border: 1px solid blue;
  height: 300px;
  width: 400px;
}
.box {
  /* border: 1px solid; */
  width: 800px;
}
</style>
<!--  -->
<template>
  <div>
    <ul>
       <li>
         滑动
        <div class="huadong">
          <div class="son">
    <cc-rate v-model="val1" score />
          </div>
        </div>
       
      </li>
      <li>
        <p>禁选:</p>
        <cc-rate v-model="val1"
                 disabled
                 score />
      </li>
      <li>
      <li>
        <p>禁选: 变大</p>
        <cc-rate v-model="val1"
                 disabled
                 score
                 :size='30' />
      </li>
       <li>
        <p>禁选: 表白专用</p>
        <cc-rate v-model="val7"
                 score
                  type='cc-like3'
                  brightColor='red'
                  darkColor='white'
                  :num='1'
                 :total='1'
                 :size='130' />
      </li>
      <li>
        <p>禁选: 心</p>
        <cc-rate v-model="val2"
                 disabled
                 score
                 :num='10'
                 :total='10'
                 type='cc-like3'
                 brightColor='red'
                 darkColor='#eee' />
      </li>
      <li>
      <cc-rate v-model="val6"
               disabled
               score
               :num='10'
               :total='10'
               type='cc-king'
               brightColor='red'
               darkColor='#eee' />
      </li>
       <li>
      <cc-rate v-model="val5"
               disabled
               score
               :num='10'
               type='cc-load4'
               brightColor='red'
               darkColor='#eee' />
      </li>
      <li>
        <p>12 vs 10</p>
      <cc-rate v-model="val4"
               disabled
               score
               :num='10'
               :total='12'
               type='cc-load4'
               brightColor='red'
               darkColor='#eee' />
      </li>

      <li>
        <p>可选:</p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <cc-rate v-model="val3"
                 big
                 score 
                 @change='change'/>
      </li>
      <li>
        <p>可选: one</p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <cc-rate v-model="val3"
                 one
                 score />
      </li>
      <li>
        <p>可选: one</p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <cc-rate value="4"
                 one
                 score />
      </li>
      <hr>
      <br>
    </ul>
  </div>
</template>

<script>
// import son from '@/components/son'; // 引组件吧少年
export default {
  // components: { son }, // 不用就删
  name: "",
  props: {},
  data() {
    return {
      val1: 2.4,
      val2: 4.7,
      val3: 3.4,
      val4: 11,
      val5:1,
      val6:10,
      val7:0.8
    };
  },
  methods: {
    change(value){
       console.log(value)
    }
  },
  created() {},
  mounted() {},
  computed: {}
};
</script>
<style scoped>
.huadong{
  width: 300px;
  border: 1px solid red;
  overflow: scroll;
  position: fixed;
  left: 200px;
}
.son{
  width: 600px;
  margin-left: 300px
}
</style>
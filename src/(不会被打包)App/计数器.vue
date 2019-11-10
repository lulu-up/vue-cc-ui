<template>
  <div>
    <ul>
       <li>1:
        <cc-input-number v-model="val1" :step='3' />
      </li>
      <li>2:
        <cc-input-number v-model="val2" @change='change1'/>
      </li>
      <li>3:
        <cc-input-number v-model="val2" />
      </li>
      <li>
        4:自定义
        <cc-input-number v-model="val4" :max='3'>
          <template #left>
             <div class='red'> 点我😁 </div>
          </template>
          <template #right>
             <div class='red1'> 😁点我 </div>
          </template>
        </cc-input-number>
      </li> 
      <li>5:
        <cc-input-number v-model="val5"  :precision='2.3'/>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  data() {
    return {
      val1:2,
      val2:0,
      val4:1,
      val5:1
    }; 
  },
  methods: {
    change1(val){
        console.log('收到了变化',val)
    }
  }
};
</script>
<style scoped lan='scss'>
  @keyframes jump{
    0% {
      transform: translateX(5px)
    }
    100% {
      transform: translateX(0px)
    }
  }
  @keyframes jump1{
   0% {
     transform: translateX(0px)
    }
    100% {
       transform: translateX(5px)
      
    }
  }
  .red{
    animation-name: jump;
    animation-duration: .6s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
   .red1{
    animation-name: jump1;
    animation-duration: .6s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

</style>
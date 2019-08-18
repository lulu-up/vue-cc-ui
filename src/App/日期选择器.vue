<!--  -->
<template>
  <div>
    {{showValues}}
      <cc-date-picker v-model="day" @gethandleValue="gethandleValue" />
  </div>
</template>

<script>
export default {
name:'',
props:{},
  data () {
    return {
      showValues:'',
        day:new Date()
    };
  },
methods:{
  gethandleValue(value){
    this.showValues = value
  }
},
created (){},
mounted (){},
computed:{}
}

</script>
<style scoped>
</style>
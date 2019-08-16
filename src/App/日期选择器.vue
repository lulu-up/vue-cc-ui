<!--  -->
<template>
  <div>
      <cc-date-picker v-model="day"/>
  </div>
</template>

<script>
export default {
name:'',
props:{},
  data () {
    return {
        day:new Date()
    };
  },
methods:{},
created (){},
mounted (){},
computed:{}
}

</script>
<style scoped>
</style>
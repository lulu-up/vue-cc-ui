<template>
  <div>
    {{showValues}}
    <cc-date-picker v-model="day"
                    @gethandleValue="gethandleValue" />
    <hr>
    <cc-date-picker @gethandleValue="gethandleValue" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showValues: "",
      day: new Date()
    };
  },
  methods: {
    gethandleValue(value) {
      this.showValues = value;
    }
  }
};
</script>
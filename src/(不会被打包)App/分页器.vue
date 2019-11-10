<template>
  <div>
    <cc-pagination v-model="page"
                   :pageTotal='10'>
    </cc-pagination>
    <hr>
    <cc-pagination v-model="page"
                   hideOne
                   :pageTotal='1' />

    <hr>
    <cc-pagination background
                   :pageSize='80'
                   :total='32'
                   v-model="page"
                   hideOne
                   :pageTotal='777'
                   @onChange="onChange" />
    <hr>
    <cc-pagination :pageSize='8'
                   :total='32'
                   v-model="page"
                   hideOne
                   :pageTotal='777'
                   @onChange="onChange" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 1
    };
  },
  methods: {
    onChange(page, change) {
      console.log(page, change);
    }
  }
};
</script>
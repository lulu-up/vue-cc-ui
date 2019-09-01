<!--  -->
<template>
  <div>
    <cc-tree :list="list"
             children='children'
             label='label'
             @nodeClick="handleNodeClick"
             show-checkbox
             :choiceLists='choiceLists' />
    <hr>
    <cc-tree :list="list"
             children='children'
             label='label'
             @nodeClick="handleNodeClick"
             keyName='id' />
    <hr>
    <p>{{choiceLists}}</p>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      choiceLists: [],
      list: [
        {
          label: "一级 1",
          id: 1,
          children: [
            {
              label: "二级 1-1",
              id: 2,
              children: [
                {
                  id: 3,
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          id: 4,
          children: [
            {
              id: 5,
              label: "二级 2-1",
              children: [
                {
                  id: 6,
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              id: 7,
              label: "二级 2-2",
              children: [
                {
                  id: 8,
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          id: 9,
          children: [
            {
              id: 10,
              label: "二级 3-1",
              children: [{ id: 11, label: "三级 3-1-1" }]
            },
            {
              id: 12,
              label: "二级 3-2",
              children: [
                {
                  id: 13,
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleNodeClick(node) {
      console.log(node.id);
    }
  },
  created() {},
  mounted() {},
  computed: {}
};
</script>
<style scoped>
</style>
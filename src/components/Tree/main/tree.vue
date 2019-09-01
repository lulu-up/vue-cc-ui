<!-- 树组件 -->
<template>
  <ul class="cc-tree">
    <li class="cc-tree__item"
        v-for="(child,index) in list"
        :key="child[label]">
      <div class="cc-tree__content"
           :style="{ 'padding-left': tabindex*20 + 'px'}"
           @click="handleClick(child,index)">
        <span class="cc-tree__icon"
              :style="`visibility: ${child[children]?'':'hidden'}`"
              :class="{'is-open':dragState[index].open}"></span>
        <input v-if="showCheckbox && !child[children]"
               type="checkbox"
               :checked="~choiceLists.indexOf(child[keyName])"
               @click.stop="clickCheckbox(child)" />
        <!-- 黄色为全删 , 蓝色为全选, 这个理念多有趣-->
        <i v-if="showCheckbox && child[children]"
           class="is-all__nocheck"
           @click.stop="addAll(child)"></i>
        <i v-if="showCheckbox && child[children]"
           class="is-all__check"
           @click.stop="deleteAll(child)"></i>
        <span>{{child[label]}}</span>
      </div>
      <cc-tree v-if="showChild(child, children)"
               v-show='dragState[index].open'
               @nodeClick="handleClick"
               :label='label'
               :keyName='keyName'
               :children='children'
               :tabindex='tabindex+1'
               :list='child[children]'
               :choiceLists='choiceLists'
               :show-checkbox='showCheckbox' />
    </li>
  </ul>
</template>

<script>
export default {
  name: "ccTree",
  props: {
    // 树的列表
    list: {
      type: [Array, Object],
      required: true
    },
    // 显示的字段名
    label: {
      type: String,
      default: "label"
    },
    // 子集的key值
    children: {
      type: String,
      default: "children"
    },
    // 第几层
    tabindex: {
      default: 0
    },
    // 哪个key是id
    keyName: {
      type: String,
      default: "id"
    },
    // 被选中的元素组合
    choiceLists: {
      type: Array,
      default: function() {
        return [];
      }
    },
    // 是否显示选择框
    showCheckbox: Boolean
  },
  data() {
    return {
      show: false,
      dragState: []
    };
  },
  methods: {
    // 是否展示子集标签们
    showChild(child, children) {
      return child[children] && child[children].length;
    },
    // 点击展开tree
    handleClick(child, index) {
      this.$emit("nodeClick", child);
      if (this.dragState[index]) {
        this.dragState[index].open = !this.dragState[index].open;
      }
    },
    // 单独点击选择框
    clickCheckbox(child) {
      let index = this.choiceLists.indexOf(child[this.keyName]);
      if (~index) {
        this.choiceLists.splice(index, 1);
      } else {
        this.myPush(child[this.keyName]);
      }
    },
    // 点击蓝色的点, 全选
    addAll(child) {
      let childs = child[this.children];
      if (childs && childs.length) {
        for (let item in childs) {
          this.addAll(childs[item]);
        }
      } else {
        this.myPush(child[this.keyName]);
      }
    },
    // 避免重复添加
    myPush(id) {
      let i;
      while ((i = ~this.choiceLists.indexOf(id))) {
        this.choiceLists.splice(~i, 1);
      }
      this.choiceLists.push(id);
    },
    // 点击黄色的点, 全删除
    deleteAll(child) {
      let childs = child[this.children];
      if (childs && childs.length) {
        for (let item in childs) {
          this.deleteAll(childs[item]);
        }
      } else {
        this.mySplice(child[this.keyName]);
      }
    },
    // 删除多余的
    mySplice(id) {
      let i;
      while ((i = ~this.choiceLists.indexOf(id))) {
        this.choiceLists.splice(~i, 1);
      }
    },
    // 初始化状态对象
    initState() {
      for (let i = 0; i < this.list.length; i++) {
        this.dragState.push({
          open: false
        });
      }
    }
  },
  created() {
    this.initState();
  }
};
</script>
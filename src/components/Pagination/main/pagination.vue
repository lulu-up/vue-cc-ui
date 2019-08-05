<!--  -->
<template>
  <div class='cc-pagination'
       v-if='!(hideOne && pageTotal === 1)'>
    <p v-if="total"
       class="total-number">总共 <span> {{total}}</span> 条</p>
    <button class="btn-prev"
            @click="handlClick(value-1)"
            :style="{'cursor': (value === 1)?'not-allowed':'pointer'}">
      <slot name='previous'> &lt; </slot>
    </button>
    <ul class='cc-pagination__box'
        :class="{'ground-box':background}">
      <li @click="handlClick(1)"
          :class="{'is-active':value === 1}">1</li>
      <li v-if='showLeft'
          @click="previous">··</li>
      <li v-for="item in showPages"
          :key='item'
          @click="handlClick(item)"
          :class="{'is-active':value === item}">{{item}}</li>
      <li v-if='showRight'
          @click="next">··</li>
      <li v-if="pageTotal !== 1"
          @click="handlClick(pageTotal)"
          :class="{'is-active':value === pageTotal}">{{pageTotal}}</li>
    </ul>
    <button class="btn-prev"
            @click="handlClick(value+1)"
            :style="{'cursor': (value === pageTotal)? 'not-allowed':'pointer'}">
      <slot name="next"> &gt; </slot>
    </button>
  </div>
</template>

<script>
import { inspect } from "@/assets/js/utils";
export default {
  name: "ccPagination",
  props: {
    total: Number, // 总共的页数
    hideOne: Boolean, // 只有一页的只是是否显示该分页器
    background: Boolean,
    // 属性命名可以学习一下
    pageSize: {
      // 显示最多几条, 最少要四个
      type: Number,
      default: 5,
      validator: inspect(5)
    },
    value: {
      // 选中页
      type: Number,
      required: true,
      validator: inspect(1)
    },
    pageTotal: {
      // 总数
      type: Number,
      default: 1,
      required: true,
      validator: inspect(1)
    }
  },
  methods: {
    // 左侧的...
    previous() {
      let page = this.showPages[0];
      this.handlClick(page - 1);
    },
    // 右侧的...
    next() {
      let len = this.showPages.length,
        page = this.showPages[len - 1] + 1;
      this.handlClick(page + 1);
    },
    handlClick(page) {
      if (page < 1) page = 1;
      if (page > this.pageTotal) {
        page = this.pageTotal;
      }
      let isNoChange = this.value === page;
      this.$emit("input", page);
      // 当前值, 与当前值相比是否有变化
      this.$emit("onChange", page, isNoChange);
    }
  },
  computed: {
    // 拿出要显示的按钮组合
    showPages() {
      let result = [],
        value = this.value,
        pageTotal = this.pageTotal,
        pageSize = this.pageSize - 2;
      // 防止用户输入错误引起的混乱, 比如用户的缓存, 要返给用户, 让用户去处理, 因为很可能v-model出现死循环
      if (value > pageTotal) {
        this.$emit("error", value, pageTotal);
        value = pageTotal;
      }
      if (value > 1 && value < pageTotal) result.push(value);
      for (let i = 1; i <= pageSize; i++) {
        if (value + i < pageTotal) {
          result.push(value + i);
          if (result.length >= pageSize) break;
        }
        if (value - i > 1) {
          result.unshift(value - i);
          if (result.length >= pageSize) break;
        }
      }
      return result;
    },
    showLeft() {
      let { showPages, pageTotal, pageSize } = this;
      // 左边不是2, 并且pageTotal超出规定数才显示, 不然1 ... ... 2 很尴尬
      return showPages[0] !== 2 && pageTotal > pageSize;
    },
    showRight() {
      let { showPages, pageTotal, pageSize } = this,
        len = showPages.length;
      return showPages[len - 1] !== pageTotal - 1 && pageTotal > pageSize;
    }
  }
};
</script>

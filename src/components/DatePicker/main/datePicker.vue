<!-- 1: 个人比较反对用户手动输入日期-->
<template>
  <div class="cc-date"
       ref='popover'
       v-clickoutside='hide'>
    <input readonly
           type="text"
           class="cc-date-input"
           :value='formatDare'
           @focus='isShowPanel = true'>
    <div v-show='isShowPanel'
         ref='content'
         class="cc-date-pannel"
         :style="{
               top:top+'px',
               left:left+'px'
           }">
      <div class="pannel-nav">
        <span @click="handlerChangeYear(-1)">＜</span>
        <span @click="handlerChangeMonth(-1)">←</span>
        <div class="pannel-selected">
          <span>{{formatDare.split('-')[0]}}年 </span>
          <span>{{formatDare.split('-')[1]}}月 </span>
          <span>{{formatDare.split('-')[2]}}日</span>
        </div>
        <span @click="handlerChangeMonth(1)">→</span>
        <span @click="handlerChangeYear(1)">＞</span>
      </div>
      <div class="pannel-content">
        <ul class="pannel-content__title">
          <li v-for="i in weeksList"
              :key="i">{{i}}</li>
        </ul>
        <ul class="pannel-content__item"
            v-for="i in 6"
            :key="i">
          <li v-for="j in 7"
              @click="handlerActiveDay(getVisibeDaysIndex(i,j,true))"
              :class="{
                 'active-date': getVisibeDaysIndex(i,j).activate,
                 'read-only':getVisibeDaysIndex(i,j).readOnly
              }"
              :key="j">{{getVisibeDaysIndex(i,j).day}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Clickoutside from "@/assets/js/Clickoutside";
import { getPopoverposition } from "@/assets/js/vue-popper";
import { getYMD, getDayCountOfMonth } from "@/assets/js/handelDate";

export default {
  name: "ccDatePicker",
  props: {
    value: {
      type: Date,
      default: () => new Date()
    }
  },
  data() {
    return {
      top: 0,
      left: 0,
      isShowPanel: false,
      weeksList: ["日", "一", "二", "三", "四", "五", "六"]
    };
  },
  // 不允许污染用户.
  directives: { Clickoutside },
  methods: {
    hide() {
      this.isShowPanel = false;
    },
    getVisibeDaysIndex(i, j, type) {
      i = i - 1;
      j = j - 1;
      let index = i * 7 + j;
      return type ? index : this.visibeDays[index];
    },
    // 处理点击事件
    handlerActiveDay(index) {
      let result = this.visibeDays[index],
        { year, month } = getYMD(this.value);
      if (!result.readOnly) {
        this.$emit("input", new Date(year, month, result.day));
      }
    },
    // 点击月份后退
    handlerChangeMonth(n) {
      let { year, month } = getYMD(this.value);
      month += n;
      if (month === 0) {
        month = 12;
        year += n;
      } else if (month === 13) {
        month = 1;
        year += n;
      }
      this.$emit("input", new Date(year, month, 1));
    },
    handlerChangeYear(n) {
      let { year, month } = getYMD(this.value);
      year += n;
      this.$emit("input", new Date(year, month, 1));
    },
    getDayList(dayOffset, dateCountOfMonth, dateCountOfLastMonth, result) {
      for (let i = 0; i < dayOffset; i++) {
        result.unshift({ readOnly: true, day: dateCountOfLastMonth - i });
      }
      for (let i = 1; i <= dateCountOfMonth; i++) {
        let obj = { day: i, activate: true };
        if (getYMD(this.value).day !== i) {
          obj.activate = false;
        }
        result.push(obj);
      }
      let len = 42 - result.length;
      for (let i = 1; i <= len; i++) {
        result.push({ readOnly: true, day: i });
      }
    },
    setPosion() {
      let { popover, content } = this.$refs;
      let { left, top } = getPopoverposition(
        popover,
        content,
        "bottom-start",
        3
      );
      this.top = top;
      this.left = left;
    }
  },
  watch: {
    isShowPanel(val) {
      if (val) {
        this.$nextTick(() => {
          this.setPosion();
        });
      }
    }
  },
  computed: {
    formatDare() {
      let { year, month, day } = getYMD(this.value),
        result = `${year}-${month + 1}-${day}`;
      this.$emit("gethandleValue", result);
      return result;
    },
    visibeDays() {
      let result = [],
        { year, month } = getYMD(this.value),
        dayOffset = new Date(year, month, 1).getDay(),
        dateCountOfMonth = getDayCountOfMonth(year, month),
        previousMonth = month - 1;
      if (previousMonth === 0) {
        year--;
        previousMonth = 12;
      }
      let dateCountOfLastMonth = getDayCountOfMonth(year, previousMonth);
      this.getDayList(
        dayOffset,
        dateCountOfMonth,
        dateCountOfLastMonth,
        result
      );
      return result;
    }
  }
};
</script>

<template>
  <div class="cc-tab">
    <ul class="cc-tab-nav"
        :class="{ 'is-card':type=='card' }"
        >
      <li v-for="item in navList"
          :key='item.name'
          :class="{ 'is-active':item.name === value }"
          @click="handClick($event,item.name)"
          >
        <ccIcon v-if="item.icon"
                :name='item.icon'
                :color="item.name === value?'#409EFF':''" 
                />
        <template>
          {{item.label}}
        </template>
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
import ccIcon from "@/components/Icon/main/icon.vue";
export default {
  name: "ccTab",
  components: { ccIcon },
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    type: {
      type: [String]
    }
  },
  data() {
    return {
      navList: []
    };
  },
  methods: {
    handClick(e, name) {
      this.$emit("input", name);
      this.$emit("tab-click", e);
      setTimeout(() => this.initSeleced(), 0);
    },
    initSeleced() {
      this.layer(item => (item.showItem = item.name == this.value));
    },
    initNav() {
      this.layer(item => {
        let result = {
          label: item.label,
          name: item.name,
          icon: item.icon
        };
        this.navList.push(result);
      });
    },
    layer(task) {
      this.$slots.default.map(item => task(item.componentInstance));
    }
  },
  mounted() {
    this.initNav();
    this.initSeleced();
  }
};
</script>
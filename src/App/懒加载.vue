<!--  -->
<template>
  <div>
    <img class="box"
         v-for="i in imgList"
         v-lazy='i'
         :key="i">

    <div v-if="show" class="wrap" v-lazy-box>
      <img class="box"
           v-for="i in imgList"
           v-lazy='i'
           :key="i">
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: "",
  props: {},
  data() {
    return {
    show:false,
      imgList: [
        `https://atimgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564584354800&di=2178d29049d4c8571507a14c022e850d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201511%2F14%2F20151114134933_iWVAX.jpeg`,

        `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564584354799&di=62c6115b16d443fd08aa3e58fa54cfbf&imgtype=0&src=http%3A%2F%2Fpic2.orsoon.com%2F2017%2F0605%2F20170605103452107.jpg`,

        `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564584354798&di=bd426f5ca8cad3a5d18f289ca9e1e170&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fc4fdab802e747a3b6cdef11f1238d8b3632209622a993-JVkO1y_fw658`,

         `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564584354798&di=1d9ac28e25807d0192b8bfa49271af77&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn13%2F544%2Fw569h775%2F20180817%2Fe90b-hhvciiw6090647.jpg`,
         `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564584354798&di=bc1bf97161300e0c5e17884fe423f0aa&imgtype=0&src=http%3A%2F%2F00.minipic.eastday.com%2F20161220%2F20161220213803_8cbc2c891993c2e0d3838955676cbe52_5.jpeg`,
         `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564584354797&di=d3eefbba05c0dc99183211bf8d3d2290&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201512%2F18%2F20151218221031_smWJy.thumb.700_0.jpeg`,
         `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564584354795&di=7534dc39309674fd9c7a9987016d6f50&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170814%2F015ceb4615d94584b1a3a8262e73f455.jpeg`
      ]
    };
  },
  methods: {},
  created() {},
  mounted() {
      setTimeout(() => {
          this.show = !this.show
      }, 2000);
  },
  computed: {}
};
</script>
<style scoped>
.box {
  display: block;
  border: 1px solid;
  height: 350px;
  width: 400px;
}
.wrap {
  height: 600px;
  width: 500px;
  border: 1px solid red;
  position: absolute;
  left: 500px;
  top: 0;
  overflow: scroll;
}
</style>

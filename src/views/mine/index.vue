<template>
  <el-container>
    <el-aside width="200px">
      <mine-navbar default-select="info"></mine-navbar>
    </el-aside>
    <el-main class="main">
      <transition name="el-fade-in" mode="out-in">
        <router-view />
      </transition>
    </el-main>
  </el-container>
</template>

<script>
import MineNavbar from './navbar.vue';
/*
this.$refs.listbox.wrap.addEventListener('scroll', () => {
  for(let element of tempArr2){
      // 获取比对点数据
      console.log(element,'element1111111')
      var boxTop = document.getElementsByClassName('list-box')[0].getBoundingClientRect().top
      var ulTop = element.getBoundingClientRect().top
      var ulBottomMinus = element.getBoundingClientRect().top + element.getBoundingClientRect().height - 26
      var ulBottom = element.getBoundingClientRect().top + element.getBoundingClientRect().height
      console.log(boxTop,'boxTop',ulTop,'ulTop',ulBottomMinus,'ulBottomMinus',ulBottom,'ulBottom')
      // 移除浮动类
      element.classList.remove('top-end')
      element.classList.remove('top')
      // 吸顶
      if (ulTop <= boxTop && boxTop <= ulBottom) {

          element.classList.add('top')
      }
      // 交接
      if (ulBottomMinus <= boxTop && boxTop <= ulBottom) {
          element.classList.add('top-end')
      }
      console.log(element.classList,'element.classList')
  }
})
*/


export default {
  name: 'Mine',

  components: {
    MineNavbar
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {}
};
</script>

<style scoped>
.main {
  padding: 0;
}
</style>

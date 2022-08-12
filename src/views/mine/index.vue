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
import MineNavbar from './mine-navbar.vue';

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

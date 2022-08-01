<template>
  <el-popover trigger="hover" @show="getBigger" @hide="getSmaller">
    <el-image
      ref="avatar"
      slot="reference"
      class="avatar"
      fit="fill"
      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    >
      <div slot="error" class="image-slot">
        <i class="el-icon-picture-outline"></i>
      </div>
    </el-image>
    <p>昵称</p>
    <p>关注数</p>
    <p>粉丝数</p>
    <p>积分</p>
  </el-popover>
</template>

<script>
export default {
  name: 'MineHeader',

  data() {
    return {};
  },

  mounted() {},

  methods: {
    getBigger() {
      this.$refs.avatar.$el.style.transform = 'scale(1.5)';
    },
    getSmaller() {
      this.$refs.avatar.$el.style.transform = 'scale(1)';
    }
  }
};
</script>

<style scoped>
.avatar {
  width: 50px;
  height: 50px;
  transition: transform 0.5s;
  -webkit-transition: transform 0.5s;
  -moz-transition: transform 0.5s;
}
</style>

<template>
  <div
    id="mineInfoContainer"
    v-infinite-scroll="load"
    :infinite-scroll-disabled="disabled"
    :infinite-scroll-distance="10"
  >
    <el-container>
      <el-aside>
        <el-avatar :size="200" :src="avatar" fit="contain"></el-avatar>
      </el-aside>
      <el-main>
        <el-descriptions
          class="descriptions"
          direction="vertical"
          :column="3"
          :colon="false"
          :labelStyle="{ 'padding-top': '40px', 'text-align': 'center' }"
          :contentStyle="{ 'text-align': 'center' }"
        >
          <span class="username" slot="title">{{ username }}</span>
          <el-descriptions-item label="关注数">
            {{ following }}
          </el-descriptions-item>
          <el-descriptions-item label="粉丝">
            {{ followers }}
          </el-descriptions-item>
          <el-descriptions-item label="积分">
            {{ points }}
          </el-descriptions-item>
        </el-descriptions>
      </el-main>
    </el-container>
    <p class="post-header"><strong>我的贴子</strong></p>
    <p v-for="i in n" :key="i" style="height: 50px">{{ i }}</p>
    <i v-if="loading" class="loading-icon el-icon-loading" />
    <p v-if="noMore"><center>没有更多了</center></p>
    <el-backtop target="#mineInfoContainer" :right="100" :bottom="100">
      <i class="el-icon-top back-top" />
    </el-backtop>
  </div>
</template>

<script>
export default {
  name: 'MineInfo',

  data() {
    return {
      /** @type {string} 头像 */
      avatar:
        'https://img0.baidu.com/it/u=1447421927,2196041264&fm=253&fmt=auto&app=138&f=JPEG?w=160&h=160',
      /** @type {string} 用户名 */
      username: '用户名',
      /** @type {number} 关注数 */
      following: 112,
      /** @type {number} 粉丝 */
      followers: 32,
      /** @type {number} 积分 */
      points: 454,
      loading: false,
      noMore: false,
      n: 0
    };
  },

  mounted() {},

  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.n += 10;
        this.loading = false;
        if (this.n >= 50) this.noMore = true;
      }, 1000);
    }
  },

  computed: {
    disabled() {
      return this.loading || this.noMore;
    }
  }
};
</script>

<style scoped>
#mineInfoContainer {
  max-height: calc(100vh);
  overflow: auto;
}
.username {
  font-size: 24px;
}
.descriptions {
  max-width: 300px;
}
.post-header {
  font-size: 20px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  background-color: white;
  padding: 20px 10px;
  margin: 0;
  position: sticky;
  top: 0;
}
.loading-icon {
  margin: 20px calc(50% - 16px);
  font-size: 32px;
  color: #409eff;
}
.back-top {
  font-size: 40px;
}
</style>

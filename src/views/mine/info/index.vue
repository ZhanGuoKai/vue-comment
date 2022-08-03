<template>
  <div
    v-infinite-scroll="load"
    :infinite-scroll-disabled="loading"
    :infinite-scroll-distance="10"
    style="max-height: calc(100vh); overflow: auto;"
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
          :labelStyle="{ 'padding-top': '40px' }"
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
    <!-- <p class="post-header">123</p>
    <el-card>
      <p class="post-header" slot="header">我的贴子</p>
      <div>
        <p v-for="i in n" :key="i" style="height: 50px">{{ i }}</p>
      </div>
    </el-card> -->
    <p class="post-header"><strong>我的贴子</strong></p>
    <p v-for="i in n" :key="i" style="height: 50px">{{ i }}</p>
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
      }, 1000);
    }
  }
};
</script>

<style scoped>
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
</style>

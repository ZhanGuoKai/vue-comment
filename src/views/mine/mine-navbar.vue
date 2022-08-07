<template>
  <el-menu
    mode="vertical"
    :default-active="defaultSelect"
    style="height: 100%;"
  >
    <template v-for="item in menuItems.children">
      <el-submenu v-if="item.children" :key="item.name" :index="item.name">
        <template slot="title">{{ item.meta.title }}</template>
        <router-link
          v-for="subItem in item.children"
          :to="`/mine/${item.path}/${subItem.path}`"
          :key="subItem.name"
        >
          <el-menu-item :index="subItem.name">
            {{ subItem.meta.title }}
          </el-menu-item>
        </router-link>
      </el-submenu>
      <router-link v-else :key="item.name" :to="`/mine/${item.path}`">
        <el-menu-item :index="item.name">
          {{ item.meta.title }}
        </el-menu-item>
      </router-link>
    </template>
  </el-menu>
</template>

<script>
import menuItems from '@/router/mine';

export default {
  name: 'MineNavbar',

  props: {
    defaultSelect: {
      type: String,
      default: 'info'
    }
  },

  data() {
    return {
      menuItems
    };
  },

  mounted() {},

  methods: {
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>

<script>
export default {
  name: 'LayoutDefault',
  data: () => ({
    selection: '',
  }),
  methods: {
    handleTabBarChange(val) {
      this.$router.replace({ path: `/${val === 'activ' ? '' : val}` }, () => {})
    },
  },
}
</script>

<template>
  <div class="min-h-screen">
    <router-view />
    <mt-tabbar v-model="selection" @input="handleTabBarChange">
      <mt-tab-item id="activ">
        <img slot="icon" src="@/assets/app-icon-5.png">
        预约
      </mt-tab-item>
      <mt-tab-item id="scan">
        <img slot="icon" src="@/assets/app-icon-4.png">
        扫一扫
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img slot="icon" src="@/assets/app-icon-1.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<style scoped>
</style>

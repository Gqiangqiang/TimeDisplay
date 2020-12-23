<template>
  <div id="app" style="background-color: #000;">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      appbgc: 'red',
      isRouterAlive: true,
    }
  },
  provide () {
    return {
      reload: this.reload
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  }
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
}
#app {
  overflow: hidden;
}
</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      appbgc: 'red'
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
</style>

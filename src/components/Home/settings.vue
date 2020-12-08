<template>
  <div class='settings'>
    <div class="title">
      设置
    </div>
    <div class="set-item">
      alkj
    </div>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  data() {
    return {
      timeset: {
        year: {
          color: '#0ff',
          fontSize: 10
        },
      }
    }
  }
}
</script>

<style scoped>
.settings {
  width: 100vw;
  height: 80vh;
  font-size: 10px;
  overflow-y: hidden;
  overflow-x: auto;
  box-shadow: -1px 0 5px 1px #fff;
  background-color: #ffffffef;
}
.title {
  width: 100vw;
  height: 5vh;
  font-size: 1vw;
  line-height: 5vh;
  border: 1px solid red;
}
</style>

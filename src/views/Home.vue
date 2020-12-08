<template>
  <div class="home" oncontextmenu="return false" :style="{'background-color': appbgc}">
    <!-- 时间显示区域 -->
    <div class="times" @click="closeView()">
      <div class="div-time year">
        {{time.year.time}}年
      </div>
      <div class="div-time month">
        {{time.month.time}}月
      </div>
      <div class="div-time day">
        {{time.day.time}}日
      </div>
      <div class="div-time hour">
        {{time.hour.time}}点
      </div>
      <div class="div-time minute">
        {{time.minute.time}}分
      </div>
      <div class="div-time second">
        {{time.second.time}}秒
      </div>
      <div class="div-time week">
        {{time.week.time}}
      </div>
    </div>
    <!-- 设置 -->
    <div class="set-view">
      <template v-if="fullf">
        <div class="view-item" @click="closeFull">退出全屏</div>
      </template>
      <template v-else>
        <div class="view-item" @click="full">全屏</div>
      </template>
      <template v-if="setting">
        <div class="view-item" @click="settings">关闭设置</div>
      </template>
      <template v-else>
        <div class="view-item" @click="settings">设置</div>
      </template>
    </div>
    <!-- <Set class="set" v-if="setting"></Set> -->
  </div>
</template>

<script>
import fd from 'freedate'
// import Set from '@/components/Home/settings'
export default {
  name: 'Home',
  components: {
    // Set
  },
  data() {
    return {
      // 时间
      time: {
        year: {
          time: '',
          color: '',
          fontsize: ''
        },
        month: {
          time: '',
          color: '',
          fontsize: ''
        },
        day: {
          time: '',
          color: '',
          fontsize: ''
        },
        hour: {
          time: '',
          color: '',
          fontsize: ''
        },
        minute: {
          time: '',
          color: '',
          fontsize: ''
        },
        second: {
          time: '',
          color: '',
          fontsize: ''
        },
        week: {
          time: '',
          color: '',
          fontsize: ''
        }
      },
      timeRule: '',
      // 天气
      weather: {},
      wi: 200,
      setting: false, //设置
      fullf: false,
      appbgc: '#000' //背景
    }
  },
  methods: {
    settings() {
      this.setting = !this.setting
      this.closeView()
    },
    // 关闭右键菜单
    closeView() {
      let doc = document.getElementsByClassName('set-view')[0]
      doc.style.display = 'none'
    },
    // 全屏
    full() {
      this.launchFullscreen(document.documentElement); // 整个网页
      this.fullf = true
      this.closeView()
    },
    // 关闭全屏
    closeFull() {
      // 退出全屏模式!
      this.fullf = false
      this.exitFullscreen();
      this.closeView()
    },
    // 全 判断各种浏览器，找到正确的方法
    launchFullscreen(element) {
      if(element.requestFullscreen) {
        element.requestFullscreen();
      } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if(element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    },
    // 退全 判断浏览器种类
    exitFullscreen() {
      if(document.exitFullscreen) {
        document.exitFullscreen();
      } else if(document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if(document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  },
  created() {
    // 阻止默认右键
    document.addEventListener('mousedown', res => {
      if(res.which !== 3) return
      let doc = document.getElementsByClassName('set-view')[0]
      console.log(res.pageX, res.pageY)
      doc.style.display = 'block'
      doc.style.top = `${res.pageY}px`
      doc.style.left = `${res.pageX}px`
    })
    document.addEventListener('keydown', res => {
      if(res.code === 'Escape') {
        this.fullf = false
        this.closeView()
      }
    })
    // 刷新时间
    setInterval(() => {
      this.time.year.time = fd.getDate('YY')
      this.time.month.time = fd.getDate('MM')
      this.time.day.time = fd.getDate('DD')
      this.time.hour.time = fd.getDate('hh')
      this.time.minute.time = fd.getDate('mm')
      this.time.week.time = fd.getDate('W')
      this.time.second.time = fd.getDate('ss')
    }, 10)
  },
  mounted() {
    // 启动全屏!
    
    // launchFullScreen(document.getElementById("videoElement")); // 某个页面元素
  }
}
</script>
<style scoped>
.home {
  height: 100vh;
  width: 100vw;
}
.times {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}
.div-time {
  color: #fff;
  font-size: 5vw;
}
.set-view {
  padding: 5px 0;
  display: none;
  position: fixed;
  color: black;
  width: 120px;
  background-color: #fff;
  border-radius: 5px;
  z-index: 9999;
}
.view-item {
  padding: 5px;
  font-size: 17px;
}
.view-item:hover {
  background-color: #dbdbdb;
}
.set {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
}
</style>
<template>
  <div class="home" oncontextmenu="return false" :style="{'background-color': appbgc}">
    <!-- 时间显示区域 -->
    <div class="times" @click="closeView()">
      <div @mousedown="mdown" id="year" class="div-time year">
        {{time.year.time}}年
      </div>
      <div @mousedown="mdown" id="month" class="div-time month">
        {{time.month.time}}月
      </div>
      <div @mousedown="mdown" id="day" class="div-time day">
        {{time.day.time}}日
      </div>
      <div @mousedown="mdown" id="hour" class="div-time hour">
        {{time.hour.time}}点
      </div>
      <div @mousedown="mdown" id="minute" class="div-time minute">
        {{time.minute.time}}分
      </div>
      <div @mousedown="mdown" id="second" class="div-time second">
        {{time.second.time}}秒
      </div>
      <div @mousedown="mdown" id="week" class="div-time week">
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
      <template v-if="defaultCss">
        <div class="view-item" @click="setDefault">随意拖动</div>
      </template>
      <template v-else>
        <div class="view-item" @click="setDefault">默认样式</div>
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
  inject: ['reload'],
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
      appbgc: '#000', //背景
      divs: ['year','month','day','hour','minute','second','week'],
      x: 0,
      y: 0,
      defaultCss: null
    }
  },
  methods: {
    // 设置为默认位置
    setDefault() {
      let defaultcss = !this.defaultCss
      this.defaultCss = defaultcss
      window.localStorage.setItem('defaultCss', JSON.stringify(defaultcss))
      this.reload()
    },
    // 移动
    mdown(e) {
      const div = e.target
      let X = e.clientX - div.offsetLeft
      let Y = e.clientY - div.offsetTop
      document.onmousemove = (e) => {
        let left = e.clientX - X
        let top = e.clientY - Y
        this.x = top
        this.y = left
        div.style.left = left + 'px'
        div.style.top = top + 'px'
      }
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
      }
    },
    // 点击打开/关闭设置
    settings() {
      this.setting = !this.setting
      this.closeView()
    },
    // 关闭右键菜单
    closeView() {
      let doc = document.getElementsByClassName('set-view')[0]
      doc.style.display = 'none'
    },
    // 点击全屏
    full() {
      this.launchFullscreen(document.documentElement); // 整个网页
      this.fullf = true
      this.closeView()
    },
    // 点击关闭全屏
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
    let d = window.localStorage.getItem('defaultCss')
    console.log(d)
    let defaultcss = d === 'false'? false:true
    if(defaultcss) {
      window.localStorage.setItem('defaultCss', JSON.stringify(defaultcss))
      this.defaultCss = defaultcss
    }
    // 阻止默认右键
    document.addEventListener('mousedown', res => {
      if(res.which !== 3) return
      let doc = document.getElementsByClassName('set-view')[0]
      // console.log(res.pageX, res.pageY)
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
    let s = window.localStorage.getItem('defaultCss') === "true" ? true : false
    console.log(s)
    if(!s) {
      const divs = this.divs
      divs.forEach(v => {
        document.getElementById(v).style.position = 'absolute'
      })
    }
  }
}
</script>
<style scoped>
.home {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
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
.div-time:hover {
  cursor: pointer;
}

/* 时间 */
.year {
  top: 40vh;
  left: 5vw;
}
.month {
  top: 40vh;
  left: 22vw;
}
.day {
  top: 40vh;
  left: 33vw;
}
.hour {
  top: 40vh;
  left: 45vw;
}
.minute {
  top: 40vh;
  left: 57vw;
}
.second {
  top: 40vh;
  left: 68vw;
}
.week {
  top: 40vh;
  left: 79vw;
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
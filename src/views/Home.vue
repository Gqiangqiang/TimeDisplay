<template>
  <div class="home" oncontextmenu="return false" :style="{'background-color': appbgc}">
    <!-- 时间显示区域 -->
    <div class="times" @click="closeView()">
      <div @mousedown="mdown" id="year" :style="{top: time.year.top, left: time.year.left}" class="div-time year">
        {{time.year.time + time.year.connector}}
      </div>
      <div @mousedown="mdown" id="month" :style="{top: time.month.top, left: time.month.left}" class="div-time month">
        {{time.month.time + time.month.connector}}
      </div>
      <div @mousedown="mdown" id="day" :style="{top: time.day.top, left: time.day.left}" class="div-time day">
        {{time.day.time + time.day.connector}}
      </div>
      <div @mousedown="mdown" id="hour" :style="{top: time.hour.top, left: time.hour.left}" class="div-time hour">
        {{time.hour.time + time.hour.connector}}
      </div>
      <div @mousedown="mdown" id="minute" :style="{top: time.minute.top, left: time.minute.left}" class="div-time minute">
        {{time.minute.time + time.minute.connector}}
      </div>
      <div @mousedown="mdown" id="second" :style="{top: time.second.top, left: time.second.left}" class="div-time second">
        {{time.second.time + time.second.connector}}
      </div>
      <div @mousedown="mdown" id="week" :style="{top: time.week.top, left: time.week.left}" class="div-time week">
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
      <!-- <template v-if="setting">
        <div class="view-item" @click="settings">关闭设置</div>
      </template>
      <template v-else>
        <div class="view-item" @click="settings">设置</div>
      </template> -->
      <template v-if="!defaultCss">
        <div class="view-item" @click="reset" style="color: red; font-weight: bold">重置位置</div>
      </template>
    </div>
    <Set class="set" v-if="setting" @click="closeView()"></Set>
  </div>
</template>

<script>
import fd from 'freedate'
import Set from '@/components/Home/settings'
import { launchFullscreen, exitFullscreen } from '../utils/screen'
import Storage from '../utils/estorage'
export default {
  inject: ['reload'],
  name: 'Home',
  components: {
    Set
  },
  data() {
    return {
      // 时间
      time: {
        year: {
          time: '',
          color: '',
          fontsize: '',
          connector: '年',
          top: '43vh',
          left: '5vw'
        },
        month: {
          time: '',
          color: '',
          fontsize: '',
          connector: '月',
          top: '43vh',
          left: '22vw'
        },
        day: {
          time: '',
          color: '',
          fontsize: '',
          connector: '日',
          top: '43vh',
          left: '33vw'
        },
        hour: {
          time: '',
          color: '',
          fontsize: '',
          connector: '点',
          top: '43vh',
          left: '45vw'
        },
        minute: {
          time: '',
          color: '',
          fontsize: '',
          connector: '分',
          top: '43vh',
          left: '57vw'
        },
        second: {
          time: '',
          color: '',
          fontsize: '',
          connector: '秒',
          top: '43vh',
          left: '68vw'
        },
        week: {
          time: '',
          color: '',
          fontsize: '',
          connector: '',
          top: '43vh',
          left: '79vw'
          // connector: ''
        }
      },
      timeRule: '',
      // 天气
      weather: {},
      setting: false, //设置
      fullf: false,
      appbgc: '#000', //背景
      divs: ['year','month','day','hour','minute','second','week'],
      x: 0,
      y: 0,
      defaultCss: null
    }
  },
  created() {
    this.defaultCss = Storage.getItem('defaultCss')
    this.fullf = Storage.getItem('fullf')
    this.divs.forEach(v => {
      this.time[v].left = Storage.getItem(`time_${v}_left`) ? Storage.getItem(`time_${v}_left`)+`px` : this.time[v].left
      this.time[v].top = Storage.getItem(`time_${v}_top`) ? Storage.getItem(`time_${v}_top`)+`px` : this.time[v].top
    })

    // 阻止默认右键
    document.addEventListener('mousedown', res => {
      if(res.which !== 3) return
      let doc = document.getElementsByClassName('set-view')[0]
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
    this.appW = document.body.clientWidth + 'px'
    this.appH = document.body.clientHeight + 'px'
    if(!Storage.getItem('defaultCss')) {
      const divs = this.divs
      divs.forEach(v => {
        document.getElementById(v).style.position = 'absolute'
      })
    }
  },
  methods: {
    // 设置为默认位置
    setDefault() {
      this.defaultCss = Storage.getItem('defaultCss')
      console.log("default::", this.defaultCss)
      Storage.setItem('defaultCss', !this.defaultCss)
      this.reload()
    },
    // 移动
    mdown(e) {
      const div = e.target, id = e.target.id
      let X = e.clientX - div.offsetLeft
      let Y = e.clientY - div.offsetTop
      document.onmousemove = (e) => {
        let left = e.clientX - X
        let top = e.clientY - Y
        this.x = top
        this.y = left
        div.style.left = left + 'px'
        div.style.top = top + 'px'
        Storage.setItem(`time_${id}_left`, left)
        Storage.setItem(`time_${id}_top`, top)
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
      document.getElementsByClassName('set-view')[0].style.display = 'none'
    },
    // 点击全屏
    full() {
      launchFullscreen(document.documentElement); // 整个网页
      this.fullf = true
      Storage.setItem('fullf', true)
      this.closeView()
    },
    // 点击关闭全屏
    closeFull() {
      exitFullscreen();
      this.fullf = false
      Storage.setItem('fullf', false)
      this.closeView()
    },
    // 重置位置
    reset() {
      this.divs.forEach(v => {
        Storage.removeItem(`time_${v}_left`)
        Storage.removeItem(`time_${v}_top`)
      })
      this.reload()
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
  font-size: 4.8vw;
}
.div-time:hover {
  cursor: pointer;
}

/* 时间 */
.year, .month, .day, .hour, .minute, .second, .week {
  margin: 5.5px;
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
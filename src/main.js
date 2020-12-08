import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { ColorPicker, InputNumber, Select, Radio} from 'element-ui'

Vue.use(ColorPicker)
Vue.use(Select)
Vue.use(Radio)
Vue.use(InputNumber)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

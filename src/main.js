import Vue from 'vue'
import './style.css'
import 'mint-ui/lib/style.css'
// https://mint-ui.github.io/docs/#/zh-cn2
import Mint from 'mint-ui'
import App from './App.vue'
import 'uno.css'
import 'virtual:unocss-devtools'
import router from '@/router'

Vue.use(Mint)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

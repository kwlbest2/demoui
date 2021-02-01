/*
 * @Author: your name
 * @Date: 2021-02-01 15:34:54
 * @LastEditTime: 2021-02-01 15:44:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demoui\examples\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import demoUI from '../packages'
Vue.config.productionTip = false
Vue.use(demoUI)
new Vue({
  render: h => h(App),
}).$mount('#app')

/*
 * @Author: your name
 * @Date: 2021-02-01 15:40:22
 * @LastEditTime: 2021-02-01 15:49:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demoui\packages\index.js
 */
import Button from './button'
import Dialog from './dialog'
import Input from './input'
import Radio from './radio'
import RadioGroup from './radioGroup'
import Switch from './switch'

const components = [
  Button,
  Dialog,
  Input,
  Radio,
  RadioGroup,
  Switch
]
const install = function(Vue){
  components.forEach((item) => {
    Vue.component(item.name, item)
  })
}

if(typeof window !== 'undefined' && window.Vue){
  install(window.Vue)
}
 export default {
  install
 }

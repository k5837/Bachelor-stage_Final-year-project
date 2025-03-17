import Vue from 'vue'
import App from './App.vue'
import { Button, Select, Radio,RadioGroup, Container, Aside, Header, Main, Menu, MenuItem, 
	MenuItemGroup, Submenu, Dropdown, DropdownItem, DropdownMenu, Row, Col, Card, Table, 
	TableColumn, Breadcrumb, BreadcrumbItem, Tag, Form, FormItem, Input, Option, CheckboxGroup,
	 Checkbox, DatePicker, Dialog ,Message,MessageBox,Pagination,Timeline,TimelineItem} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'

import router from '../router'
import store from '../store'
import * as  echarts from 'echarts'

import "video.js/dist/video-js.css"
import "video.js/dist/video"
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts
Vue.prototype.$message = Message
Vue.prototype.$messagebox = MessageBox 
Vue.prototype.$confirm=MessageBox.confirm

Vue.config.productionTip = false

// axios.defaults.baseURL = 'http://localhost:5000/'
// axios.defaults.params = {}
Vue.use(Button)
Vue.use(RadioGroup)
Vue.component(Select.name, Select);
Vue.component(Radio.name, Radio);
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Option)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(DatePicker)
Vue.use(Dialog)
Vue.use(Pagination)
Vue.use(Timeline)
Vue.use(TimelineItem)

new Vue({
	store,
	router,
  render: h => h(App),
}).$mount('#app')
import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'

const originPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)


const routes = [
	{
		path: '/',
		name: 'webLogin',
		component: Login,
	},
	{
		path: '/main',
		name: 'Main',
		component: Main,
		children: [
			{
				path: "/publish",
				name: "publish",
				label: '任务发布',
				component: () => import('../views/teacher/publish'),
			},
			{
				path: "/stu-progress",
				name: "stu-progress",
				label: '学生进度查看',
				component: () => import('../views/teacher/stu-progress'),
			},
			{
				path: "/learn",
				name: "learn",
				label: '学习进度',
				component: () => import('../views/student/learn'),
			},
			{
				path: "/home",
				name: "home",
				label: '操作演示',
				component: () => import('../views/Home/Home'),
			},
			{
				path: "/teacher",
				name: "teacher",
				label: '老师出题',
				component: () => import('../views/teacher/teacher'),
			},
			{
				path: "/test",
				name: "test",
				label: '学生成绩',
				component: () => import('../views/teacher/kaoshifenxi'),
			},
			{
				path: "/simulate1",
				name: "simulate1",
				label:"模拟题1",
				component: () => import('../views/exercise/simulate/simulate1'),
			},
			{
				path: "/simulate2",
				name: "simulate2",
				label:"模拟题2",
				component: () => import('../views/exercise/simulate/simulate2'),
			},
			{
				path: "/simulate3",
				name: "simulate3",
				label:"模拟题3",
				component: () => import('../views/exercise/simulate/simulate3'),
			},
			{
				path: "/simulate4",
				name: "simulate4",
				label:"模拟题4",
				component: () => import('../views/exercise/simulate/simulate4'),
			},
			{
				path: "/student",
				name: "student",
				label: '在线考试',
				component: () => import('../views/student/kaoshia'),
			},
			{
				path: "/store",
				name: "store",
				label: '超市',
				component: () => import('../views/store/supermarket'),
			},
		]
	}
]

const router = new VueRouter({
	// mode: 'history',
	routes
})

export default router
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
//import store from './vuex/store'
//import Vuex from 'vuex'
//import NProgress from 'nprogress'
//import 'nprogress/nprogress.css'
import routes from './routes'
//import Mock from './mock'
//Mock.bootstrap();
//import 'font-awesome/css/font-awesome.min.css'

Vue.use(ElementUI)
Vue.use(VueRouter)
//Vue.use(Vuex)

//NProgress.configure({ showSpinner: false });

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    //NProgress.start();
    if (to.path == '/login') {
        sessionStorage.removeItem('user');
    }
    let user = JSON.parse(sessionStorage.getItem('user'));
    if (!user && to.path != '/login') {
        next({ path: '/login' })
    } else {
        next()
    }
})

//router.afterEach(transition => {
//NProgress.done();
//});

const app = new Vue({
        router: router,
        render: h => h(App)
    }).$mount('#app')

/*const app = new Vue({
    //el: '#app',
    //template: '<App/>',
    router,
    store,
    //components: { App }
    render: h => h(App)
}).$mount('#app')*/

/*import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
import Element from 'element-ui'
//import 'element-ui/lib/theme-default/index.css'

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Element)

// 定义组件, 也可以像教程之前教的方法从别的文件引入
const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }
import secondcomponent from './component/secondcomponent.vue'

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/first',
            component: First
        },
        {
            path: '/second',
            component: secondcomponent
        }
    ]
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')*/

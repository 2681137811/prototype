

// -------------------------------------------------------------
//   应用依赖
// -------------------------------------------------------------

// CSS


// JS


// 主程序
var Vue = require('Vue');

// 路由
var VueRouter = require('vue-router');
Vue.use(VueRouter);

// Ajax请求
// var VueResource = require('vue-resource');
// Vue.use(VueResource);

// 开发者模式
Vue.config.debug = true;


// -------------------------------------------------------------
//    应用程序
// -------------------------------------------------------------

var App = Vue.extend({

// 数据模型
    data : function(){
        return {

        }
    },

  // 组件
    components: {
        
    },

  // 方法
    methods : {

    }

});

// -------------------------------------------------------------
//    应用路由
// -------------------------------------------------------------

var router = new VueRouter({
    hashbang : false,
    //history:true
})

// 定义路由规则
router.map({


  // 首页
    '/'       : { component : require('../components/member/main.vue') },

  // 404 错误页面
    //'*'       : { component : require('../components/home/404.vue') }
})


// -------------------------------------------------------------
//    启动应用
// -------------------------------------------------------------

router.start( App, '#laoyoufen-app' );
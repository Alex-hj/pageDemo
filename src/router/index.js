import Vue from 'vue'
import Router from "vue-router"
import Index from "../page/Index.vue"
import Msg from "../page/Msg.vue"
import Personal from "../page/Personal.vue"
import DefaultPage from "../layout/default.vue"

Vue.use(Router);
export default new Router({
    routes:[
        {
            path:"/",
            name:"defaultPage",
            component:DefaultPage,
            redirect:"/index",
            children:[{
                path:"/index",
                name:"index",
                component:Index
            },{
                path:"/msg",
                name:"msg",
                component:Msg
            },{
                path:"/personal",
                name:"personal",
                component:Personal
            }]
        }
    ]
})

import Vue from 'vue'
import Router from "vue-router"
import Index from "../page/Index.vue"
import Left from "../page/Left.vue"
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
                path:"/left",
                name:"left",
                component:Left
            },{
                path:"/personal",
                name:"personal",
                component:Personal
            }]
        }
    ]
})

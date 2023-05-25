import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'


const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/home',name:'Home' ,component:Home, 
        meta: {
            requiresAuth: true,
          }
        },
        {path:'/',name:'Login' ,component:Login, 
        meta: {
            requiresAuth: false,
          }
        },
      
    ]
})
router.beforeEach(async (to, from, next) => {
    if (to.meta.requiresAuth === true && !(await localStorage.getItem('TOKEN'))) {
        next('/');
        return;
    }
    next();
  })
export default router;
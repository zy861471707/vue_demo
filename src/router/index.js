import Vue from 'vue';
import Router from 'vue-router';
import loginPage from '../components/login';
import indexPage from '../pages/index';
import Layout from '../components/layout';
import DetailPage from '../pages/detail';
import DetailAnaPage from '../pages/detail/analysis';
import DetailCouPage from '../pages/detail/count';
import DetailForPage from '../pages/detail/forecast';
import DetailPubPage from '../pages/detail/publish';
import cookie from '../servers/cookie';
Vue.use(Router);
const constantRouterMap = [
  {
    path: '/login',
    name: 'login',
    component: loginPage
  },
  {
    path: '/',
    component: Layout,
    redirect: 'indexPage',
    children:[
      {
        path: '/indexPage',
        name: 'indexPage',
        component: indexPage
      },
      {
        path: '/detail',
        name:'DetailPage',
        component: DetailPage,
        children: [
          {
            path: 'analysis',
            name:'DetailAnaPage',
            component: DetailAnaPage
          },
          {
            path: 'count',
            name:'DetailCouPage',
            component: DetailCouPage
          },
          {
            path: 'forecast',
            name:'DetailForPage',
            component: DetailForPage
          },
          {
            path: 'publish',
            name:'DetailPubPage',
            component: DetailPubPage
          }
        ]
      }
    ]
  },
  
];
const RouterConfig = {
  routes: constantRouterMap
};
const router = new Router(RouterConfig);

router.beforeEach((to, from, next) => {
  let flag = function(){
    console.log(cookie.get('userid'))
    return cookie.get('userid')?true:false;
  }
  if (to.path !== '/login' && !flag()) {
    next('/login');
  } else {
    next();
  }
});
export default router;

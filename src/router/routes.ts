const constantRoute = [
    {
        //page1
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name: 'login'
    },
    {
        //404
        path: '/404',
        component: () => import('@/views/404/index.vue'),
        name: '404',
        meta: {
          title: '404',
          hidden: true,
          icon: 'DocumentDelete',
        },
      },
      {
        //任意路由
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'Any',
        meta: {
          title: '任意路由',
          hidden: true,
          icon: 'DataLine',
        },
    }

]


export {
    constantRoute
}
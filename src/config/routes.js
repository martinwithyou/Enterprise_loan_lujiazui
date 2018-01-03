/**
 * Created by lichb on 2017/1/24.
 */


/**
 * auth true登录才能访问，false不需要登录，默认true
 */
export default [
  {
    path: '/',
    meta: {auth: false},
    component: resolve => require(['../modules/login/'], resolve)
  },
  {
    path: '/login',
    meta: {auth: false},
    component: resolve => require(['../modules/login/'], resolve)
  },
  {
    path: '/home',
    meta: {auth: true},
    component: resolve => require(['../modules/home/'], resolve),
    children: [
      {
        path: 'page1_1',
        meta: {auth: true},
        component: resolve => require(['../modules/page1_1/'], resolve)
      },
      {
        path: 'page1_2',
        meta: {auth: true},
        component: resolve => require(['../modules/page1_2/'], resolve)
      },
      {
        path: 'page1_3',
        meta: {auth: true},
        component: resolve => require(['../modules/page1_3/'], resolve)
      },
      {
        path: 'page2_1',
        meta: {auth: true},
        component: resolve => require(['../modules/page2_1/'], resolve)
      },
      {
        path: 'page2_2',
        meta: {auth: true},
        component: resolve => require(['../modules/page2_2/'], resolve)
      },
      {
        path: 'page3_1',
        meta: {auth: true},
        component: resolve => require(['../modules/page3_1/'], resolve)
      },{
        path: 'page3_2',
        meta: {auth: true},
        component: resolve => require(['../modules/page3_2/'], resolve)
      },{
        path: 'page3_3',
        meta: {auth: true},
        component: resolve => require(['../modules/page3_3/'], resolve)
      },{
        path: 'page3_4',
        meta: {auth: true},
        component: resolve => require(['../modules/page3_4/'], resolve)
      },{
        path: 'page4_1',
        meta: {auth: true},
        component: resolve => require(['../modules/page4_1/'], resolve)
      },{
        path: 'page4_2',
        meta: {auth: true},
        component: resolve => require(['../modules/page4_2/'], resolve)
      },{
        path: 'page5_1',
        meta: {auth: true},
        component: resolve => require(['../modules/page5_1/'], resolve)
      },{
        path: 'page6_1',
        meta: {auth: true},
        component: resolve => require(['../modules/page6_1/'], resolve)
      },{
        path: 'page6_2',
        meta: {auth: true},
        component: resolve => require(['../modules/page6_2/'], resolve)
      },{
        path: 'page6_3',
        meta: {auth: true},
        component: resolve => require(['../modules/page6_3/'], resolve)
      },{
        path: 'page7_1',
        meta: {auth: true},
        component: resolve => require(['../modules/page7_1/'], resolve)
      },{
        path: 'page7_2',
        meta: {auth: true},
        component: resolve => require(['../modules/page7_2/'], resolve)
      },{
        path: 'page8_1',
        meta: {auth: true},
        component: resolve => require(['../modules/page8_1/'], resolve)
      },{
        path: 'page9_1',
        meta: {auth: true},
        component: resolve => require(['../modules/page9_1/'], resolve)
      },{
        path: 'page9_2',
        meta: {auth: true},
        component: resolve => require(['../modules/page9_2/'], resolve)
      },{
        path: 'page9_3',
        meta: {auth: true},
        component: resolve => require(['../modules/page9_3/'], resolve)
      },{
        path: 'page9_4',
        meta: {auth: true},
        component: resolve => require(['../modules/page9_4/'], resolve)
      },{
        path: 'page10_1',
        meta: {auth: true},
        component: resolve => require(['../modules/page10_1/'], resolve)
      },{
        path: 'page10_2',
        meta: {auth: true},
        component: resolve => require(['../modules/page10_2/'], resolve)
      }
    ]
  },
  {
    path: '*',
    meta: {auth: false},
    component: resolve => require(['../modules/login/'], resolve)
  },
]

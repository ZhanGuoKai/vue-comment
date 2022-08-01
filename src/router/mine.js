export default {
  path: '/mine',
  name: '我的',
  redirect: '/mine/info',
  component: () => import('@/views/mine/index'),
  children: [
    {
      path: 'info',
      name: '个人资料',
      component: () => import('@/views/mine/info/index.vue')
    },
    {
      path: 'order',
      name: '我的订单',
      component: () => import('@/views/mine/order/index.vue'),
      children: [
        {
          path: 'all',
          name: '全部订单',
          component: () => import('@/views/mine/order/index.vue')
        },
        {
          path: 'unpaid',
          name: '顶付款',
          component: () => import('@/views/mine/order/index.vue')
        },
        {
          path: 'unused',
          name: '待使用',
          component: () => import('@/views/mine/order/index.vue')
        },
        {
          path: 'unevaluated',
          name: '待评估',
          component: () => import('@/views/mine/order/index.vue')
        }
      ]
    },
    {
      path: 'coupon',
      name: '优惠券',
      component: () => import('@/views/mine/coupon/index.vue')
    },
    {
      path: 'collection',
      name: '我的收藏',
      component: () => import('@/views/mine/collection/index.vue')
    },
    {
      path: 'mall',
      name: '积分商城',
      component: () => import('@/views/mine/mall/index.vue')
    }
  ]
};

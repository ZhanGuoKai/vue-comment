export default {
  path: '/mine',
  name: 'mine',
  redirect: '/mine/info',
  component: () => import('@/views/mine/index'),
  children: [
    {
      path: 'info',
      name: 'mine-info',
      component: () => import('@/views/mine/info/index.vue'),
      meta: { title: '个人资料' }
    },
    {
      path: 'order',
      name: 'mine-order',
      component: () => import('@/views/mine/order/index.vue'),
      meta: { title: '我的订单' },
      children: [
        {
          path: 'all',
          name: 'mine-order-all',
          component: () => import('@/views/mine/order/index.vue'),
          meta: { title: '全部订单' }
        },
        {
          path: 'unpaid',
          name: 'mine-order-unpaid',
          component: () => import('@/views/mine/order/index.vue'),
          meta: { title: '待付款' }
        },
        {
          path: 'unused',
          name: 'mine-order-unused',
          component: () => import('@/views/mine/order/index.vue'),
          meta: { title: '待使用' }
        },
        {
          path: 'unevaluated',
          name: 'mine-order-unevaluated',
          component: () => import('@/views/mine/order/index.vue'),
          meta: { title: '待评价' }
        }
      ]
    },
    {
      path: 'coupon',
      name: 'mine-coupon',
      component: () => import('@/views/mine/coupon/index.vue'),
      meta: { title: '优惠券' }
    },
    {
      path: 'collection',
      name: 'mine-collection',
      component: () => import('@/views/mine/collection/index.vue'),
      meta: { title: '我的收藏' }
    },
    {
      path: 'mall',
      name: 'mine-mall',
      component: () => import('@/views/mine/mall/index.vue'),
      meta: { title: '积分商城' }
    }
  ]
};

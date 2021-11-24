import Vue from 'vue'

/* 路由设置 */
import Router from 'vue-router'
Vue.use(Router)

/* 引入views中的页面（尽量不要引入components中的组件） */
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/views/layout/layout.vue'
import Centre from '@/views/layout/centre.vue'
import Order from '@/views/layout/order.vue'
import Tables from '@/views/element/Tables.vue'
import Test from '@/views/test/Test.vue'

export default new Router({
  routes:
    [
      {
        path: '/',
        name: 'Layout',
        component: Layout,
        children: [
          {
            path: '/',
            name: 'Centre',
            component: Centre
          }, {
            path: 'order',
            name: 'Order',
            component: Order
          }, {
            path: 'tables',
            name: 'Tables',
            component: Tables
          }, {
            path: 'test',
            name: 'Test',
            component: Test
          }
          
        ]
      }
    ]
})

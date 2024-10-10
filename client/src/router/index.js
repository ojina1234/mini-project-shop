import {
  createRouter,
  createWebHistory
} from 'vue-router'
import ProductList from '../views/ProductList.vue'
import ProductDetail from '../views/ProductDetail.vue'
import ProductCreate from '../views/ProductCreate.vue'
import ProductUpdate from '../views/ProductUpdate.vue'
import SalesList from '../views/SalesList.vue'
import ImageInsert from '../views/ImageInsert.vue'
import Hello from '../views/HelloWorld.vue'
import Study from '../views/CompanyStudy.vue'
import AddData from '../views/AddData.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: ProductList
  },
  {
    path: '/detail',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/create',
    name: 'ProductCreate',
    component: ProductCreate
  },
  {
    path: '/update',
    name: 'ProductUpdate',
    component: ProductUpdate
  },
  {
    path: '/sales',
    name: 'SalesList',
    component: SalesList
  },
  {
    path: '/image_insert',
    name: 'ImageInsert',
    component: ImageInsert
  },
  {
    path: '/hello',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/study',
    name: 'Study',
    component: Study
  },
  {
    path: '/addData',
    name: 'AddData',
    component: AddData
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router //export default로 router를 내보냄 -> 내보내는 거는 main.js에서 하고 있음
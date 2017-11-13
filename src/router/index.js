import Vue from 'vue'
import Router from 'vue-router'
import HomeRouters from './home'
import AdminRouters from './admin'
import Cart from './cart'

Vue.use(Router);

export default new Router({
    routes: [
        HomeRouters,
        AdminRouters,
        Cart
    ]
})

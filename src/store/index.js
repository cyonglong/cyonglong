import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        addCartcount(state, payload) {
            payload.count += 1
        },
        addCartList(state, payload) {
            payload.chacked=true
            state.cartList.push(payload)
        }
    },
    actions: {
        ChangeCart(context,payload) {
            // let oldCart = null
            // for (let item of context.state.cartlist) {
            //     if (item.iid == payload.iid) {
            //         oldCart = item;
            //          break;
            //      }
            // }
            return new Promise((resolve,reject)=>{ let oldCart = context.state.cartList.find(item=>item.iid==payload.iid)
            if (oldCart) {
                //  oldCart.count+=1
                context.commit('addCartcount',oldCart)
                resolve('商品+1')
            }
            else {
                payload.count = 1
                context.commit('addCartList',payload)
                resolve('添加至购物车')
            }
            })
           
        }
    },

})
export default store
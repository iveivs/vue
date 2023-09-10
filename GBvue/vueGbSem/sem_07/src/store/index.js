// Первый вариант импорта экспорта

// import Vuex from 'vuex'
// import Vue from 'vue'

// Vue.use(Vuex)

// const store = new Vuex.Store({
//     state: {
//         count: 0
//     },
//     mutations: {
//         increment (state) {
//         state.count++
//         },
//     decrement (state) {
//         state.count--
//     }
//     }
// })

// export default store


// Второй вариант   
export default {
    state: {
        count: 0,
        cartItems: [
            {id: 1, name: 'Tovar 1', price: 100, quantity: 3},
            {id: 2, name: 'Tovar 2', price: 200, quantity: 2},
            {id: 3, name: 'Tovar 3', price: 300, quantity: 1},
        ]
    },
    getters: {
        cartItems(state) {
            return state.cartItems
        },
        totalPrice(state) {
            return state.cartItems.reduce((totalPrice, item) => totalPrice + item.quantity * item.price,0)
        },
        totalItems(state) {
            return state.cartItems.reduce((totalQuantity, item) => totalQuantity + item.quantity,0)
        }
    },
    mutations: {
        ADD_ITEM_TO_CART(state, item) {
            const find = state.cartItems.find((currentItem) => currentItem.id === item.id)
            if(find) {
                find.quantity++
            } else {
                const newItem = {
                    ...item, 
                    quantity: 1,
                }
                state.cartItems.push(newItem)
            }
            
        },
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        }
    },
    actions: {
        addToCart({commit}, item) {
            commit('ADD_ITEM_TO_CART', item)
        }
    }
}


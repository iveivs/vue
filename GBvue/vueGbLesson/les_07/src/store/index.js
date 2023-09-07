import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // начальное состояние
        paymentList: [],
    },
    mutations: {
        // методы для изменения состояния
        SET_PAYMENT(state, payments) {
            state.paymentList = payments
        },  
        ADD_PAYMENT(state, pay) {
            state.paymentList.push(pay)
        } 
    },
    getters: {
        // методы для чтения состояния
        getPayment: (state) => state.paymentList,
        getFullPayment: (state) => {
            return state.paymentList.reduce((a,b) => a + b.value, 0)
        }
    },
    actions: {
        // методы для асинхронных операций
        fetchData({ commit }) {
            setTimeout(() => {
                const paymentList = [
                    {
                        data: '28.03.2023',
                        category: 'Food',
                        value: 169,
                    },
                    {
                        data: '24.03.2023',
                        category: 'Transport',
                        value: 369,
                    },
                    {
                        data: '21.03.2023',
                        category: 'Food',
                        value: 456,
                    },
                ]
                commit('SET_PAYMENT', paymentList)
            }, 1000);
        }
    },
    modules: {
        // Модули для Vuex для разделения хранилища
        // на под-хранилища
    }
})
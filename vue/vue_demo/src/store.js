import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        doubleCount(state){
            return state.count * 2
        },
        sanCount(state){
            return state.count * 3
        }
    },
    mutations: {
        increment (state){
            state.count ++
        }
    }
})
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import counter from './store/counter'
export default new Vuex.Store({
    modules: {
        counter
    }
})

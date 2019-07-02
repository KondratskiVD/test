export default {
    state: {
        count_vuex: 0,
        carName: 'Ford'
    },
    mutations: { // не может использовать ассинхронность
        changeCounterVuex(state, payload){// payload - параметры +1 в updateCounterVuex(+1)
            state.count_vuex += payload
        }
    },
    actions: { // для выполнения mutation ассинхронно
        asyncChangeCounterVuex({commit}, payload){
            setTimeout(()=>{
                commit('changeCounterVuex',payload.countValue )
            },payload.timeoutDelay)
        }
    },
    // getters производяться над мутировавшим state
    getters: { //делает вычичления над state что бы убрать лишние вычисления в компонентах
        computedCounterVuex(state){
            return state.count_vuex * 10
        }
    }
}
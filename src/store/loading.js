export default {
    namespaced: true,
    state: {
        /**@type {Boolean} */
        loading: false,
        /**@type {Number} */
        progress: 0
    },
    getters: {
        isLoading: state => state.loading,
        progress: state => state.progress
    },
    mutations: {
        LOAD_API(state) {
            state.loading = true
        },
        FINISH_API(state) {
            state.loading = false
            state.progress = 0
        }
    },
    actions: {}
}
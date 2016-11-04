import Vue from 'vue';
import Vuex from 'vuex';
import * as api from './../../../api';
import * as types from './../../../mutation-types'

export default {
    state: {
        batches: {}
    },
    mutations: {
        [types.GET_ALL_BATCHES](state, payload) {
            state.batches = payload.batches
        }
    },
    actions: {
        getAllBatches: ({commit}) => {
            Vue.http.get(api.batches)
                .then(response => {
                    commit({
                        type: types.GET_ALL_BATCHES,
                        batches: response.body.data
                    });
                    // console.log(response.body.data);
                })
                .catch(error => {})
        }
    }
}

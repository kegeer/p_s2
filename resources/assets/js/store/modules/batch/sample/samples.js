import Vue from 'vue';
import Vuex from 'vuex';
import * as api from './../../../../api';
import * as types from './../../../../mutation-types'

export default {
    state: {
        samples: {}
    },
    mutations: {
        [types.GET_ALL_SAMPLES](state, payload) {
            state.samples = payload.samples
        }
    },
    actions: {
        getAllSamples: ({commit}, batch) => {
            Vue.http.get(api.batches + '/' + batch + '/' + 'samples')
                .then(response => {
                    commit({
                        type: types.GET_ALL_SAMPLES,
                        samples: response.body.data
                    });
                    // console.log(response.body.data);
                })
                .catch(error => {})
        }
    }
}

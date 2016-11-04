import Vue from 'vue';
import Vuex from 'vuex';
import * as api from './../../../../api';
import * as types from './../../../../mutation-types'


export default {
    state: {
        errors: null
    },
    mutations: {
        [types.CREATE_SAMPLE_SUCCESS](state) {
            state.errors = null
        },
        [types.CREATE_SAMPLE_FAILURE](state, payload) {
            state.errors = payload.errors ? payload.errors : null
        },
        [types.CLEAR_CREATE_SAMPLE_ERRORS](state) {
            state.errors = null
        }
    },
    actions: {
        createSample: ({dispatch}, formData) => {
            return new Promise((resolve, reject) => {
                Vue.http.post(api.samples, formData)
                .then(response => {
                    dispatch('createSampleSuccess', response.body);
                    resolve();
                })
                .catch( response => {
                    dispatch('createSampleFailure', response.body);
                    reject();
                });
            });
        },
        createSampleSuccess: ({commit}, body) => {
            commit({
                type: types.CREATE_SAMPLE_SUCCESS,
                batch: body
            });
        },
        createSampleFailure: ({commit}, body) => {
            commit({
                type: types.CREATE_SAMPLE_FAILURE,
                errors: body
            });
        },
        clearCreateSampleErrors: ({commit}) => {
            commit({
                type: types.CLEAR_CREATE_SAMPLE_ERRORS
            });
        }
    }
}

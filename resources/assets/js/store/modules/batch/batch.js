import Vue from 'vue';
import Vuex from 'vuex';
import * as api from './../../../api';
import * as types from './../../../mutation-types'

export default {
    state : {
        batch: {},
        errors: null
    },
    mutations : {
        [types.GET_BATCH](state, payload) {
            state.batch = payload.batch
        },
        [types.GET_BATCH_ERROR](state, payload) {
            state.errors = payload.errors
                ? payload.errors
                : null
        },
        [types.CREATE_BATCH_SUCCESS](state) {
            state.errors = null
        },
        [types.CREATE_BATCH_FAILURE](state, payload) {
            state.errors = payload.errors
                ? payload.errors
                : null
        },
        [types.CLEAR_CREATE_BATCH_ERRORS](state) {
            state.errors = null
        }
    },
    actions : {
        getBatch: ({
            commit,
            dispatch
        }, batch) => {
            return new Promise((resolve, reject) => {
                Vue.http.get(api.batch + batch).then(response => {
                    console.log(response);
                    commit({type: types.GET_BATCH, batch: response.body})
                    resolve();
                }).catch(response => {
                    console.log(response);
                    dispatch('getBatchError', response.body);
                    reject();
                })
            })
        },
        getBatchError: ({
            commit
        }, body) => {
            commit({type: types.GET_BATCH_ERROR, errors: body});
        },
        createBatch: ({
            dispatch
        }, formData) => {
            return new Promise((resolve, reject) => {
                Vue.http.post(api.batches, formData).then(response => {
                    dispatch('createBatchSuccess', response.body);
                    resolve();
                }).catch(response => {
                    dispatch('createBatchFailure', response.body);
                    reject();
                });
            });
        },
        createBatchSuccess: ({
            commit
        }, body) => {
            commit({type: types.CREATE_BATCH_SUCCESS, batch: body});
        },
        createBatchFailure: ({
            commit
        }, body) => {
            commit({type: types.CREATE_BATCH_FAILURE, errors: body});
        },
        clearCreateBatchErrors: ({commit}) => {
            commit({type: types.CLEAR_CREATE_BATCH_ERRORS});
        }
    }
}

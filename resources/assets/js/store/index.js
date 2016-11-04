import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import batches from './modules/batch/batches';
import batch from './modules/batch/batch';
import samples from './modules/batch/sample/samples';
import sample from './modules/batch/sample/sample';

export default new Vuex.Store({
    modules: {
        batches,
        batch,
        samples,
        sample
    },
    strict: true
});

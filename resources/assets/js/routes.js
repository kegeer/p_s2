import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

import Home from './components/Home.vue';
import Batches from './components/batch/Batches.vue';
import CreateBatch from './components/batch/CreateBatch.vue';
import BatchInfo from './components/batch/BatchInfo.vue';
import CreateSample from './components/batch/sample/CreateSample.vue';


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Home,
            meta: {},
            children: [
                {
                    path: 'batches',
                    component: Batches,
                    name: 'batches',
                    meta: {}
                },
                {
                    path: 'batches/create',
                    name: 'create.batch',
                    component: CreateBatch,
                    meta: {}
                },
                {
                    path: 'batches/:id',
                    component: BatchInfo,
                    name: 'batch.info'
                },
                {
                    path: 'batches/:id/samples/create',
                    component: CreateSample,
                    name: 'create.sample'
                }
            ]
        },

    ]
});


export default router;

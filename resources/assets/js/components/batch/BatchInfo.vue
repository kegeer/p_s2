<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <div class="page-title-box">
                    <h4 class="page-title">Check Batch</h4>
                    <ol class="breadcrumb p-0 m-0">
                        <li>
                            <a href="#">Dashboard</a>
                        </li>
                        <li>
                            <a href="#">Batches </a>
                        </li>
                        <li class="active">
                            Check Batch
                        </li>
                    </ol>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <div class="card-box">
                    <h4 class="m-t-0 header-title"><b>Batch infomation</b></h4>
                    <p class="text-muted m-b-30 font-13">
                        {{ batch.py_num }}
                    </p>
                    <div class="row">

                    </div>

                    <div class="row">
                        <div class="col-sm-6">
                            <div class="m-b-30">
                                <router-link :to="{name: 'create.sample', params:{id: 1}}">
                                    <button class="btn btn-success waves-effect waves-light">New Batch<i class="mdi mdi-plus-circle-outline"></i></button>
                                </router-link>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <table class="table">
                            <thead>
                                <th>Origin Number</th>
                                <th>Puyuan Number</th>
                                <th>Ammount</th>
                                <th>Client Name</th>
                                <th>Check</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </thead>

                            <tbody>
                                <tr v-for="sample of samples">
                                    <td> {{ sample.ori_num }}</td>
                                    <td> {{ sample.py_num }}</td>
                                    <td> {{ sample.amount }}</td>
                                    <td> {{ sample.client_id }}</td>
                                    <td>
                                        <a href=""><button class="btn btn-sm btn-primary">Check <i class="mdi mdi-eye"></i></button></a>
                                    </td>
                                    <td>
                                        <a href=""><button class="btn btn-sm btn-default">Edit <i class="mdi mdi-pen"></i></button></a>
                                    </td>
                                    <td>
                                        <a href=""><button class="btn btn-sm btn-danger">Delete <i class="mdi mdi-delete"></i></button></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    created() {
        this.$store.dispatch('getBatch', this.$route.params.id);
        this.$store.dispatch('getAllSamples', this.$route.params.id);
    },
    computed: {
        ...mapState({
            batch: store => store.batch.batch,
            samples: store => store.samples.samples
        })
    }
}
</script>

<style lang="css">
</style>

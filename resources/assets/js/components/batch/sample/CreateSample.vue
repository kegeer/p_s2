<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <div class="page-title-box">
                    <h4 class="page-title">Create Sample</h4>
                    <ol class="breadcrumb p-0 m-0">
                        <li>
                            <a href="#">Dashboard</a>
                        </li>
                        <li>
                            <a href="#">Batches </a>
                        </li>
                        <li class="active">
                            Create sample
                        </li>
                    </ol>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <div class="card-box">
                    <h4 class="m-t-0 header-title"><b>Fill Sample information</b></h4>
                    <p class="text-muted m-b-30 font-13">
                        Record information for how to fill this form!
                    </p>
                    <div class="row">
                        <form @submit.prevent="addNewSample" class="form-horizontal">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="client_id" class="col-md-2 control-label">Client ID </label>
                                        <div class="col-md-10">
                                            <input type="text" id="client_id" v-model="client_id" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="ori_num" class="col-md-2 control-label">Origin Number</label>
                                        <div class="col-md-10">
                                            <input type="text" id="ori_num" v-model="ori_num" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="py_num" class="col-md-2 control-label">Puyuan Number</label>
                                        <div class="col-md-10">
                                            <input type="text" id="py_num" v-model="py_num" class="form-control">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="amount" class="col-md-2 control-label">Sample amount</label>
                                        <div class="col-md-10">
                                            <input type="text" id="amount" v-model="amount" class="form-control">
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="split_type" class="col-md-2 control-label">split_type</label>
                                        <div class="col-md-10">
                                            <select v-model="split_type" id="split_type" class="form-control">
                                              <option value="1">Alice</option>
                                              <option value="2">None</option>
                                              <option value="3">Jack</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="sampling_time" class="col-md-2 control-label">sampling_time</label>
                                        <div class="col-md-10">
                                            <input type="date" id="sampling_time" v-model="sampling_time" class="form-control">
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="split_time" class="col-md-2 control-label">split_time</label>
                                        <div class="col-md-10">
                                            <input type="date" id="split_time" v-model="split_time" class="form-control">
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="due_time" class="col-md-2 control-label">due_time</label>
                                        <div class="col-md-10">
                                            <input type="date" id="due_time" v-model="due_time" class="form-control">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-md-offset-4">
                                <button type="submit" name="button">Create New Batch</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            'batch_id':null,
            'client_id': null,
            'ori_num': null,
            'py_num': null,
            'amount': null,
            'sampling_time': null,
            'split_time': null,
            'split_type': null,
            'due_time': null
        }
    },
    methods: {
        addNewSample() {
            const formData = {
                'batch_id':this.$route.params.id,
                'client_id':this.client_id,
                'ori_num':this.ori_num,
                'py_num':this.py_num,
                'amount':this.amount,
                'sampling_time':this.sampling_time,
                'split_time':this.split_time,
                'split_type':this.split_type,
                'due_time':this.due_time
            }

            this.$store.dispatch('createSample', formData)
                .then(() => this.clearForm())
                .catch(error => {});
        },
        clearForm() {
          this.batch_id = null,
          this.client_id =  null,
          this.ori_num =  null,
          this.py_num =  null,
          this.amount =  null,
          this.sampling_time =  null,
          this.split_time =  null,
          this.split_type =  null,
          this.due_time =  null
        }
    }
}
</script>

<style lang="css">
</style>

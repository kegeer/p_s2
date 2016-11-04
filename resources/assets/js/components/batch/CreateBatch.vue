<template>
<div class="container">
    <div class="row">
        <div class="col-xs-12">
            <div class="page-title-box">
                <h4 class="page-title">Create Batch</h4>
                <ol class="breadcrumb p-0 m-0">
                    <li>
                        <a href="#">Dashboard</a>
                    </li>
                    <li>
                        <a href="#">Batches </a>
                    </li>
                    <li class="active">
                        Create Batch
                    </li>
                </ol>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-12">
            <div class="card-box">
                <h4 class="m-t-0 header-title"><b>Fill Batch information</b></h4>
                <p class="text-muted m-b-30 font-13">
                    Record information for how to fill this form!
                </p>
                <div class="row">
                    <form @submit.prevent="addNewBatch" class="form-horizontal">
                        <div class="row">
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
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="manager" class="col-md-2 control-label">Manager</label>
                                    <div class="col-md-10">
                                        <select v-model="manager" id="manager" class="form-control">
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
                                    <label for="samples_amount" class="col-md-2 control-label">Samples amount</label>
                                    <div class="col-md-10">
                                        <input type="text" id="samples_amount" v-model="samples_amount" class="form-control">
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="samples_type" class="col-md-2 control-label">samples_type</label>
                                    <div class="col-md-10">
                                        <select v-model="samples_type" id="samples_type" class="form-control">
                                          <option value="1">poop</option>
                                          <option value="2">blood</option>
                                          <option value="3">Jack</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="trans_method" class="col-md-2 control-label">trans_method</label>
                                    <div class="col-md-10">
                                        <select v-model="trans_method" id="trans_method" class="form-control">
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
                                    <label for="sender" class="col-md-2 control-label">sender</label>
                                    <div class="col-md-10">
                                        <input type="text" id="sender" v-model="sender" class="form-control">
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="send_time" class="col-md-2 control-label">send_time</label>
                                    <div class="col-md-10">
                                        <input type="date" id="send_time" v-model="send_time" class="form-control">
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="sender_contact" class="col-md-2 control-label">sender_contact</label>
                                    <div class="col-md-10">
                                        <input type="text" id="sender_contact" v-model="sender_contact" class="form-control">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="recipients" class="col-md-2 control-label">recipients</label>
                                    <div class="col-md-10">
                                        <input type="text" id="recipients" v-model="recipients" class="form-control">
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="arrive_time" class="col-md-2 control-label">arrive_time</label>
                                    <div class="col-md-10">
                                        <input type="date" id="arrive_time" v-model="arrive_time" class="form-control">

                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="express_num" class="col-md-2 control-label">express_num</label>
                                    <div class="col-md-10">
                                        <input type="text" id="express_num" v-model="express_num" class="form-control">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="arrive_status" class="col-md-2 control-label">arrive_status</label>
                                    <div class="col-md-10">
                                        <select v-model="arrive_status" id="arrive_status" class="form-control">
                                          <option value="1">Alice</option>
                                          <option value="2">None</option>
                                          <option value="3">Jack</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="store_method" class="col-md-2 control-label">store_method</label>
                                    <div class="col-md-10">
                                        <select v-model="store_method" id="store_method" class="form-control">
                                          <option value="1">Alice</option>
                                          <option value="2">None</option>
                                          <option value="3">Jack</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="store_location" class="col-md-2 control-label">store_location</label>
                                    <div class="col-md-10">
                                        <input type="text" id="store_location" v-model="store_location" class="form-control">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="note" class="col-md-2 control-label">note</label>
                                    <div class="col-md-10">
                                        <textarea id="note" v-model="note" class="form-control"></textarea>
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
            ori_num: null,
            py_num: null,
            manager: null,
            samples_amount: null,
            samples_type: null,
            trans_method: null,
            sender: null,
            send_time: null,
            sender_contact: null,
            recipients: null,
            arrive_time: null,
            express_num: null,
            arrive_status: null,
            store_method: null,
            store_location: null,
            note: null
        }
    },
    methods: {
        addNewBatch() {
            const formData = {
                ori_num: this.ori_num,
                py_num: this.py_num,
                manager: this.manager,
                samples_amount: this.samples_amount,
                samples_type: this.samples_type,
                trans_method: this.trans_method,
                sender: this.sender,
                send_time: this.send_time,
                sender_contact: this.sender_contact,
                recipients: this.recipients,
                arrive_time: this.arrive_time,
                express_num: this.express_num,
                arrive_status: this.arrive_status,
                store_method: this.store_method,
                store_location: this.store_location,
                note: this.note
            }

            this.$store.dispatch('createBatch', formData)
            .then(() => this.clearForm())
            .catch(error => {});
        },
        clearForm() {
                this.ori_num = null,
                this.py_num = null,
                this.manager = null,
                this.samples_amount = null,
                this.samples_type = null,
                this.trans_method = null,
                this.sender = null,
                this.send_time = null,
                this.sender_contact = null,
                this.recipients = null,
                this.arrive_time = null,
                this.express_num = null,
                this.arrive_status = null,
                this.store_method = null,
                this.store_location = null,
                this.note = null
        }
    }
}
</script>

<style lang="css">
</style>

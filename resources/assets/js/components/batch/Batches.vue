<template>
  <div class="container">
      <div class="row">
			<div class="col-xs-12">
				<div class="page-title-box">
					<h4 class="page-title">Dashboard</h4>
					<ol class="breadcrumb p-0 m-0">
						<li>
							<a href="#">Dashboard</a>
						</li>
						<li class="active">
							Index
						</li>
					</ol>
					<div class="clearfix"></div>
				</div>
			</div>

			<div class="col-xs-12">

					<div class="card-box">
						<div class="row">
							<div class="col-sm-6">
								<div class="m-b-30">
                                    <router-link :to="{name: 'create.batch'}">
                                        <button class="btn btn-success waves-effect waves-light">New Batch<i class="mdi mdi-plus-circle-outline"></i></button>
                                    </router-link>
								</div>
							</div>
						</div>

						<h4 class="m-t-0 header-title"><b>All batches</b></h4>
						<p class="text-muted font-13">
							The Column Toggle Table allows the user to select which columns they want to be visible.
						</p>

						<table class="table">
							<thead>
							<tr>
								<th scope="col">Sender</th>
								<th scope="col">Samples Type</th>
								<th scope="col">Trans method</th>
                                <th scope="col">Manager</th>
								<th scope="col">Arrive time</th>

                                <th scope="col">Check</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
							</tr>
							</thead>
							<tbody>
							<tr v-for="batch of batches" class="text-center">
								<td>{{ batch.sender }}</td>
								<td>{{ batch.samples_type }}</td>
								<td>{{ batch.trans_method }}</td>
                                <td>{{ batch.manager }}</td>
								<td>{{ batch.arrive_time }}</td>

                                <td>
                                    <router-link :to="{name: 'batch.info', params: {id: batch.id}}"><button class="btn btn-sm btn-primary">Check <i class="mdi mdi-eye"></i></button></router-link>
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
</template>

<script>
import { mapState } from 'vuex';
export default {
    created() {
        // console.log(this.batches);
        this.$store.dispatch('getAllBatches');
        console.log(this.batches.batches);
    },
    computed: {
        ...mapState({
            batches: state => state.batches.batches
        })
    }
}
</script>

<style lang="css">
</style>

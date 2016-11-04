<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBatchesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('batches', function (Blueprint $table) {
            $table->increments('id');
            $table->string('ori_num')->nullable();
            $table->string('py_num')->nullable();
            $table->tinyInteger('samples_type')->nullable();
            $table->integer('samples_amount')->nullable();
            $table->tinyInteger('trans_method')->nullable();
            $table->timestamp('arrive_time')->nullable();
            $table->tinyInteger('arrive_status')->nullable();
            $table->tinyInteger('store_method')->nullable();
            $table->string('store_location')->nullable();
            $table->string('sender')->nullable();
            $table->string('sender_contact')->nullable();
            $table->timestamp('send_time')->nullable();
            $table->string('recipients')->nullable();
            $table->string('express_num')->nullable();
            $table->text('note')->nullable();
            $table->integer('manager')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('batches');
    }
}

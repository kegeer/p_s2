<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSamplesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('samples', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('batch_id');
            $table->integer('client_id')->nullable();
            $table->string('ori_num')->nullable();
            $table->string('py_num')->nullable();
            $table->float('amount')->nullable();
            $table->timestamp('sampling_time')->nullable();
            $table->timestamp('split_time')->nullable();
            $table->tinyInteger('split_type')->nullable();
            $table->timestamp('due_time')->nullable();
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
        Schema::dropIfExists('samples');
    }
}

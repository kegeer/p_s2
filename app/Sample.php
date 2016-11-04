<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sample extends Model
{
    protected $fillable=['batch_id', 'client_id', 'ori_num', 'py_num', 'amount', 'sampling_time', 'split_time', 'split_type', 'due_time'];
}

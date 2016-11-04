<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Batch extends Model
{
    protected $fillable=['ori_num', 'py_num', 'manager', 'samples_amount', 'samples_type', 'trans_method', 'sender', 'send_time', 'sender_contact', 'recipients', 'arrive_time', 'express_num', 'arrive_status', 'store_method', 'store_location', 'note'];
}

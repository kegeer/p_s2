<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Sample;

class SampleController extends Controller
{
    public function index($id)
    {
        dd('haha');
        $samples = Sample::where('batch_id', $id)->get();
        return response()->json([
            'data' => $samples
        ]);
    }

    public function store(Request $requst)
    {
        $sample = Sample::create($requst->all());
        return response()->json([
            'success' =>true,
            'data' => $sample
        ])
    }
}

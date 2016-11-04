<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Batch;
use Carbon\Carbon;

class BatchController extends Controller
{
    public function index()
    {
        $batches = Batch::all()->orderBy('create_at', 'des');
        return response()->json([
            'success' => true,
            'data' => $batches
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $batch = Batch::create($data);

        return response()->json([
            'success' => true,
            'data' => $batch
        ]);
    }

    public function show($id)
    {
        $batch = Batch::findOrFail($id);
        return response()->json([
            'success' => true,
            'data' => $batch
        ]);
    }

}

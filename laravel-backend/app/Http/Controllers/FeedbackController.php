<?php

namespace App\Http\Controllers;

use App\Mail\Feedback;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Mail;


class FeedbackController extends Controller
{
    /**
     * Leave feedback via email
     *
     * @return Response
     */
    public function sendEmail()
    {
        request()->validate([
            'email' => 'required|email',
            'subject' => 'required',
            'name' => 'required',
            'message' => 'required']);

//        $message = request('message');

        Mail::to(\request('email'))
            ->send(new Feedback('изделия из дерева'));

        return redirect('/')
            ->with('message', 'Благодарим за полезные сведения!');


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function index()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Feedback $feedback
     * @return Response
     */
    public function show(Feedback $feedback)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Feedback $feedback
     * @return Response
     */
    public function edit(Feedback $feedback)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param \App\Models\Feedback $feedback
     * @return Response
     */
    public function update(Request $request, Feedback $feedback)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Feedback $feedback
     * @return Response
     */
    public function destroy(Feedback $feedback)
    {
        //
    }
}

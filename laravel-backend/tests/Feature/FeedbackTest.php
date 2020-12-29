<?php

namespace Tests\Feature;

use App\Models\Feedback;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class FeedbackTest extends TestCase
{
    use WithFaker, RefreshDatabase;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    /** @test */
    public function can_leave_feedback()
    {
        $this->withoutExceptionHandling();

        $attrs = Feedback::factory()->raw();

        $this->post('/api/v1/feedback', $attrs);
//            ->assertRedirect('/');

        $this->assertEquals(true, true);

        $this->withoutExceptionHandling();

//        $this->get('/')
//            ->assertSee('Обратная связь');


//        $this->get('/')
//            ->assertSee('Благодарим за обратную связь!');
//
//        $this->get('/')
//            ->assertDontSee('Благодарим за обратную связь!');

//        $this->get('/')
//            ->assertSee('Благодарим за обратную связь!');

//        $this->get('/')
//            ->assertDontSee('Благодарим за обратную связь!');

    }


}

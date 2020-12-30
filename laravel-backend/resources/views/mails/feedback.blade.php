@component('mail::message')
    ## От Ara_lang
    {{--    Похоже, что вы интересовались темой--}}

    Ara_lang, это

    - Переведённые материалы
    - Другие облегчённые уроки

    @component('mail::button', ['url' => 'localhost:8000'])

        Есть достаточно времени, чтобы учить дальше.

    @endcomponent


    Благодарим, <br>
    {{ config('app.name') }}
@endcomponent


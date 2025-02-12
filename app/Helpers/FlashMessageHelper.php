<?php

if (!function_exists(function: 'flashMessage')) {
    function flashMessage($message, $type = 'succes'): void
    {
        session()->flash('message', $message);
        session()->flash('type', $type);
    }
}

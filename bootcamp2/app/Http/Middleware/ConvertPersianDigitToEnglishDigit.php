<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ConvertPersianDigitToEnglishDigit
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $input = $request->all();


        array_walk_recursive($input, function (&$value) {
            if (is_string($value)) {
                $value = $this->convertPersianToEnglish($value);
            }
        });
        $request->merge($input);
        return $next($request);
    }

    private function convertPersianToEnglish($value)
    {
        $persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        $englishDigits = range(0, 9);

        return str_replace($persianDigits, $englishDigits, $value);
    }
}

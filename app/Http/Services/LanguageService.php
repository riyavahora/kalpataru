<?php

namespace App\Http\Services;

use App\Models\Languages;
use App\Models\Users;
use Illuminate\Support\Facades\Session;

/**
 * Class LanguageService
 * @package App\Http\Services
 */
class LanguageService
{
    /**
     * LanguageService constructor.
     */
    public function __construct()
    {
    }

    public function checkLanguageSet()
    {
        $userId = null;
        $lang = 'en';

        if (!empty(Session::get('user'))) {
            $userId = Session::get('user');
            if (!empty(Session::get('lang'))) {
                $lang = Session::get('lang');
            } else {
                $lang = Users::query()->where('user_id', $userId)
                    ->first()->language;
            }
        }

        if (isset($_GET['lang'])) {
            Session::put('lang', $_GET['lang']);
            if (!empty(Session::get('user'))) {
                Users::query()->where('user_id', Session::get('user'))
                    ->update(['language' => Session::get('lang')]);
            }
            $lang = Session::get('lang');
        }

        return $lang;
    }

    public function getEnglishWords(string $language): array
    {
        $lan = 'value_'.$language;

        return Languages::all()
            ->pluck($lan, 'key')
            ->toArray();
    }
}

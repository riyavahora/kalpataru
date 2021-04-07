<?php

namespace App\Http\Controllers;

use App\Models\Languages;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use App\Http\Services\LanguageService;

class HomeController extends Controller
{
    private $languageService;
    private $languagesArray;
    private $loggedIn;

    /**
     * HomeController constructor.
     * @param LanguageService $languageService
     */
    public function __construct(
        LanguageService $languageService
    ) {
        $this->languageService = $languageService;
        $language = $this->languageService->checkLanguageSet();
        $this->languagesArray = $this->languageService->getEnglishWords($language);
        $this->loggedIn = !empty(Session::get('user')) ? true : false;
    }

    public function index()
    {
        return view('home', $this->getParams());
    }

    public function contact()
    {
        return view('contact', $this->getParams());
    }

    public function login()
    {
        return view('login', $this->getParams());
    }

    public function register()
    {
        return view('register', $this->getParams());
    }

    private function getParams() {
        return [
            'lang' => $this->languagesArray,
            'loggedUser' => $this->loggedIn,
        ];
    }
}

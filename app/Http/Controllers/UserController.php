<?php

namespace App\Http\Controllers;

use App\Http\RequestTransformers\UserStoreTransformer;
use App\Models\Languages;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use App\Http\Services\LanguageService;
use App\Http\Services\UserService;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    private $languageService;
    private $userService;
    private $languagesArray;
    private $loggedIn;

    /**
     * UserController constructor.
     * @param LanguageService $languageService
     * @param UserService $userService
     */
    public function __construct(
        LanguageService $languageService,
        UserService $userService
    ) {
        $this->languageService = $languageService;
        $this->userService = $userService;

        $language = $this->languageService->checkLanguageSet();
        $this->languagesArray = $this->languageService->getEnglishWords($language);
        $this->loggedIn = !empty(Session::get('user')) ? true : false;
    }

    /**
     * @param Request $request
     */
    public function createUser(Request $request)
    {
        $rules = [
            'email' => 'required|string|email|max:255|unique:users,email'
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return redirect('register')
                ->withInput()
                ->withErrors($validator);
        } else {
            if ($this->userService->storeUser((new UserStoreTransformer())->transform($request))) {
                return redirect('login');
            } else {
                return redirect('register')
                    ->withInput()
                    ->withErrors($validator);
            }
        }
    }

    private function getParams()
    {
        return [
            'lang' => $this->languagesArray,
            'loggedUser' => $this->loggedIn,
        ];
    }

    public function loginUser()
    {
        //
    }
}

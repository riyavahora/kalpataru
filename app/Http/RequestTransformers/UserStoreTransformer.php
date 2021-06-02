<?php

namespace App\Http\RequestTransformers;

use App\Http\RequestTransformers\AbstractRequestTransformer;

/**
 * Class UserStoreTransformer
 * @package App\Http\RequestTransformers
 */
class UserStoreTransformer extends AbstractRequestTransformer
{
    protected function getMap(): array
    {
        return [
            'firstname' => 'first_name',
            'lastname' => 'last_name',
            'companyname' => 'company_name',
            'addline1' => 'address',
            'cityname' => 'city',
            'statename' => 'state',
            'countryename' => 'country',
            'phonenumber' => 'phone',
            'mobilenumber' => 'mobile',
            'wechatid' => 'wechat',
            'qq' => 'qq',
            'email' => 'email',
            'password' => 'password',
            'website' => 'website',
        ];
    }
}

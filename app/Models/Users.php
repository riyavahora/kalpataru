<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Users
 * @package App\Models\Users
 *
 * @property int user_id
 * @property string first_name
 * @property string last_name
 * @property string company_name
 * @property string address
 * @property string city
 * @property string state
 * @property string country
 * @property string phone
 * @property string mobile
 * @property string wechat
 * @property string qq
 * @property string email
 * @property string password
 * @property string website
 */
class Users extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'company_name',
        'address',
        'city',
        'state',
        'country',
        'phone',
        'mobile',
        'wechat',
        'qq',
        'email',
        'website',
    ];
}

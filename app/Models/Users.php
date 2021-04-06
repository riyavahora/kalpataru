<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Users
 * @package App\Models\Users
 *
 * @property int id
 * @property string key
 * @property string value
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
        'key',
        'value',
    ];
}

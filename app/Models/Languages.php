<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Languages
 * @package App\Models\Languages
 *
 * @property int id
 * @property string key
 * @property string value
 */
class Languages extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'languages';

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

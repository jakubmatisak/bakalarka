<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{

    protected $fillable = ['name', 'description', 'dateFrom','dateTo', 'room'];

}

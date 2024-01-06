<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Salida extends Model
{
    use HasFactory;

    protected $fillable = [
        'categoria_salida_id',
        'valor',
    ];


    public function categoriaSalida()
    {
        return $this->hasOne(CategoriaSalida::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Entrada extends Model
{
    use HasFactory;

    protected $fillable = [
        'categoria_entrada_id',
        'valor',
        'user_id',
    ];


    public function categoriaEntrada()
    {
        return $this->belongsTo(CategoriaEntrada::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

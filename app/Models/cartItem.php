<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cartItem extends Model
{
    use HasFactory;

    protected $table = "cart_items";

    protected $fillable = [
        "name_of_item",
        "price_of_item",
    ];


    public function saveItem($data){
        return cartItem::create($data);
    }

    public function fetchItem(){
        return cartItem::all();
    }
}

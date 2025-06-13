<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    use HasFactory;
    protected $fillable = [
    'title',
    'document_type',
    'background',
    'objective',
    'benefit',
    'detail',
    'strategy_schedule',
    'approval_user_id',
    ];

    public function approvalUser()
    {
        return $this->belongsTo(User::class, 'approval_user_id');
    }
}

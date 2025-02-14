<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use phpDocumentor\Reflection\Types\Parent_;

class Task extends Model
{
    protected $fillable = [
        'user_id',
        'card_id',
        'parent_id',
        'title',
        'is_completed',
    ];

    protected $with = ['card', 'children', 'user'];
    
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function card(): BelongsTo
    {
        return $this->belongsTo(Card::class);
    }
    public function parent(): BelongsTo
    {
        return $this->belongsTo(Task::class, 'parent_id');
    }
    public function childern(): HasMany
    {
        return $this->hasMany(Task::class, 'parent_id');
    }
}

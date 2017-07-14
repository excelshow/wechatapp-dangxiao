<?php

namespace app\api\model;

use think\Model;

class NewsContent extends Model
{
    protected $visible = ['content'];
    public function getContentAttr($value){
      return htmlspecialchars_decode($value);
    }
}

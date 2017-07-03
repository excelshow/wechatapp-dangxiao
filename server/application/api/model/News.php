<?php

namespace app\api\model;

use app\api\model\BaseModel;

class News extends BaseModel
{
    public static function getNewsList($page,$size){
      $pagingData = self::order("create_time desc")
        ->paginate($size ,true ,['page' => $page]);
      return $pagingData;
    }
}

<?php

namespace app\api\model;

use app\api\model\BaseModel;

class News extends BaseModel
{
    protected $hidden = ['topic_img_id'];
    public function topicImg(){
      return $this->belongsTo('Image','topic_img_id','id');
    }
    public function category(){
      return $this->belongsTo('Category','category_id','id');
    }
    public function newsContent(){
      return $this->hasOne('NewsContent','news_id','id');
    }
    public static function getNewsList($page,$size){
      $pagingData = self::where("status","=",1)
        ->with(['topicImg','category'])
        ->order("create_time desc")
        ->paginate($size ,true ,['page' => $page]);
      return $pagingData;
    }
    public static function getNewsById($id){
      $result = self::with(['newsContent'])
        ->find($id);
      return $result;
    }
}

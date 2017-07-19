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
    public static function getNewsList($page,$size,$id){
      if ($id) {
        $where['category_id'] = $id;
      }
      $where['status'] = 1;
      $pagingData = self::where($where)
        ->with(['topicImg','category'])
        ->order("id desc")
        ->paginate($size ,true ,['page' => $page]);
      return $pagingData;
    }
    public static function getNewsById($id){
      $result = self::with(['newsContent'])
        ->with(['category'])
        ->find($id);
      return $result;
    }
}

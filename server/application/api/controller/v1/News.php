<?php

namespace app\api\controller\v1;

use app\api\controller\BaseController;
use app\api\model\News as NewsModel;

use app\api\validate\IDMustBePostiveInt;
use app\api\validate\PagingParameter;
use app\lib\exception\NewsException;

class News extends BaseController
{
    public function getNewsList($page=1,$size=15){
      (new PagingParameter())->goCheck();
      $result = NewsModel::getNewsList($page,$size);
      return $result;
    }
    public function getNewsById($id){
      (new IDMustBePostiveInt())->goCheck();
      $result = NewsModel::getNewsById($id);
      if (!$result) {
        throw new NewsException();
      }
      return $result;
    }
}

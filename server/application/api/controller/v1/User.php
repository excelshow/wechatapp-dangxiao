<?php

namespace app\api\controller\v1;

use app\api\controller\BaseController;

use app\api\service\Token as TokenService;
use app\api\model\User as UserModel;

class User extends BaseController
{
  protected $beforeActionList = [
    "checkExclusiveScope" => ["only" => "getUserinfo"]
  ];

  public function getUserinfo(){
    $uid = TokenService::getCurrentUid();
    $userinfo = UserModel::getUserinfo($uid);
    return $userinfo;
  }
}

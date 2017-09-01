<?php

namespace app\api\controller;

use think\Controller;

use app\api\service\Token as TokenService;

class BaseController extends Controller
{
  //只允许用户访问
  protected function checkPrimaryScope(){
    TokenService::needPrimaryScope();
  }
  //允许管理员和用户访问
  protected function checkExclusiveScope(){
    TokenService::needExclusiveScope();
  }
  protected function checkSuperScope()
  {
    TokenService::needSuperScope();
  }
}

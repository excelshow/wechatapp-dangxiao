<?php

namespace app\api\model;

use think\Model;

class UserAddress extends BaseModel
{
    protected $hidden = ['id','delete_time','update_time'];
    protected $createTime = '';
}

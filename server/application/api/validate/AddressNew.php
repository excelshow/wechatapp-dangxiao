<?php

namespace app\api\validate;

class AddressNew extends BaseValidate
{
  protected $rule = [
    "name" => "require|isNotEmpty",
    "mobile" => "require|isMobile"
  ];
  protected $message = [];
}

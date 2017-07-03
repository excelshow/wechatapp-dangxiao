<?php

namespace app\lib\exception;

use app\lib\exception\BaseException;

class NewsException extends BaseException
{
  public $code = 404;
  public $msg = "文章不存在";
  public $errorCode = 20001;
}

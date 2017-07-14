import { Base } from "../../utils/base.js";

class My extends Base{

  constructor() {
    super();
  }

  getListgrids(callback) {
    var data = [
      {
        "cells__title": "",
        "navigators": [{
          "icon": "/images/icon/businessman.png",
          "cell__bd": "个人信息",
          "cell__ft": "修改资料",
          "page": "/pages/user/user"
        }]
      },
      {
        "cells__title": "",
        "navigators": [{
          "icon": "/images/icon/bookmark.png",
          "cell__bd": "我的收藏",
          "cell__ft": "",
          "page": ""
        }, {
          "icon": "/images/icon/clock.png",
          "cell__bd": "浏览历史",
          "cell__ft": "",
          "page": ""
        }]
      },
      {
        "cells__title": "",
        "navigators": [{
          "icon": "/images/icon/about.png",
          "cell__bd": "关于柏乡县党校小程序",
          "cell__ft": "",
          "page": "/pages/about/about"
        }]
      }
    ];
    callback && callback(data);
  }

}
export {My}
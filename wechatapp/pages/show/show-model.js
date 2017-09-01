import { Base } from "../../utils/base.js";

class Show extends Base {

  constructor() {
    super();
  }

  getBannerData(callback) {
    var params = {
      "url": "banner/2",
      "sCallback": function (data) {
        callback && callback(data.items);
      }
    }
    this.request(params);
  }
  //获取Banner跳转路径
  getBannerUrl(type, key_word, title) {
    console.log(type);
    var url = null;
    if (type == 1) {
      url = "/pages/news/news-detail/news-detail?id=" + key_word + "&title=" + title;
    } else if (type == 2) {
      url = "/pages/news/news-list/news-list?id=" + key_word + "&title=" + title;
    } else if (type == 2) {
      url = key_word;
    }
    return url;
  }
}

export { Show }
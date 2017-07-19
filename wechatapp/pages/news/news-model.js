import { Base } from "../../utils/base.js";

class News extends Base {

  constructor() {
    super();
  }

  getNewsById(id,callback) {
    wx.showLoading({
      title: '加载中',
    })
    var params = {
      "url": "news/" + id,
      "sCallback": function (data) {
        callback && callback(data);
      }
    }
    this.request(params);
  }

  getNewsList(data, callback) {
    var params = {
      "url": "news/list",
      "data": data,
      "sCallback": function (res) {
        callback && callback(res.data, res.current_page);
      }
    }
    this.request(params);
  }

}

export { News }
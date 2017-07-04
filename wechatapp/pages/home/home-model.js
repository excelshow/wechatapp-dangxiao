import { Base } from "../../utils/base.js";

class Home extends Base{

  constructor(){
    super();
  }

  getBannerData(callback){
    var params = {
      "url":"banner/1",
      "sCallback": function(data){
        callback && callback(data.items);
      }
    }
    this.request(params);
  }

  getNewsList(callback) {
    var page = 1;
    var size = 3;
    var params = {
      "url": "news/list?page=" + page + "&size=" + size,
      "sCallback": function (data) {
        callback && callback(data.data);
      }
    }
    this.request(params);
  }

}

export {Home}
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

  getNewsList(data,callback) {
    var params = {
      "url": "news/list",
      "data": data,
      "sCallback": function (res) {
        callback && callback(res.data);
      }
    }
    this.request(params);
  }

}

export {Home}
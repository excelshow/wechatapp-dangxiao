import { Base } from "../../utils/base.js";

class User extends Base {

  constructor() {
    super();
  }

  getUserinfo(callback) {
    var params = {
      "url": "user/userinfo",
      "sCallback": function (data) {
        callback && callback(data);
      }
    }
    this.request(params);
  }
  createOrUpdateAddress(data){
    var params = {
      "url": "address",
      "data": data,
      "type": "post"
    }
    this.request(params);
  }

}

export { User }
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

}

export { Show }
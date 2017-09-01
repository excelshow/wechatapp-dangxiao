import { Config } from "../utils/config.js";
import { Token } from 'token.js';

class Base{

  constructor() {
    this.baseRequestUrl = Config.restUrl;
  }
    //http 请求类, 当noRefech为true时，不做未授权重试机制
  request(params, noRefetch) {
    var that = this,
      url = this.baseRequestUrl + params.url;
    /*不需要再次组装地址*/
    if (params.setUpUrl == false) {
      url = params.url;
    }
    wx.request({
      url: url,
      data: params.data,
      method: params.type,
      header: {
        'content-type': 'application/json',
        'token': wx.getStorageSync('token')
      },
      success: function (res) {
        wx.hideLoading();
        that._processSuccess(res.data);
        // 判断以2（2xx)开头的状态码为正确
        // 异常不要返回到回调中，就在request中处理，记录日志并showToast一个统一的错误即可
        var code = res.statusCode.toString();
        var startChar = code.charAt(0);
        if (startChar == '2') {
          params.sCallback && params.sCallback(res.data);
        } else {
          if (code == '401') {
            if (!noRefetch) {
              that._refetch(params);
            }
          }else{
            that._processError(res.data);
          }
          params.eCallback && params.eCallback(res.data);
        }
      },
      fail: function (err) {
        //wx.hideNavigationBarLoading();
        that._processError(res.data);
        // params.eCallback && params.eCallback(err);
      }
    });
  }
  // 获取元素上的绑定的值
  getDataSet(event, key) {
    return event.currentTarget.dataset[key];
  }

  _processSuccess(data){
    
    if (data.code == "201"){
      wx.showToast({
        title: data.msg,
        icon: 'success',
        duration: 2000
      })
    }
  }

  _processError(err) {
    console.log(err)
    wx.showToast({
      title: err.msg,
      image: '/images/icon/round_close.png'
    })
  }

  _refetch(param) {
    var token = new Token();
    token.getTokenFromServer((token) => {
      this.request(param, true);
    });
  }

  login(callback) {
    wx.login({
      success: (res) => {
        var code = res.code;
        callback && callback(code);
      }
    });
  }

}

export { Base };
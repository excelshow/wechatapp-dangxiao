import { User } from 'user-model.js';
var user = new User();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:''
  },
  onLoad: function(){
    this._loadData();
  },
  _loadData: function(){
    user.getUserinfo((data)=>{
      this.setData({
        userinfo: data
      });
    });
  },
  createOrUpdateAddress: function (e) {
    var data = e.detail.value;
    user.createOrUpdateAddress(data);
  },
})
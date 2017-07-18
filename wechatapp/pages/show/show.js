
import { Show } from "show-model.js";
var show = new Show;
// pages/show/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._loadData();
  },
  onPullDownRefresh: function () {
    this._loadData();
  },
  _loadData: function () {
    show.getBannerData((data) => {
      this.setData({
        bannerArr: data
      });
    });
  },
  onBannerTap: function (event) {
    var type = show.getDataSet(event, "type");
    var key_word = show.getDataSet(event, "key_word");
    console.log(type);
    console.log(type);
  }
})
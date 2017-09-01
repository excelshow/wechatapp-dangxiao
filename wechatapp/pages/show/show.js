
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
    wx.showLoading({
      title: '加载中',
    })
    show.getBannerData((data) => {
      this.setData({
        bannerArr: data
      });
    });
  },
  onBannerTap: function (event) {
    var type = show.getDataSet(event, "type");
    var key_word = show.getDataSet(event, "key_word");
    var title = show.getDataSet(event, "title");
    var url = show.getBannerUrl(type, key_word, title);
    console.log(url);
    wx.navigateTo({
      url: url
    })
  }
})
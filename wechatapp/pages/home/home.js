
import { Home } from "home-model.js";
var home = new Home;

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
    home.getBannerData((data) => {
      this.setData({
        bannerArr: data
      });
    });
    home.getNewsList({id:1,page:1,size:3},(data) => {
      this.setData({
        NewsListArr: data
      });
      wx.stopPullDownRefresh();
    });
  },
  onNewsTap: function (event) {
    var id = home.getDataSet(event, "id");
    var title = home.getDataSet(event, "title");
    wx.navigateTo({
      url: "/pages/news/news-detail/news-detail?id=" + id + "&title=" + title
    })
  }


})
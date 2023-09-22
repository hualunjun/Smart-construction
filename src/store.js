import Vue from "vue";
import Vuex from "vuex";  //引入vuex

Vue.use(Vuex);  //使用vuex
export default new Vuex.Store({
  state: {
    //存放的键值对就是所要管理的状态
    
    dialogVisible1: false,
    siteId: 'null',
    videourl: 'null'

  },
  mutations: {
    showindow(state, bool) {
      state.dialogVisible1 = bool;
      // console.log(state.dialogVisible);
    },
    getsiteId(state, id) {
      state.siteId = id;
      console.log(state.siteId);
    },
    getvideourl(state, url) {
      state.videourl = url;
      console.log(state.videourl);
    }

  },
  actions: {
  },
  getters: {
  }
});
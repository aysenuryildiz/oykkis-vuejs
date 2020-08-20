require('../bootstrap');
//vuex eklentisi kaydedildi
window.Vue = require('vue');
import Vue from "vue"

import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        //uygulamanın her yerinden erişebilirsin 
        //doğrudan okuma okey,
        //doğrudan atama / güncelleme yapılamaz
      token:null,
      
    },

    //statede yapacağın değişiklileri mutationsda yapacaksn
    mutations: {
      setToken (state,token) {
        state.token=token;
      }
    },
    plugins: [createPersistedState({
      paths:["token"]
    })]
  })

export default store
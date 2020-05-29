import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    global: {},
    countries: []
  },
  mutations: {
    SAVE_DATA(state, data) {
      console.log(data)
      state.global = data.Global;
      state.countries = data.Countries;
    }
  },
  getters: {
    GLOBAL(state) {
      return state.global;
    },
    COUNTRY: (state) => (id) => {
      return state.countries.find(item => item.CountryCode === id);
    }
  },
  actions: {
    async GET_DATA(state) {
      const { data } = await axios.get('https://api.covid19api.com/summary');
      state.commit('SAVE_DATA', data);
    }
  },
  modules: {
  }
})

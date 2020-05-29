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
      // data.Countries = data.Countries.sort((a,b) => b.TotalConfirmed - a.TotalConfirmed);
      console.log(data);
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
    },
    LIST_COUNTRIES( state ) {
      return state.countries.map(item => {
        return {
          name: item.Country,
          id: item.CountryCode
        }
      });
    },
    GET_TOP_COUNTRIES(state) {
      return state.countries
               .sort((a,b) => b.TotalConfirmed - a.TotalConfirmed)
               .slice(0, 10);
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

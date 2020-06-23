import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    global: {},
    countries: [],
    statistics: {},
    slug: ""
  },
  mutations: {
    SAVE_DATA(state, data) {
      state.global = data.Global;
      state.countries = data.Countries;
    },
    SAVE_STATISTICS(state, data) {
      state.statistics = data;
    },
    SAVE_SLUG(state, data) {
      state.slug = data;
    }
  },
  getters: {
    GLOBAL(state) {
      return state.global;
    },
    COUNTRY: (state) => (id) => {
      const country = state.countries.find(item => item.CountryCode === id);
      state.slug = country.Slug;
      return country;
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
      let tmp = [...state.countries];
      return tmp
               .sort((a,b) => b.TotalConfirmed - a.TotalConfirmed)
               .slice(0, 10);
    },
    GET_STATISTICS(state) {
      return state.statistics;
    }
  },
  actions: {
    async GET_DATA(state) {
      let data = null;
       await axios.get('https://api.covid19api.com/summary').then(res => {
         data = res.data
      })
      state.commit('SAVE_DATA', data);
    },
    async GET_STATISTIC_BEFORE(state, slug) {
      const getCurDate = (date) => {
        const dd = String(date.getDate()).padStart(2, '0');
        const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = date.getFullYear();
        return yyyy + '-' + mm + '-' + dd;
      }
      let data = {};
      let curDate = new Date();
      curDate = new Date(curDate.setDate(curDate.getDate() - 1))
      const today = getCurDate(curDate);
      curDate = new Date(curDate.setDate(curDate.getDate() - 10))
      const firstDay = getCurDate(curDate);

      await axios.get(`https://api.covid19api.com/total/country/${slug}/status/confirmed?from=${firstDay}T00:00:00Z&to=${today}T00:00:00Z`).then(res => {
        data.confirmed = res.data
        // console.log(res)
      });
      await axios.get(`https://api.covid19api.com/total/country/${slug}/status/recovered?from=${firstDay}T00:00:00Z&to=${today}T00:00:00Z`).then(res => {
        data.recovered = res.data
      })
      state.commit('SAVE_STATISTICS', data);
    }
  },
  modules: {
  }
})

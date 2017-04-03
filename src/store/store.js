'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    titles: [],
    titleInput: '',
    showData: false,
  },
  mutations: {
    updateInput (state, payload) {
      state.titleInput = payload;
    },
    updateShowData (state, payload) {
      state.showData = payload;
    },
    updateTitles (state, payload) {
      state.titles = payload;
    }
  },
  actions: {
    updateInput ({commit}, payload) {
      commit('updateInput', payload);
    },
    updateShowData ({commit}, payload) {
      commit('updateShowData', payload);
    },
    updateTitles ({commit}, payload) {
      commit('updateTitles', payload)
    }
  }
})
import Vue from 'vue';
import Vuex from 'vuex';

import { getUsers, getUserRepositories } from '@/http/axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    mapUserIdToRepositories: {} as { [key: string]: any[] },
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_USER_REPOSITORY(state, { repositories, userId }) {
      state.mapUserIdToRepositories = {
        ...state.mapUserIdToRepositories,
        [userId]: repositories,
      };
    },
  },
  actions: {
    fetchAllUsers({ commit }) {
      getUsers()
        .then(users => {
          commit('SET_USERS', users);
        })
        .catch(error => {
          console.log('getUsers ERROR: ', error);
        });
    },
    fetchUserRepositories({ commit }, { userId }) {
      if (this.state.mapUserIdToRepositories[userId]) {
        return;
      }
      getUserRepositories(userId)
        .then(repositories => {
          commit('SET_USER_REPOSITORY', { repositories, userId });
        })
        .catch(error => {
          console.log('getUserRepositories ERROR: ', error);
        });
    },
  },
});

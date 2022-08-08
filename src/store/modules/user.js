import { getToken, setToken, removeToken } from '@/utils/auth';
import api from '@/api/login';

const { login, logout } = api;

const state = {
  token: getToken(),
  phone: '',
  username: '',
  avatar: ''
};

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_USERNAME(state, username) {
    state.username = username;
  },
  SET_AVATAR(state, avatar) {
    state.avatar = avatar;
  }
};

const actions = {
  Login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo)
        .then(response => {
          if (response.data && response.data.token) {
            setToken(token);
            commit('SET_TOKEN', token);
            resolve();
          } else {
            reject(response.msg);
          }
        })
        .catch(error => reject(error));
    });
  },

  Logout({ commit }) {
    return new Promise((resolve, reject) => {
      logout(getToken())
        .then(() => {
          removeToken();
          commit('SET_TOKEN', '');
          resolve();
        })
        .catch(error => reject(error));
    });
  },

  LocalLogout({ commit }) {
    return new Promise(resolve => {
      removeToken();
      commit('SET_TOKEN', '');
      alert('已登出');
      resolve();
    });
  }
};

export default {
  state,
  mutations,
  actions
};

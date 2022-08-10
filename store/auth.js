import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

export const state = () => {
  return {
    user: {},
    access_token: null,
  }
};

export const mutations = {
  SET_TOKEN(state, payload) {
    state.access_token = payload;

    const expireTime = jwtDecode(state.access_token).exp * 1000
    const expireTimeDate = new Date(expireTime)

    Cookies.set("FAST_JWT_TOKEN", state.access_token, { expires: expireTimeDate });
    this.$axios.setHeader("Authorization", `Bearer ${state.access_token}`);
  },

  UPDATE_STATE(state) {
    state.access_token = Cookies.get("FAST_JWT_TOKEN");
    this.$axios.setHeader("Authorization", `Bearer ${state.access_token}`);
  },

  SET_USER_DATA(state, data) {
    state.user = data
  },

  LOGOUT(state) {
    state.id = null;
    state.access_token = null;

    Cookies.remove("FAST_JWT_TOKEN");
  },
};

export const getters = {
  isLogged: (state) => {
    if(!process.client) return false
    return state.access_token ? true : false;
  },

  userData: (state) => {
    if (!process.client) return false;
    try {
      return state.user
    } catch (error) {
      console.log('No user data available \n', error)
    }
  }
};

export const actions = {
  async login(context, payload) {
    let formData = new FormData();
    formData.append("username", payload.username);
    formData.append("password", payload.password);

    return await this.$axios
      .post(`${process.env.BC_API}/auth/login`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      .then((result) => {
        context.commit("SET_TOKEN", result.headers["jwt-access-token"]);
        context.commit("SET_USER_DATA", result.data);
      })
      .catch((error) => {
        context.dispatch("errorHandler", error.response.data.message, {
          root: true,
        });

        return error.response.data.status;
      });
  },

  async logout({ commit }) {
    await this.$axios
      .post(`${process.env.BC_API}/auth/logout`)
      .then(() => {
        commit("LOGOUT");
      })
      .catch((error) =>
        context.dispatch("errorHandler", error, { root: true })
      );
  },

  async resetPassword(context, payload) {
    return await this.$axios
      .post(`${process.env.BC_API}/auth/reset-password?email=${payload}`)
      .catch((error) => {
        context.dispatch("errorHandler", error, { root: true })
        return error.response.data.status;
      });
  },

  async changePassword(context, payload) {
    let formData = new FormData();
    formData.append("password", payload.password);
    formData.append("old_password", payload.oldPassword);

    return await this.$axios
      .post(`${process.env.BC_API}/auth/change-password`, formData, {
        header: {
          Authorization: "Jwt " + context.state.access_token,
          "Content-Type": "multipart/form-data",
        },
      })
      .catch((error) => {
        context.dispatch("errorHandler", error, { root: true });
        return error.response.data.status;
      });
  },

  async fetchUserData(context) {
    if(context.state.user.user_id) return
    await this.$axios(`${process.env.BC_API}/user/me`)
      .then((result) => {
        context.commit("SET_USER", result.data)
        return context.getters.userData
      })
      .catch((error) => {
        console.log('User data not available')
        context.dispatch("errorHandler", error, { root: true })
      });
  },
};

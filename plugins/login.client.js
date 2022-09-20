import Cookies from "js-cookie";

export default function ({ store, app: { $axios }, redirect }) {
  if(!process.env.BC_API) return

  if (!store.getters["auth/isLogged"]) {
    store.commit("auth/UPDATE_STATE");
  }

  if (!store.getters["auth/userData"].user_id) {
    store.dispatch("auth/fetchUserData");
  }

  $axios.onRequest((config) => {
    if (store.state.auth.access_token) {
      config.headers.Authorization = "Bearer " + store.state.auth.access_token;
    }

    return config;
  });
}

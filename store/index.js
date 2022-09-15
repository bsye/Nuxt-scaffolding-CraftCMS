
import globalQuery from '/graphql/queries/globals/globals'
import siteInfo from "~/graphql/queries/root/siteInfo.js";

export const actions = {
  async nuxtServerInit({ commit }, { $graphql, $get }) {
    try {
      const entries = await this.$graphql.default.request(globalQuery());
      commit("globals/SET_GLOBAL", entries.globalSets);
    } catch (error) {
      console.log(error);
    }

    try {
      const site = await $graphql.default.request(siteInfo());
      let info = {};

      try {
        info.title = $get(site, "globalSet.plainTitle").substring(0, 200);
      } catch {
        info.title = false;
      }

      try {
        info.description = $get(site, "globalSet.plainDescription").substring(
          0,
          200
        );
      } catch (error) {
        info.description = false;
      }

      try {
        info.favicon = $get(site, "globalSet.image[0].url");
      } catch {
        info.favicon = false;
      }

      commit("globals/SET_SEO", info);
    } catch (error) {
      console.log(error);
    }
  },

  errorHandler(context, payload) {
    try {
      if (payload.response.status === 401) {
        context.commit("auth/setToken", null, { root: true });
      }
      return payload.response.data;
    } catch (error) {
      console.log(error)
    }
  },
};
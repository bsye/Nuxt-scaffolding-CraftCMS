<template>
  <div class="home">
    <MetaData :content="seoInfo" />
    <ContentManager
      class="block"
      :blocks="blocks"
    />
  </div>
</template>

<style>
</style>

<script>
import { entry } from "~/graphql/queries/single/homepage.js";

export default {
  async asyncData({ i18n, $graphql }) {
    try {
      const result = await $graphql.default.request(entry(), {
        slug: "home-page",
        siteId: i18n.localeProperties.siteId,
      });

      return {
        blocks: result.entry.contentManager,
        seoInfo: result.entry.seoInfo,
      };
    } catch (e) {
      console.log(e);
      error({ statusCode: 404, message: "404" });
    }
  },
};
</script>


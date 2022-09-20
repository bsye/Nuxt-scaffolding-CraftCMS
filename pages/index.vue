<template>
  <div class="home">
    <MetaData :content="content.seoInfo" />
    <ContentManager
      class="block"
      :elements="content.elements"
    />
  </div>
</template>

<style>
</style>

<script>
import homepage from "~/graphql/queries/single/homepage.js";

export default {
  data() {
    return {
      content: {},
    };
  },

  async asyncData({ i18n, $graphql }) {
    try {
      const result = await $graphql.default.request(homepage(), {
        slug: "home-page",
        siteId: i18n.localeProperties.siteId,
      });

      return {
        content: {
          elements: result.entry.contentManager,
          seoInfo: result.entry.seoInfo,
        },
      };
    } catch (e) {
      console.log(e);
      error({ statusCode: 404, message: "404" });
    }
  },
};
</script>


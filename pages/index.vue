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

  async asyncData({ route, i18n, $graphql }) {
    let search = {
      handle: "homePage_homePage_Entry",
      slug: "home-page",
      siteId: i18n.localeProperties.siteId,
    };

    try {
      const result = await $graphql.default.request(homepage(search));
      return {
        content: {
          entry: {
            pageId: result.entry.id,
            pageHandle: search.handle,
          },
          elements: result.entry.contentManager,
          seoInfo: result.entry.seoInfo,
        },
      };
    } catch (error) {
      console.log(error);
    }
  },
};
</script>


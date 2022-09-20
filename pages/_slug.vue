<template>
  <div class="page">
    <MetaData
      :content="content.seoInfo"
      :fallback="{
        title: content.title,
      }"
    />
    <PageHeader v-if="!content.hideTitle">
      {{ content.title }}
    </PageHeader>

    <ContentManager class="block" :elements="content.elements" />
  </div>
</template>

<style scoped lang="scss">
</style>

<script>
import pages from "~/graphql/queries/structure/pages.js";

export default {
  data() {
    return {
      content: {},
    };
  },

  nuxtI18n: {
    paths: {
      it: "/:slug",
      en: "/:slug",
    },
  },

  async asyncData({ route, i18n, $graphql, store, $getRoutesParams, error }) {
    try {
      const result = await $graphql.default.request(pages(), {
        slug: route.params.slug,
        siteId: i18n.localeProperties.siteId,
      });

      const localized = result.entry.localized;

      await store.dispatch("i18n/setRouteParams", $getRoutesParams(localized));

      return {
        content: {
          elements: result.entry.contentManager,
          hideTitle: result.entry.hideTitle,
          title: result.entry.title,

          seoInfo: result.entry.seoInfo,
        },
      };
    } catch (e) {
      console.log("error", e);
      error({ statusCode: 404, message: "404" });
    }
  },
};
</script>


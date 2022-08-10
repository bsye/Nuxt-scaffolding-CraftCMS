<template>
  <div
    class="page"
    :style="{ backgroundColor }"
  >
    <MetaData
      :content="content.seoInfo"
      :fallback="{
            title: content.title,
          }"
    />
    <PageHeader
      :content="content.pageContent"
      :offset="content.marginTop"
      v-if="!content.hideTitle"
    >
      {{ content.title }}
    </PageHeader>

    <ContentManager
      class="block"
      :elements="content.elements"
    />
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
    let search = {
      handle: "page_default_Entry",
      slug: route.params.slug,
      siteId: i18n.localeProperties.siteId,
    };

    try {
      const result = await $graphql.default.request(pages(search));
      const localized = result.entry.localized;

      await store.dispatch("i18n/setRouteParams", $getRoutesParams(localized));

      return {
        content: {
          entry: {
            pageId: result.entry.id,
            pageHandle: search.handle,
            slug: search.slug,
          },
          elements: result.entry.contentManager,
          hideTitle: result.entry.optionHideTitle,
          pageContent: result.entry,
          title: result.entry.title,

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


<template>
  <div class="page">
    <MetaData
      :content="seoInfo"
      :fallback="{
        title: title,
      }"
    />
    <PageHeader v-if="!hideTitle">
      {{ title }}
    </PageHeader>

    <ContentManager class="block" :blocks="blocks" />
  </div>
</template>

<style scoped lang="scss">
</style>

<script>
import { entry } from "~/graphql/queries/entry/pages.js";

export default {
  async asyncData({ route, i18n, $graphql, store, $getRoutesParams, error }) {
    try {
      const result = await $graphql.default.request(entry(), {
        slug: route.params.slug,
        siteId: i18n.localeProperties.siteId,
      });
      const localized = result.entry.localized;
      await store.dispatch("i18n/setRouteParams", $getRoutesParams(localized));

      return {
        blocks: result.entry.contentManager,
        hideTitle: result.entry.hideTitle,
        title: result.entry.title,
        seoInfo: result.entry.seoInfo,
      };
    } catch (e) {
      console.log("error", e);
      // error({ statusCode: 404, message: "404" });
    }
  },
};
</script>


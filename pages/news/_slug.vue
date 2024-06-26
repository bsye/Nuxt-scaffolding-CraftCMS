<template>
  <article class="news">
    <MetaData
      :content="seoInfo"
      :fallback="{
        title: title,
      }"
      itemtype="https://schema.org/NewsArticle"
      itemscope
    >
      <meta
        itemprop="headline"
        :content="title"
      />
      <meta
        itemprop="datePublished"
        :content="date"
      />
    </MetaData>

    <div class="container offset simple">
      <h4>
        {{ castDate }}
      </h4>
      <h1>
        {{ title }}
      </h1>
    </div>

    <ContentManager
      class="block"
      :blocks="blocks"
    />
  </article>
</template>

<style scoped lang="scss">
.news {
  .simple {
    h4 {
      @apply text-sm
          mb-1.5
          mt-10;
    }

    h3 {
      @apply font-medium;
    }

    h1 {
      @apply text-2xl
          mb-4;
    }
  }
}
</style>

<script>
import { entry } from "~/graphql/queries/entry/news.js";

export default {
  computed: {
    castDate() {
      try {
        const date = new Date(this.date);
        return `${date.getMonth()}.${date.getFullYear()}`;
      } catch {
        return false;
      }
    },
  },

  nuxtI18n: {
    paths: {
      it: "/news/:slug",
      en: "/news/:slug",
    },
  },

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
        date: result.entry.dateCreated,
        pageContent: result.entry,
        title: result.entry.title,
        seoInfo: result.entry.seoInfo,
      };
    } catch (e) {
      console.log(e);
      error({ statusCode: 404 });
    }
  },
};
</script>


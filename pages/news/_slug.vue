<template>
  <article class="news">
    <MetaData
      :content="content.seoInfo"
      :fallback="{
          title: content.title,
        }"
      itemtype="https://schema.org/NewsArticle"
      itemscope
    >
      <meta
        itemprop="headline"
        :content="content.title"
      />
      <meta
        itemprop="datePublished"
        :content="this.content.date"
      />
    </MetaData>

    <div class="container offset simple">
      <h3 class="size-text-xl">
        {{ $t('News') }}
      </h3>
      <h4>
        {{ castDate }}
      </h4>
      <h1>
        {{ $t(content.title) }}
      </h1>
    </div>

    <ContentManager
      class="block"
      :elements="content.elements"
    />
  </article>
</template>

<style scoped lang="scss">
  .news {
    .simple {
      h4 {
        @apply
          text-sm
          mb-1.5
          mt-10;
      }

      h3 {
        @apply
          font-medium;
      }

      h1 {
        @apply
          text-2xl
          mb-4;
      }
    }
  }
</style>

<script>
import news from "~/graphql/queries/structure/news.js";

export default {
  data() {
    return {
      content: {},
    };
  },

  computed: {
    castDate() {
      try {
        const date = new Date(this.content.date);
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
    let search = {
      handle: "news_default_Entry",
      slug: route.params.slug,
      siteId: i18n.localeProperties.siteId,
    };

    try {
      const result = await $graphql.default.request(news(search));
      const localized = result.entry.localized;
      console.log(localized);
      await store.dispatch("i18n/setRouteParams", $getRoutesParams(localized));

      return {
        content: {
          entry: {
            pageId: result.entry.id,
            pageHandle: search.handle,
            slug: search.slug,
          },
          elements: result.entry.contentManager,
          date: result.entry.dateCreated,
          hideTitle: result.entry.optionHideTitle,
          pageContent: result.entry,
          title: result.entry.title,

          seoInfo: result.entry.seoInfo,
        },
      };
    } catch (e) {
      console.log(e);
      error({ statusCode: 404 });
    }
  },
};
</script>

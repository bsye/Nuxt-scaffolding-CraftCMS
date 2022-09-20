<template>
  <div class="archive news">
    <MetaData
      :content="seoInfo"
      :fallback="{
        title: title,
        description: description,
      }"
    />
    <PageHeader>
      {{ title }}
    </PageHeader>
    <div class="container">
      <div class="abstract" v-if="description" v-html="description"></div>

      <div class="site-grid one">
        <TeaserNews
          v-for="element in teaser"
          :key="element.id"
          :content="{
            title: element.title,
            date: element.dateCreated,
            image: element,
            url: element.url,
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import newsArchive from "~/graphql/queries/single/newsArchive.js";
import { entries } from "~/graphql/queries/structure/news.js";

export default {
  data() {
    return {
      content: {},
    };
  },

  nuxtI18n: {
    paths: {
      it: "/news/",
      en: "/news/",
    },
  },

  async asyncData({ i18n, $graphql, error }) {
    try {
      const [resArchive, resEntries] = await $graphql.default.batchRequests([
        {
          document: newsArchive(),
          variables: {
            type: "newsArchive",
            siteId: i18n.localeProperties.siteId,
          },
        },
        {
          document: entries(),
          variables: {
            section: "news",
            limit: 100,
            siteId: i18n.localeProperties.siteId,
          },
        },
      ]);
      return {
        description: resArchive.data.entry.textContent,
        title: resArchive.data.entry.title,
        teaser: resEntries.data.entries,
        seoInfo: resArchive.data.entry.seoInfo,
      };
    } catch (e) {
      console.log(e);
      error({ statusCode: 404, message: "404" });
    }
  },
};
</script>


<style scoped lang="scss">
</style>
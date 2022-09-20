<template>
  <div class="archive news">
    <MetaData
      :content="content.seoInfo"
      :fallback="{
          title: content.title,
          description: content.description
        }"
    />
    <PageHeader>
      {{ content.title }}
    </PageHeader>
    <div class="container">
      <div
        class="abstract"
        v-if="content.description"
        v-html="content.description"
      >
      </div>

      <div class="site-grid one">
        <TeaserNews
          v-for="element in content.teaser"
          :key="element.id"
          :content="{
                  'title': element.title,
                  'date': element.dateCreated,
                  'image': element,
                  'url': element.url,
              }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import newsArchive from "~/graphql/queries/single/newsArchive.js";

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

  async asyncData({ route, i18n, $graphql }) {
    try {
      const result = await $graphql.default.request(newsArchive(), {
        section: "news",
        limit: 100,
        type: "newsArchive",
        siteId: i18n.localeProperties.siteId,
      });
      return {
        content: {
          description: result.entry.textContent,
          title: result.entry.title,
          teaser: result.entries,
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


<style scoped lang="scss">
</style>
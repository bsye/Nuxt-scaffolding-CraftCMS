<template>
  <div class="archive news">
    <MetaData
      :content="content.seoInfo"
      :fallback="{
          title: content.title,
          description: content.description
        }"
    />
    <PageHeader :content="content.archive">
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

  head() {
    return {
      bodyAttrs: {
        class: this.$get(this.content, "headerColor") ? "clear" : "dark",
      },
    };
  },

  nuxtI18n: {
    paths: {
      it: "/news/",
      en: "/news/",
    },
  },

  async asyncData({ route, i18n, $graphql }) {
    let search = {
      structure: "news",
      limit: 100,

      type: "newsArchive",
      handle: "newsArchive_newsArchive_Entry",
      siteId: i18n.localeProperties.siteId,
    };

    try {
      const result = await $graphql.default.request(newsArchive(search));
      return {
        content: {
          archive: result.entry,
          description: result.entry.fieldTextContent,
          title: result.entry.title,
          headerColor: result.entry.headerColor,

          teaser: result.entries,
          seoInfo: result.entry.seoInfo,
        },
      };
    } catch {
      return false;
    }
  },
};
</script>


<style scoped lang="scss">
</style>
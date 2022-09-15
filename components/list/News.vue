<template>
  <div v-if="slider">
    <ElementSlider>
      <TeaserNews
        v-for="element in elements"
        :key="element.id"
        class="swiper-slide"
        :content="{
                    'title': element.title,
                    'date': element.dateCreated,
                    'image': element,
                    'url': element.url,
                }"
      />
    </ElementSlider>
  </div>
  <div
    v-else
    class="site-grid two"
  >
    <TeaserNews
      v-for="element in elements"
      :key="element.id"
      class="swiper-slide"
      :content="{
                'title': element.title,
                'date': element.dateCreated,
                'image': element,
                'url': element.url,
            }"
    />
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
    },

    entry: {
      type: Object,
    },
  },

  data() {
    return {
      seeAll: null,
    };
  },

  computed: {
    responsiveVisibility() {
      let visibility = this.content.responsiveVisibility.join(" ");
      return visibility;
    },

    slider() {
      return this.content.isSliderSettings;
    },

    selection() {
      return this.content.listFilter;
    },

    elements() {
      if (this.content.listFilter == "seeAll") {
        return this.seeAll.entries;
      } else {
        return this.content.selectNews;
      }
    },
  },

  async fetch() {
    if (this.content.listFilter == "seeAll") {
      let search = {
        section: "news",
        limit: this.content.elementQuantity ? this.content.elementQuantity : 10,
      };

      try {
        this.seeAll = await this.$graphql.default.request(allNews(search));
      } catch {}
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
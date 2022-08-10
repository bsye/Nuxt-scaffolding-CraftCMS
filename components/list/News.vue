<template>
  <div
    v-if="slider">
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
    class="site-grid two">
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
import allNews from '~/graphql/queries/field/allNews.js'

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
        }
    },

    computed: {
        responsiveVisibility() {
            let visibility = this.content.optionResponsiveVisibility.join(' ')
            return visibility
        },

        slider() {
            return this.content.optionIsSlider
        },

        selection() {
            return this.content.fieldListFilter
        },

        elements() {
            if (this.content.fieldListFilter == 'seeAll') {
                return this.seeAll.entries
            } else {
                return this.content.selectNews
            }
        }
    },

    async fetch() {
        if(this.content.fieldListFilter == 'seeAll') {
            let search = {
                section: 'news',
                limit: this.content.optionElementQuantity ? this.content.optionElementQuantity : 10
            }
        
            try {
                this.seeAll = await this.$graphql.default.request(allNews(search));
            } catch {}
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
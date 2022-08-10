<template>
  <div class="results">
    <h2 v-if="content">{{ $t('News') }} {{ '(' + content.length}} {{ $t('results') + ')' }}</h2>
    <div class="site-grid two">
      <div
        v-for="teaser in content"
        :key="teaser.id"
      >
        <TeaserNews :content="{
                    title: teaser.title,
                    date: teaser.dateCreated,
                    url: teaser.url,
                    image: teaser,
            }" />

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
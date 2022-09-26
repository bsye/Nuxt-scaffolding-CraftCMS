<template>
  <div
    class="embed"
    v-html="content.embed"
  >
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
    .embed {
        @apply
          pb-[56.25%]
          h-0
          relative;

        &::v-deep {
            iframe {
                @apply
                  h-full
                  absolute
                  inset-0
                  w-full;
            }
        } 
    }
</style>
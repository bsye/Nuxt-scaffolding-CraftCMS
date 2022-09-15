<template>
  <LinkChecker
    :alt="content.title"
    class="teaser news"
    :url="content.url"
    linkType="entry"
  >
    <div class="aspect">
      <BlockImage :content="content.image" />
    </div>

    <h5>{{ castDate }}</h5>
    <h3>{{ content.title }}</h3>
  </LinkChecker>
</template>

<script>
export default {
  props: {
    content: {
      title: {
        type: String,
        required: true,
      },

      date: {
        type: String,
        required: true,
      },

      url: {
        type: String,
        required: true,
      },

      image: {
        type: String,
        required: true,
      },
    },
  },

  computed: {
    castDate() {
      try {
        console.log(this.content.date);
        const date = new Date(this.content.date);
        return `${date.getMonth()}.${date.getFullYear()}`;
      } catch {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .teaser {
    &.news {
      h3 {
        @apply
          mt-0
          text-base
          lg:text-lg
          leading-tight;
      }

      h5 {
        @apply
          mt-3
          text-sm;
      }

        .aspect {
            @apply
            relative
            overflow-hidden
            aspect-w-13
            aspect-h-10;

            &::v-deep {
                img {
                    @apply
                    absolute
                    h-full
                    w-full
                    object-cover
                    object-center
                    inset-0;
                }
            }
        }
    }
  }
</style>
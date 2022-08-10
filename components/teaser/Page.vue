<template>
    <LinkChecker 
        :alt="content.title"
        class="teaser page"
        :url="content.url" 
        linkType="entry"
    >
        <FieldImage
            :content="content.image"/>

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
    
            url: {
                type: String,
                required: true,
            },
    
            image: {
                type: String,
                required: true,
            },
        }
    }
}
</script>

<style lang="scss" scoped>
  .teaser {
    &.page {
      h3 {
        @apply
          mt-3
          text-base
          lg:text-lg
          leading-tight;
      }
    }
  }
</style>
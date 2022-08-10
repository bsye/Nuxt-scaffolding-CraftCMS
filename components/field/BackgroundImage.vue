<template>
    <NuxtPicture
        :src="image.src"
        v-if="image.src"
        class="background"
        quality='80'
        preload
        sizes='xs:300px sm:500px md:768px lg:1280px xl:1440px 2xl:1920px'
        :imgAttrs="{
            height: image.height,
            width: image.width,
            title: image.title,
            alt: image.alt,
        }"
    />
</template>

<script>

export default {
    props: {
        content: {
            type: Object,
        },
    },


    computed: {
        image() {
            try {
                return {
                    src: this.content.fieldBackgroundImage[0].url,
                    alt: this.content.fieldBackgroundImage[0].alt ? this.content.fieldBackgroundImage[0].alt : 'Background image',
                    title: this.content.fieldBackgroundImage[0].title ? this.content.fieldBackgroundImage[0].title : 'Background image',
                    height:  this.content.fieldBackgroundImage[0].height,
                    width:  this.content.fieldBackgroundImage[0].width,
                }
            } catch (error) {
                return {}
            }
        },
    }
}
</script>

<style lang="scss" scoped>
  .background {
    @apply
      absolute
      inset-0
      object-cover;

    &::v-deep {
        img {
            @apply
              w-full
              h-full
              object-cover
        }
    }

  }
</style>
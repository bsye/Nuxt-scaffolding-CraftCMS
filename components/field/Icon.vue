<template>
    <NuxtPicture
        :src="image.src"
        v-if="image.src"
        quality='60'
        preload
        loading="lazy"
        sizes='xs:400px sm:560px md:720px lg:880px xl:1180px 2xl:1540px'
        :imgAttrs="{
            style: `width: ${width}px`,
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
                    src: this.content.fieldIcon[0].url,
                    alt: this.content.fieldIcon[0].alt ? this.content.fieldIcon[0].alt : 'image',
                    title: this.content.fieldIcon[0].title ? this.content.fieldIcon[0].title : 'image',
                    height: this.content.fieldIcon[0].height,
                    width: this.content.fieldIcon[0].width,
                }
            } catch (error) {
                return {}
            }
        },

        width() {
            try {
                return this.content.optionImageWidth ? this.content.optionImageWidth : false
            } catch {
                return false
            }
        }
    }
}
</script>

<style>

</style>
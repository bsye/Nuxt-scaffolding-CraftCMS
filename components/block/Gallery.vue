<template>
  <div>
    <ElementSlider>
      <NuxtPicture
        v-for="image in content.image"
        quality='60'
        preload
        loading="lazy"
        sizes='xs:400px sm:560px md:720px lg:880px xl:1180px 2xl:1540px'
        :imgAttrs="{
                height: image.height,
                width: image.width,
                alt: image.alt,
            }"
        :key="image.id"
        class="swiper-slide"
        :src="prepareImage(image.url)"
      />
    </ElementSlider>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
    },
  },

  computed: {
    responsiveVisibility() {
      try {
      } catch (error) {
        let visibility = this.content.responsiveVisibility.join(" ");
        return visibility;
      }
    },
  },

  methods: {
    prepareImage(imageUrl) {
      try {
        return `${imageUrl}`;
      } catch (error) {}
    },
  },
};
</script>

<style>
</style>
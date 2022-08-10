<template>
  <div
    v-if="backgroundImage"
    class="hero"
  >
    <FieldBackgroundImage :content="content" />
    <h1 class="title">
      <slot />
    </h1>
  </div>
  <div
    v-else
    class="container simple"
    :class="{'offset': !offset}"
  >
    <h1 class="size-text-xl">
      <slot />
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
    },

    offset: {
      type: Boolean,
      required: false,
    },
  },

  computed: {
    backgroundImage() {
      try {
        return `url(${this.content.fieldBackgroundImage[0].url})`;
      } catch {}
    },
  },
};
</script>

<style scoped lang="scss">
.hero {
    @apply
    min-h-[420px]
    bg-center
    flex
    relative
    justify-center
    items-center
    text-white
    bg-cover
    mb-8

    lg:mb-12
    lg:min-h-[780px];

    h1 {
        @apply
            max-w-sm
            text-center
            z-10
            px-[20px]
            lg:max-w-3xl
            mx-auto
    }
}

h1 {
    @apply
        z-10
        font-medium;

        &.title {
            @apply
              text-2xl
              lg:text-6xl
        }
}
</style>
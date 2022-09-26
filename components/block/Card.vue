<template>
  <div
    class="card"
    :class="[responsiveVisibility,
            contentAlignment,
            contentWidth]"
    :style="{backgroundColor,
            color}"
  >
    <BlockBackgroundImage :content="this.content" />

    <BlockIcon
      class="icon"
      :content="content"
    />

    <div
      class="title"
      v-html="contentTitle"
    />

    <div
      class="subtitle"
      v-html="contentSubtitle"
    />

    <div
      class="description"
      v-html="contentText"
    />

    <BlockButtons :content="content" />
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
        let visibility = this.content.responsiveVisibility.join(" ");
        return visibility;
      } catch (error) {}
    },

    contentWidth() {
      return this.content.contentWidth;
    },

    contentTitle() {
      return this.content.titleContent;
    },

    contentSubtitle() {
      return this.content.subtitle;
    },

    contentText() {
      return this.content.textContent;
    },

    contentAlignment() {
      return this.content.alignment;
    },

    color() {
      return this.content.textColor;
    },

    backgroundColor() {
      return this.content.backgroundColor;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
    @apply
        w-full
        relative
        flex
        h-full
        flex-col

        p-[20px]
        lg:p-[40px];

    .icon {
        @apply
          mb-10;
    }

    .title {
        @apply
            text-2xl
            leading-none
            mb-0;
    }

    .subtitle {
        @apply
          text-lg
          mb-6;
    }

    &.horizontal-center {
        @apply
            items-center;
    }

    &.horizontal-left {
        @apply
            items-start;
    }

    &.horizontal-right {
        @apply
            items-end;
    }

    .description {
        @apply
          text-sm
          leading-[18px]
          mb-12;
    }
}
</style>
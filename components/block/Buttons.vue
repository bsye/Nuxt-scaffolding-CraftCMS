<template>
  <div
    class="buttons"
    :class="[
                content.orientation,
                content.alignment,
            ]"
  >
    <BlockButton
      v-for="button in content.buttons"
      :key="button.id"
      :content="{
                buttonType: button.buttonStyle,
            }"
    >
      <LinkChecker
        :linkType="button.buttons.linkType"
        :alt="button.buttons.text"
        :url="button.buttons.url"
      >
        {{ button.buttons.text }}
      </LinkChecker>
    </BlockButton>
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

<style lang="scss" scoped>
    .buttons {
        @apply
          flex
          -mx-2.5;

        &.vertical {
            @apply
              flex-col
              items-start;

            &.horizontal-center {
                @apply
                  items-center;
            }

            &.horizontal-right {
                @apply
                  items-end;
            }

            > * {
                @apply
                  mb-5
                  last:mb-0;
            }
        }

        &.horizontal-center {
            @apply
              justify-center;
        }

        &.horizontal-right {
            @apply
              justify-end;
        }
    }
</style>
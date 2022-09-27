<template>
  <button class="button" :class="[content.buttonType]">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    content: {
      buttonType: {
        type: String,
        default: "standard",
        required: false,
      },

      default: () => ({
        buttonType: "standard",
      }),
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  @apply block;

  > * {
    @apply hover:opacity-100
                border-dark-500
                text-dark-500;

    &:hover {
      @apply bg-dark-500
                    text-gray-200;
    }
  }

  &.fullBlack {
    > * {
      @apply bg-dark-500
                    text-white;

      &:hover {
        @apply opacity-70;
      }
    }
  }
  &.fullWhite {
    > * {
      @apply bg-white
                    text-black;

      &:hover {
        @apply opacity-70;
      }
    }
  }

  &.borderedBlack {
    > * {
      @apply border border-dark-500
                    text-dark-500;

      &:hover {
        @apply bg-dark-500
                        text-gray-200;
      }
    }
  }

  &.borderedWhite {
    > * {
      @apply border border-white
                    text-white;

      &:hover {
        @apply text-dark-500
                        bg-white;
      }
    }
  }

  > * {
    @apply rounded-full
                inline-block
                mx-2.5
                uppercase
                text-sm
                py-[9px]
                px-7
                transition-all
                duration-300
                lg:px-8
                lg:py-3;
  }
}
</style>
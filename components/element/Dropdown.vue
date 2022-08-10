<template>
  <div class="dropdown">
    <div
      @click="open = !open"
      class="title"
    >
      {{ title }}
      <Arrow :class="open == true ? 'open arrow' : 'arrow' " />
    </div>
    <TransitionHeight v-show="open">
      <slot />
    </TransitionHeight>
  </div>
</template>

<script>
import Arrow from "~/static/assets/arrow.svg?inline";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },

  components: {
    Arrow,
  },

  data() {
    return {
      open: false,
    };
  },
};
</script>

<style scoped lang="scss">
    .arrow {
        @apply
          -rotate-90
          transition-all
          h-[10px]
          duration-200;

        * {
            @apply
              stroke-1;

            stroke: theme('colors.dark.500');
        }

        &.open {
            @apply
              rotate-0;
        }
    }

    .title {
        @apply
          flex
          items-center
          mb-0
          cursor-pointer
          transition-all
          duration-300
          hover:opacity-50
          justify-between;
    }

    .dropdown {
        @apply
          pb-[6px]
          max-w-[500px]
          border-b
          border-dark-500
          border-opacity-50
          mb-4;
    }
</style>
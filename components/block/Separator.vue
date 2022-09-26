<template>
  <div
    class="separator"
    :style="{backgroundColor}"
    :class="content.separator"
  >
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
    backgroundColor() {
      return this.content.backgroundColor;
    },
  },
};
</script>

<style scoped lang="scss">
    .separator {
        &.separator-small {
            @apply
              h-[1px];
        }

        &.separator-medium {
            @apply
              h-1;
        }

        &.separator-big {
            @apply
              h-2;
        }
    }
</style>
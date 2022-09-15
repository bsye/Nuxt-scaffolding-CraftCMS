<template>
  <div
    class="wrapper"
    :style="{backgroundColor,
                 color}"
  >
    <div
      class="columns"
      :class="[responsiveVisibility, contentWidth, contentAlignment, contentDirection]"
    >

      <ContentManager
        v-for="column in content.children"
        :key="column.id"
        class="column"
        :class="[columnVisibility(column.responsiveVisibility)]"
        :elements="column.children"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
    },
  },

  methods: {
    columnVisibility(values) {
      try {
        let visibility = values.join(" ");
        return visibility;
      } catch (error) {}
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

    backgroundColor() {
      return this.content.backgroundColor;
    },

    color() {
      return this.content.textColor;
    },

    contentAlignment() {
      return this.content.alignment;
    },

    contentDirection() {
      return this.content.direction;
    },
  },
};
</script>

<style lang="scss">
    .columns {
        @apply
            w-full
            h-auto

            grid

            gap-[20px]
            grid-cols-1
            md:grid-cols-2
            auto-cols-min
            overflow-hidden
            lg:grid-cols-4
            lg:gap-[35px];

        > div {
            @apply
                h-full;

            > div {
                &:only-child {
                    @apply
                        contents;
                }
            }
        }

        &.horizontal-center {
            @apply
                justify-center;
        }

        &.horizontal-left {
            @apply
                justify-start;
        }

        &.horizontal-right {
            @apply
                justify-end;
        }

        &.vertical-center {
            > .column {
                @apply
                    flex
                    flex-col
                    justify-center;
            }
        }

        &.vertical-end {
            > .column {
                @apply
                    flex
                    flex-col
                    justify-end;
            }
        }

        &.vertical-start {
            > .column {
                @apply
                    flex
                    flex-col
                    justify-start;
            }
        }
    }
</style>
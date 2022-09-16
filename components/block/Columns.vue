<template>
  <div
    class="wrapper"
    :style="{backgroundColor,
                 color}"
  >
    <div
      class="columns"
      :class="[responsiveVisibility, contentWidth, contentAlignment, contentDirection, columnsNumber]"
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

    columnsNumber() {
      try {
        let columns = [
          this.content.columnNumberMobile,
          this.content.columnNumberTablet,
          this.content.columnNumberDesktop,
          this.content.columnNumberWide,
        ];
        return columns.join(" ");
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

        &.mobile-grid-1 {
          @apply
            grid-cols-1;
        }

        &.mobile-grid-2 {
          @apply
            grid-cols-2;
        }

        &.mobile-grid-3 {
          @apply
            grid-cols-3;
        }

        &.mobile-grid-4 {
          @apply
            grid-cols-4;
        }

        &.mobile-grid-auto {
          @apply
            grid-cols-none
            auto-cols-auto
            grid-flow-col;
        }

        &.tablet-grid-1 {
          @apply
            md:grid-cols-1;
        }

        &.tablet-grid-2 {
          @apply
            md:grid-cols-2;
        }

        &.tablet-grid-3 {
          @apply
            md:grid-cols-3;
        }

        &.tablet-grid-4 {
          @apply
            md:grid-cols-4;
        }

        &.tablet-grid-auto {
          @apply
            md:grid-cols-none
            md:auto-cols-auto
            md:grid-flow-col;
        }

        &.desktop-grid-1 {
          @apply
            lg:grid-cols-1;
        }

        &.desktop-grid-2 {
          @apply
            lg:grid-cols-2;
        }

        &.desktop-grid-3 {
          @apply
            lg:grid-cols-3;
        }

        &.desktop-grid-4 {
          @apply
            lg:grid-cols-4;
        }

        &.desktop-grid-auto {
          @apply
            lg:grid-cols-none
            lg:auto-cols-auto
            lg:grid-flow-col;
        }

        &.wide-grid-1 {
          @apply
            xl:grid-cols-1;
        }

        &.wide-grid-2 {
          @apply
            xl:grid-cols-2;
        }

        &.wide-grid-3 {
          @apply
            xl:grid-cols-3;
        }

        &.wide-grid-4 {
          @apply
            xl:grid-cols-4;
        }

        &.wide-grid-auto {
          @apply
            xl:grid-cols-none
            xl:auto-cols-auto
            xl:grid-flow-col;
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
<template>
    <div
        class="group"
        :class="[responsiveVisibility,
                 contentHeight]"
        :style="{backgroundColor,
                 color}"
    >
        <FieldBackgroundImage
            :content="this.content"/>

        <div
            class="inner"
            :class="[contentAlignment, 
                     contentDirection,
                     contentWidth]"
        >
            <ContentManager
                class="block"
                :elements="content.children"
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

    computed: {
        backgroundColor() {
            return this.content.optionBackgroundColor;
        },

        color() {
            return this.content.optionTextColor;
        },

        responsiveVisibility() {
            try {
                let visibility = this.content.optionResponsiveVisibility.join(' ')
                return visibility
            } catch (error) {
                return []
            }
        },

        contentHeight() {
            return this.content.optionMinHeight
        },

        contentWidth() {
            return this.content.optionContentWidth
        },

        contentAlignment() {
            return this.content.optionAlignment
        },

        contentDirection() {
            return this.content.optionDirection
        },
    },
}
</script>

<style lang="scss" scoped>
    .group {
        @apply
            bg-center
            relative
            bg-no-repeat
            bg-cover;

        .inner {
            @apply
              w-full
              flex
              h-full
              flex-col
              justify-around;

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

            &.vertical-center {
                @apply
                    justify-center;
            }

            &.vertical-end {
                @apply
                  justify-end;
            }

            &.vertical-start {
                @apply
                  justify-start;
            }
        }

        &.height-screen {
            @apply
                h-screen;
        }

        &.height-auto {
            @apply
              h-auto;
        }

        &.height-medium {
            @apply
              flex
              items-center
              min-h-[420px]
              lg:min-h-[780px];
        }
    }
</style>
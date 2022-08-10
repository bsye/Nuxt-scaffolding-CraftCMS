<template class="text">
    <div class="spacer"
         :class="[
            content.fieldSpacer,
            content.fieldSpacerMobile
            ]"
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
}
</script>

<style lang="scss" scoped>
    .spacer {
        @apply
          flex
          flex-col;

        &.space-verysmall {
            @apply
              md:h-[10px];
        }

        &.space-small {
            @apply
              md:h-[35px];
        }

        &.space-medium {
            @apply
              md:h-[60px];
        }

        &.space-large {
            @apply
              md:h-[75px];
        }

        &.space-verylarge {
            @apply
              md:h-[100px];
        }

        &.space-verysmall-mobile {
            @media screen and (max-width: 767px) {
                @apply
                  h-[10px];
            }
        }

        &.space-small-mobile {
            @media screen and (max-width: 767px) {
                @apply
                  h-[35px];
            }
        }

        &.space-medium-mobile {
            @media screen and (max-width: 767px) {
                @apply
                  h-[60px];
            }
        }

        &.space-large-mobile {
            @media screen and (max-width: 767px) {
                @apply
                  h-[75px];
            }
        }

        &.space-verylarge-mobile {
            @media screen and (max-width: 767px) {
                @apply
                  h-[100px];
            }
        }
    }
</style>
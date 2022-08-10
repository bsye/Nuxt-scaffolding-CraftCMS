<template>
    <div class="buttons"
         :class="[
                content.optionOrientation,
                content.optionAlignment,
            ]">
        <FieldButton
            v-for="button in content.fieldButtons"
            :key="button.id"
            :content="{
                buttonType: button.fieldButtonStyle,
            }"
        >
            <LinkChecker
                :linkType="button.fieldButton.linkType"
                :alt="button.fieldButton.text"
                :url="button.fieldButton.url"
            >
                {{ button.fieldButton.text }}
            </LinkChecker>
        </FieldButton>
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
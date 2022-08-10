<template>
    <div
        class="card"
        :class="[responsiveVisibility,
            contentAlignment,
            contentWidth]"
        :style="{backgroundColor,
            color}"
    >
        <FieldBackgroundImage
            :content="this.content"/>

        <FieldIcon
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

        <FieldButtons
            :content="content"
        />
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
                let visibility = this.content.optionResponsiveVisibility.join(' ')
                return visibility
            } catch (error) {}
        },

        contentWidth() {
            return this.content.optionContentWidth
        },

        contentTitle() {
            return this.content.fieldTitle
        },

        contentSubtitle() {
            return this.content.fieldSubtitle
        },

        contentText() {
            return this.content.fieldTextContent
        },

        contentAlignment() {
            return this.content.optionAlignment
        },

        color() {
            return this.content.optionTextColor
        },

        backgroundColor() {
            return this.content.optionBackgroundColor
        }
    },
}
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
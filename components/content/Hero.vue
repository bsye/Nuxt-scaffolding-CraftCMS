<template>
    <div
        class="hero"
        :class="[responsiveVisibility,
                 contentHeight]"
        :style="{backgroundColor,
                 color}"
    >
        <FieldBackgroundImage
            :content="this.content"/>
        <video
            v-if="hasVideo"
            class="desktop"
            loop
            autoplay
            muted
            playsinline
        >
            <source 
                v-if="backgroundVideo"
                :src="backgroundVideo.url"
                :mimetype="backgroundVideo.mimeType"
            />
        </video>

        <video
            v-if="hasVideo"
            class="mobile"
            loop
            autoplay
            muted
            playsinline
        >
            <source 
                v-if="backgroundVideoMobile"
                :src="backgroundVideoMobile.url"
                :mimetype="backgroundVideoMobile.mimeType"
            />

            <source 
                v-else-if="backgroundVideo"
                :src="backgroundVideo.url"
                :mimetype="backgroundVideo.mimeType"
            />
        </video>

        <ContentManager
            class="inner"
            :class="[contentAlignment, 
                    contentWidth]"
            :elements="content.children"
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
        backgroundColor() {
            return this.content.optionBackgroundColor;
        },

        color() {
            return this.content.optionTextColor;
        },

        responsiveVisibility() {
            try {
            } catch (error) {
                let visibility = this.content.optionResponsiveVisibility.join(' ')
                return visibility
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

        hasVideo() {
            return this.content.optionSwitch
        },

        backgroundImage() {
            try {
                if(!this.content.fieldBackgroundImage || (this.content.optionSwitch && !this.content.fieldBackgroundVideo)) return null
                return this.content.fieldBackgroundImage
            } catch (error) {
                return false
            }
        },

        backgroundVideo() {
            try {
                if(!this.content.fieldBackgroundVideo[0]) return null
                return this.content.fieldBackgroundVideo[0]
            } catch (error) {
                return false
            }
        },

        backgroundVideoMobile() {
            try {
                if(!this.content.fieldBackgroundVideoMobile[0]) return null
                return this.content.fieldBackgroundVideoMobile[0]
            } catch (error) {
                return false
            }
        },
    },
}
</script>

<style lang="scss" scoped>
    .hero {
        @apply
            bg-center
            relative
            bg-no-repeat
            bg-cover;

        .inner {
            @apply
              w-full
              flex
              relative
              z-10
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
        }

        video {
            @apply
              absolute
              inset-0
              h-full
              w-full
              object-cover;
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
              min-h-[420px]
              lg:min-h-[780px];
        }
    }
</style>
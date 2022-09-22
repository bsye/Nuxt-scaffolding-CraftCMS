<template>
  <div
    class="hero"
    :class="[responsiveVisibility,
                 contentHeight]"
    :style="{backgroundColor,
                 color}"
  >
    <BlockBackgroundImage :content="content" />
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
      :blocks="content.children"
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
      return this.content.backgroundColor;
    },

    color() {
      return this.content.textColor;
    },

    responsiveVisibility() {
      try {
        let visibility = this.content.responsiveVisibility.join(" ");
        return visibility;
      } catch (error) {}
    },

    contentHeight() {
      return this.content.minHeight;
    },

    contentWidth() {
      return this.content.contentWidth;
    },

    contentAlignment() {
      return this.content.alignment;
    },

    hasVideo() {
      return this.content.conditionalField;
    },

    backgroundImage() {
      try {
        if (
          !this.content.backgroundImage ||
          (this.content.conditionalField && !this.content.backgroundVideo)
        )
          return null;
        return this.content.backgroundImage;
      } catch (error) {
        return false;
      }
    },

    backgroundVideo() {
      try {
        if (!this.content.backgroundVideo[0]) return null;
        return this.content.backgroundVideo[0];
      } catch (error) {
        return false;
      }
    },

    backgroundVideoMobile() {
      try {
        if (!this.content.backgroundVideoMobile[0]) return null;
        return this.content.backgroundVideoMobile[0];
      } catch (error) {
        return false;
      }
    },
  },
};
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
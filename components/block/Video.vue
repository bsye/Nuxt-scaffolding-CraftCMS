<template>
  <div>
    <video
      v-if="video"
      :mimetype="mimeType"
      v-bind="videoSettings"
      playsinline
      :src="video"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoOptions: [],
    };
  },

  props: {
    content: {
      type: Object,
    },
  },

  computed: {
    mimeType() {
      try {
        return this.content.video[0].mimeType;
      } catch (error) {
        return false;
      }
    },

    videoSettings() {
      this.content.videoSettings.forEach((option) => {
        if (option) {
          this.videoOptions[option] = option;
        }
      });

      return this.videoOptions;
    },

    video() {
      try {
        return `${this.content.video[0].url}`;
      } catch (error) {}
    },
  },
};
</script>

<style>
</style>
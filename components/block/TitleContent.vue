<template>
  <div
    class="title"
    :class="content.fontSize"
    :style="{
      color: content.textColor
    }"
    v-html="content.titleContent"
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
};
</script>

<style>
</style>
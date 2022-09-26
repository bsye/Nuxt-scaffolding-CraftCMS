<template>
  <div
    class="text-content"
    :class="content.fontSize"
    :style="{
      color: content.textColor
    }"
    v-html="content.textContent"
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
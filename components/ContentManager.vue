<template>
  <div>
    <div
      v-for="single in blocks"
      :key="single.id"
    >
      <component
        v-if="single"
        :is="single.typeHandle"
        :content="single"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blocks: {
      type: Array,
    },
  },

  data() {
    return {
      result: [],
    };
  },
};
</script>

<style>
</style>
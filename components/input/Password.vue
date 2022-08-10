<template>
  <input
    type="password"
    autocomplete
    :placeholder="title"
    v-on:input="updateValue($event.target.value)"
    required
  />
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },

    value: {
      type: String,
    },
  },

  methods: {
    updateValue: function (value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss" scoped>
    input {
        @apply
          border-b
          py-2
          px-0
          border-opacity-50
          block
          outline-none
          w-full
          border-dark-500

          focus:border-opacity-100
          focus:outline-none

          placeholder:opacity-50
          placeholder:text-dark-500;
    }
</style>
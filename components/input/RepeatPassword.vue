<template>
  <div>
    <input
      type="password"
      :placeholder="title"
      v-on:input="updateValue($event.target.value)"
      required
    />
    <p v-if="toConfirm != value && value">
      {{ $t('passwordNotMatching') }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    title: {
      type: String,
    },

    value: {
      type: String,
    },

    toConfirm: {
      type: String,
    },
  },

  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style scoped lang="scss">
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
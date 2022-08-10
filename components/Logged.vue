<template>
  <client-only>
    <div
      v-if="isLogged"
      class="logged"
    >
      <slot />
    </div>
  </client-only>
</template>

<script>
export default {
  computed: {
    isLogged() {
      return this.$store.getters["auth/isLogged"];
    },
  },
};
</script>

<style>
</style>
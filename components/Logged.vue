<template>
  <client-only>
    <div>
      <div
        v-if="isLogged"
        class="logged"
      >
        <slot />
      </div>
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
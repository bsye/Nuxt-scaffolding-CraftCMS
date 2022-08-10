<template>
  <div class="section">

    <h5>{{ $t("accountDetails") }}</h5>

    <div class="details">
      <template v-for="(user, index) in userData">

        <div
          :key="index"
          class="flex"
        >
          <h6 class="w-[200px]">{{ index }}</h6>
          <span class="w-full">{{ user }}</span>
        </div>

      </template>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userData() {
      return this.$store.getters["auth/userData"];
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  @apply pb-12;

  .password {
    @apply grid
            gap-8;
  }

  h5 {
    @apply text-xl
            font-medium
            leading-[1.75]
            pb-4
            mb-0;
  }
}
</style>

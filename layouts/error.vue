<template>
  <div class="error">
    <div
      class="error404"
      v-if="error.statusCode === 404"
    >
      <h1>{{ $t('notFound') }}</h1>
      <h3>{{ $t('notFoundDescription') }}</h3>
    </div>
    <BlockButton>
      <NuxtLink to="/">{{ $t('toHomepage') }}</NuxtLink>
    </BlockButton>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error",
};
</script>

<style scoped lang="scss">
  .error {
    @apply
      flex
      flex-col
      justify-center
      items-center;

    h1 {
      @apply
        text-4xl
        mb-2;
    }

    h3 {
      @apply
        text-xl;
    }

    .error404 {
      @apply
        text-center
        mb-10
        max-w-xl;
    }
  }
</style>
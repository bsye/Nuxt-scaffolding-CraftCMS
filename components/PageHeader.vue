<template>
  <div class="container simple">
    <h1>
      <slot />
    </h1>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
h1 {
@apply
  my-4
  text-2xl
  font-medium;
}
</style>
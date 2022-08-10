<template>
  <Transition
    appear
    name="fade"
  >
    <slot />
  </Transition>
</template>

<script>
export default {};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  @apply transition-all;
}

.fade-enter-to,
.fade-leave {
  @apply opacity-100;
}

.fade-enter,
.fade-leave-to {
  @apply opacity-0;
}
</style>
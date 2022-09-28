<template>
  <TransitionFade>
    <div class="overlay">
      <MenuItems
        class="menu"
        menuName="menuOverlay"
        direction="vertical"
        :showChildren="true"
        itemClass="menu-overlay-item"
      />
    </div>
  </TransitionFade>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.overlay {
  @apply fixed
    inset-0
    flex
    p-5
    z-40
    mt-[71px]
    justify-start
    text-lg
    items-start
    pt-16
    pb-32
    overflow-auto
    w-full
    bg-dark-500
    text-gray-200
    h-screen;
}

.menu {
  @apply w-full;
}
</style>


<style lang="scss">
.menu-overlay-item {
  @apply border-b
      px-4
      w-full
      pb-2
      leading-loose
      mb-2
      border-opacity-50
      border-gray-200;

  a {
    @apply transition-opacity
        hover:opacity-50;
  }
}
</style>
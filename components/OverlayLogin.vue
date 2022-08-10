<template>
  <TransitionFade>
    <div class="modal login">
      <div
        @click="$root.$emit('overlay-login', false)"
        class="outside"
      ></div>
      <div class="inner">
        <Close
          @click="$root.$emit('overlay-login', false)"
          class="close"
        />
        <FormLogin :redirect="localePath($route.path)" />
      </div>
    </div>
  </TransitionFade>
</template>

<script>
import Close from "~/static/assets/close.svg?inline";

export default {
  components: {
    Close,
  },
};
</script>

<style scoped lang="scss">
  .modal {
    &.login {
      @apply
        fixed
        transition-all
        w-screen
        inset-0
        text-dark-500
        flex
        justify-center
        items-center
        h-screen;

      .outside {
        @apply
          fixed
          z-0
          h-screen
          w-screen
          bg-black
          bg-opacity-20;
      }

      .inner {
        @apply
          max-w-2xl
          z-10
          relative
          bg-white
          p-8
          py-14
          w-full

          md:p-16
          md:py-20;
      }

      .logo {
        @apply
          w-16
          mx-auto
          h-auto
          mb-4
          md:mb-10
          md:w-24;
      }

      .close {
        @apply
          absolute
          cursor-pointer
          right-6
          top-6;
      }
    }
  }
</style>
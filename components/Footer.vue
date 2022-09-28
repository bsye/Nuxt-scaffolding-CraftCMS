<template>
  <div class="footer">
    <div class="container inner">
      <div v-for="footer in footerContent" :key="footer.handle">
        <div
          v-for="single in footer.footerContent"
          :key="single.handle"
          :class="{ menu: single.navigationMenu, text: single.textContent }"
        >
          <div v-if="single.textContent">
            <div v-html="single.textContent"></div>
          </div>
          <MenuItems
            v-else-if="single.navigationMenu"
            :menuName="single.navigationMenu"
            direction="vertical"
            class="navigation"
          />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="separator">
        @ {{ new Date().getFullYear() }} Dueper Studio ✌🏻
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("globals", ["footerContent"]),
  },
};
</script>

<style lang="scss">
.footer {
  @apply text-gray-200
    overflow-hidden
    bg-dark-500;

  .separator {
    @apply py-8
      text-[11px]
      text-center

      lg:border-t
      lg:py-14
      lg:mt-4
      lg:border-gray-200
      lg:border-opacity-40;
  }

  .inner {
    @apply grid
      py-16
      text-gray-200
      bg-dark-500

      justify-between
      lg:grid-flow-col
      lg:auto-cols-auto
      lg:gap-8

      xl:gap-16;

    ul {
      @apply inline-block
        px-1;
    }

    .text {
      @apply xl:w-[350px]
        order-4
        border-t
        mb-8
        border-gray-200
        border-opacity-40

        pt-4
        -mx-3

        lg:order-[unset]
        lg:border-0
        lg:mt-0
        lg:mx-0
        lg:pt-0;

      > div {
        @apply px-4
          inline-block

          lg:px-0;
      }
    }

    .menu {
      @apply xl:min-w-[200px];

      .navigation {
        @apply mb-8;
      }

      .passive {
        @apply font-bold;
      }

      li {
        @apply text-base;

        a {
          @apply leading-snug;
        }
      }
    }
  }
}
</style>
<template>
  <div class="main-wrapper">
    <Header />
    <Nuxt class="main-content" />
    <Footer />
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },

  data() {
    return {
      scrollPosition: 0,
      ticking: false,
    };
  },

  mounted() {
    if (this.$route.hash) {
      const el = document.querySelector(this.$route.hash);
      el &&
        el.scrollIntoView({
          behavior: "smooth",
        });
    } else if (this.$config.livePreview) {
      const storageKey = `scrollPosition:${this.$route.path}`;

      if (sessionStorage.getItem(storageKey)) {
        window.scrollTo(0, parseInt(sessionStorage.getItem(storageKey)));
      }

      setTimeout(() => {
        window.addEventListener("scroll", () => {
          this.scrollPosition = window.scrollY;

          if (!this.ticking) {
            window.requestAnimationFrame(() => {
              sessionStorage.setItem(storageKey, this.scrollPosition);
              this.ticking = false;
            });

            this.ticking = true;
          }
        });
      }, 1000);
    }
  },
};
</script>

<style lang="scss">
  html,
  body {
    @apply
      antialiased
      font-sans;

    &.locked {
      @apply
        overflow-hidden;
    }
  }

  .main-wrapper {
    @apply
      min-h-screen
      flex
      flex-col;

    .main-content {
      @apply
        grow;
    }
  }

  .mobile {
    @apply
      block
      lg:hidden;
  }

  .desktop {
    @apply
      hidden
      lg:block
  }

  .container {
    @apply
      relative;
  }

  strong {
    @apply
      font-bold;
  }

  .size-text-3xl {
    @apply
      text-[48px]
      leading-none

      lg:text-[90px];
  }

  .size-text-2xl {
    @apply
      text-[32px]
      leading-none

      lg:text-[48px];
  }

  .size-text-xl {
    @apply
      leading-[36px]
      text-[32px];
  }

  .size-text-lg {
    @apply
      leading-[24px]
      text-[24px]

      lg:leading-[28px]
      lg:text-[28px];
  }

  .size-text-mlg {
    @apply
      leading-[24px]
      text-[18px];
  }

  .size-text-base {
    @apply
      leading-[24px]
      text-[16px];
  }

  .size-text-sm {
    @apply
      leading-[18px]
      text-[14px];
  }

  .max-width-xs {
    @apply
      mx-auto
      px-5
      max-w-[380px];
  }

  .max-width-sm {
    @apply
      mx-auto
      px-5
      max-w-[500px];
  }

  .max-width-md {
    @apply
      mx-auto
      px-5
      max-w-[640px]
  }

  .max-width-lg {
    @apply
      mx-auto
      px-5
      max-w-[800px]
  }

  .max-width-xl {
    @apply
      mx-auto
      px-5
      max-w-[1024px]
  }

  .max-width-2xl {
    @apply
      mx-auto
      px-5
      max-w-[1280px]
  }

  .max-width-3xl {
    @apply
      mx-auto
      px-5
      max-w-[1440px]
  }

  .max-width-full {
    @apply
      w-auto
      h-full;

    max-width: 1000%;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
  }

  .hide-mobile {
    @apply
      hidden
      md:block;
  }

  .hide-tablet {
    @apply
      md:hidden
      lg:block;
  }

  .hide-desktop {
    @apply
      lg:hidden
      xl:block;
  }

  .hide-wide {
    @apply
      xl:hidden;
  }

  .site-grid {
    &.one {
      @apply
        grid
        gap-[20px]
        lg:gap-[40px]
        grid-cols-1
        lg:grid-cols-2;
    }

    &.mixed {
      @apply
        grid
        gap-[20px]
        lg:gap-[40px]
        gap-y-12
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4;
    }

    &.snug {
      @apply
        grid
        gap-[20px]
        xl:gap-[40px]
        gap-y-12
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4;
    }

    &.two {
      @apply
        grid
        gap-[20px]
        lg:gap-[40px]
        gap-y-12
        grid-cols-2
        lg:grid-cols-4;
    }

    &.three {
      @apply
        grid
        gap-[20px]
        lg:gap-[40px]
        grid-cols-2
        lg:grid-cols-6;
    }
  }

  .mobile {
    @apply
      block
      lg:hidden;
  }

  .desktop {
    @apply
      hidden
      lg:block;
  }

  .archive,
  .category,
  .single {
    @apply
      pb-16
      lg:pb-20;

    h1 {
      @apply
        mb-6
        lg:mb-8;
    }

    .abstract {
      @apply
        mb-9
        lg:mb-12
        text-base
        inline-block
        max-w-5xl
        lg:text-xl
        leading-snug;
    }
  }

  .teaser {
    @apply
      transition-all
      hover:opacity-50;

    .content {
      @apply
        mb-0;
    }

    .aspect {
      @apply
        bg-gray-200;
    }
  }

  .results {
    h2 {
      @apply
        text-2xl
        mb-5
        font-medium;
    }
  }

  .disabled {
    @apply
      opacity-50
      pointer-events-none;
  }
</style>
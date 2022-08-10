<template>
  <div
    v-click-outside="() => dropdown = false"
    class="switcher"
  >
    <button @click.stop="dropdown = !dropdown">
      {{ currentLocale.name }}
    </button>
    <div
      v-if="dropdown"
      class="dropdown"
    >
      <a
        v-for="locale in availableLocales"
        :key="locale.code"
        :href="switchLocalePath(locale.code)"
      >{{ locale.name }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdown: false,
    };
  },

  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },

    currentLocale() {
      return this.$i18n.locales.find((i) => i.code == this.$i18n.locale);
    },
  },
};
</script>

<style lang="scss" scoped>
  .switcher {
    @apply
      relative;

    .dropdown {
      @apply
        absolute
        right-0
        bg-gray-100
        text-black
        px-5
        rounded-sm
        py-2
        grid
        grid-flow-row-dense
        gap-2
        shadow-sm
        top-[100%];
    }
  }
</style>
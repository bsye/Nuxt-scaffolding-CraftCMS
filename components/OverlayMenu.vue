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
import menuQuery from "~/graphql/queries/globals/menu";

export default {
  data() {
    return {
      menu: null,
    };
  },

  computed: {
    firstLevel() {
      try {
        return this.menu.filter((element) => element.level === 1);
      } catch (error) {}
    },
  },

  async fetch() {
    try {
      const entries = await this.$graphql.default.request(
        menuQuery({
          menuName: "menuOverlay",
        }),
        {
          siteId: this.$i18n.localeProperties.siteId,
          navHandle: this.menuName,
        }
      );

      console.log("entries", entries);

      if (entries) {
        this.menu = entries.navigationNodes;
      }
    } catch {
      return false;
    }
  },
};
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
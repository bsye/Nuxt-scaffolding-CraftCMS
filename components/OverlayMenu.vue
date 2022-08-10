<template>
  <TransitionFade>
    <div class="overlay">
      <ul v-if="firstLevel">
        <li
          v-for="link of firstLevel"
          :key="link.id"
          :title="link.title"
          v-bind:class="{ 'secondary': link.secondaryMenuItem, 
                                'has-children': link.children.length > 0 }"
        >
          <LinkChecker
            :url="link.url"
            alt="Overlay menu"
            v-if="link.children.length == 0 && link"
            :linkType="link.type"
          >
            {{ link.title }}
          </LinkChecker>

          <MenuDropdown
            :subMenu="link.children"
            v-else-if="link"
          >
            {{ link.title }}
          </MenuDropdown>
        </li>
      </ul>
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

  mounted: function () {
    this.$nextTick(function () {
      this.onResize();
    });
    window.addEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      if (window.innerWidth > 1023) this.$root.$emit("overlay-menu", false);
    },
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
        menuQuery("menuOverlay")
      );
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
  @apply
    fixed
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

  ul {
    @apply
      w-full;
  }

  li {
    @apply
      border-b
      px-4
      w-full
      pb-2
      leading-loose
      mb-2
      border-opacity-50
      border-gray-200;

    a {
      @apply
        transition-opacity
        hover:opacity-50;
    }

    &.secondary {
      @apply
        border-none
        mb-0
        pb-0
        text-base;
    }
  }
}

</style>
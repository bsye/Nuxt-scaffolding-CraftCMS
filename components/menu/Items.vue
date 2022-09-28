<template>
  <ul
    itemscope
    itemtype="http://www.schema.org/SiteNavigationElement"
    :class="`menu-direction-${direction}`"
  >
    <li
      itemprop="name"
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :class="[
        {
          'has-children': showChildren && item.children.length > 0,
        },
        itemClass || null,
      ]"
    >
      <MenuDropdown
        :subMenu="item.children"
        v-if="item.children.length > 0 && showChildren"
      >
        {{ item.title }}
      </MenuDropdown>

      <LinkChecker
        :url="item.url"
        itemprop="url"
        v-else
        :class="{ passive: item.type == passiveType, parent: item.level == 1 }"
        :linkType="item.type"
      >
        {{ item.title }}
      </LinkChecker>
    </li>
  </ul>
</template>

<script>
import menuQuery from "/graphql/queries/globals/menu";

export default {
  data() {
    return {
      items: [],
    };
  },

  props: {
    menuName: {
      type: String,
      required: true,
    },
    itemClass: {
      type: String,
      required: false,
      default: "",
    },
    showChildren: {
      type: Boolean,
      default: false,
    },
    direction: {
      type: String,
      validator(value) {
        return ["horizontal", "vertical"].includes(value);
      },
      default: "horizontal",
    },
  },

  watch: {
    "$i18n.locale"() {
      this.$fetch();
    },
  },

  computed: {
    passiveType() {
      return "verbb\\navigation\\nodetypes\\PassiveType";
    },
  },

  async fetch() {
    try {
      const entries = await this.$graphql.default.request(
        menuQuery({
          menuName: this.menuName,
        }),
        {
          siteId: this.$i18n.localeProperties.siteId,
          navHandle: this.menuName,
        }
      );
      this.items = entries.navigationNodes.filter((item) => item.id);
    } catch (err) {
      console.log("error", err);
    }
  },
};
</script>

<style lang="scss" scoped>
ul {
  &.menu-direction-vertical {
    @apply w-full
      flex
      flex-col;

    li {
      @apply mb-2;
    }
  }

  &.menu-direction-horizontal {
    @apply flex
      items-center
      justify-between;

    li {
      @apply mr-8;

      &:last-child {
        @apply mr-0;
      }
    }
  }
}
</style>
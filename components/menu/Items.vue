<template>
  <ul
    itemscope
    itemtype="http://www.schema.org/SiteNavigationElement"
  >
    <li
      itemprop="name"
      v-for="item in menu"
      :key="item.id"
    >
      <LinkChecker
        :url="item.url"
        itemprop="url"
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
      menu: [],
    };
  },

  props: {
    menuName: {
      type: String,
      required: true,
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
      this.menu = entries.navigationNodes.filter((item) => item.id);
    } catch (err) {
      console.log("error", err);
      this.$nuxt.error({ statusCode: 404, message: "404" });
    }
  },
};
</script>

<style lang="scss" scoped>
ul {
  @apply flex
        gap-8
        items-center
        justify-between;

  li {
    a {
      @apply block
            hover:opacity-50
            transition-opacity
            leading-none;
    }
  }
}
</style>
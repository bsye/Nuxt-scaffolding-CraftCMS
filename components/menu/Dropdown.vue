<template>
  <div>
    <p
      class="opener"
      @click="open = !open"
    >
      <slot />
      <Arrow :class="open == true ? 'open' : '' " />
    </p>
    <TransitionHeight>
      <div
        v-show="open"
        class="submenu"
      >
        <ul>
          <LinkChecker
            :alt="child.title"
            v-for="child in subMenu"
            :key="child.id"
            :url="child.url"
            :linkType="child.type"
          >
            <li>{{ child.title }}</li>
          </LinkChecker>
        </ul>
      </div>
    </TransitionHeight>
  </div>
</template>

<script>
import Arrow from "~/static/assets/arrow.svg?inline";

export default {
  data() {
    return {
      open: false,
    };
  },

  components: {
    Arrow,
  },

  props: {
    subMenu: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
p {
    @apply
      cursor-pointer
      flex
      items-center
      justify-between;

    svg {
        @apply
          transition-all
          duration-300;

        &.open {
            @apply
              rotate-180;
        }
    }
}

.opener {
  @apply
    leading-loose
    transition-opacity
    hover:opacity-50;
}

ul {
  @apply
    flex
    flex-col;

  li {
      @apply
          text-lg
          transition-opacity
          hover:opacity-50
          leading-loose;
  }
}

</style>
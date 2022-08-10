<template>
  <NuxtLink
    v-if="check.internal == true"
    :target="target"
    :alt="alt"
    :to="localePath(check.path)"
  >
    <slot />
  </NuxtLink>
  <a
    v-else-if="check.internal == false"
    :href="check.path"
    :target="target"
  >
    <slot />
  </a>
  <p v-else>
    <slot />
  </p>
</template>

<script>
export default {
  props: {
    url: {
      required: true,
    },

    target: {
      required: false,
    },

    linkType: {
      type: String,
      required: false,
    },

    blank: {
      type: Boolean,
      default: false,
    },

    alt: {
      type: String,
      required: false,
    },
  },

  computed: {
    check() {
      try {
        let path = new URL(this.url);
        let baseUrl = new URL(process.env.BASE_URL);

        if (path.origin == baseUrl.origin) {
          return {
            internal: true,
            path: path.pathname,
          };
        } else {
          return {
            internal: false,
            path: this.url,
          };
        }
      } catch (error) {
        try {
          return {
            internal: false,
            path: this.url,
          };
        } catch (error) {
          return {
            internal: null,
          };
        }
      }
    },
  },
};
</script>
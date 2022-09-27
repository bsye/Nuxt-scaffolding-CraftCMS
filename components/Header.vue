<template>
  <div class="header">
    <div class="container inner">
      <LazyOverlayMenu v-if="overlayOpen" class="mobile" />
      <LazyOverlaySearch :isFocused="searchOpen" v-if="searchOpen" />
      <LazyOverlayLogin v-if="loginOpen" />

      <nuxt-link :to="localePath('/')">
        <SiteLogo class="site-logo" alt="site-logo" />
      </nuxt-link>

      <div class="navigation">
        <MenuItems menuName="menuMainDesktop" class="menu" />
      </div>

      <div class="utils">
        <client-only v-if="loginEnabled">
          <button
            v-if="!isLogged"
            class="link login desktop"
            @click="openLogin()"
          >
            {{ $t("login") }}
          </button>
          <nuxt-link
            v-else
            alt="login"
            class="login desktop"
            :to="localePath('/account')"
          >
            {{ $t("account") }}
          </nuxt-link>
        </client-only>

        <LanguageSwitcher />

        <button class="link">
          <Search
            class="search"
            v-if="!searchOpen"
            @click="searchOpen = true"
          />

          <Close
            class="search"
            v-if="searchOpen && !overlayOpen"
            @click="searchOpen = false"
          />
        </button>
        <div class="hamburger">
          <Hamburger
            @click="overlayOpen = true"
            v-if="!overlayOpen && !searchOpen"
          />
          <Close v-if="overlayOpen" @click="closeOverlays()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SiteLogo from "~/static/assets/logo.svg?inline";
import Hamburger from "~/static/assets/hamburger.svg?inline";
import Close from "~/static/assets/close.svg?inline";
import Search from "~/static/assets/search.svg?inline";

export default {
  components: {
    SiteLogo,
    Search,
    Close,
    Hamburger,
  },

  data() {
    return {
      menu: null,
      overlayOpen: false,
      loginOpen: false,
      searchOpen: false,
    };
  },

  watch: {
    $route() {
      this.overlayOpen = false;
      this.searchOpen = false;
      this.loginOpen = false;
    },
  },

  head(e) {
    if (
      this.overlayOpen == true ||
      this.searchOpen == true ||
      this.loginOpen == true
    ) {
      return {
        htmlAttrs: {
          class: `locked`,
        },
      };
    }
  },

  computed: {
    isLogged() {
      return this.$store.getters["auth/isLogged"];
    },

    loginEnabled() {
      return process.env.BC_API;
    },
  },

  mounted() {
    this.$root.$on("overlay-login", (state) => {
      this.loginOpen = state;
    });

    this.$root.$on("overlay-search", (state) => {
      this.searchOpen = state;
    });

    this.$root.$on("overlay-menu", (state) => {
      this.overlayOpen = state;
    });
  },

  methods: {
    closeOverlays() {
      this.overlayOpen = false;
      this.searchOpen = false;
    },

    openLogin() {
      this.closeOverlays();
      this.loginOpen = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  @apply relative
    opacity-100
    top-0
    left-0
    right-0
    w-full
    transform-gpu
    py-4
    transition-all
    z-50;

  .inner {
    @apply flex
      justify-between
      items-center;

    .hamburger {
      @apply flex
        items-center

        lg:hidden;

      svg {
        @apply cursor-pointer
          w-6;
      }
    }

    .site-logo {
      @apply mx-auto
        h-auto
        w-24;
    }

    .navigation {
      @apply grid
        grid-flow-col-dense
        gap-8
        justify-center;

      .menu {
        @apply hidden

          lg:flex;
      }
    }

    .utils {
      @apply grid
        grid-flow-col
        justify-center
        gap-5;

      .search {
        @apply cursor-pointer
          w-5;
      }
    }
  }
}
</style>

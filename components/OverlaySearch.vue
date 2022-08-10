<template>
  <TransitionFade>
    <div class="overlay">
      <div class="modal">
        <div class="pt-8 pb-10 wrapper">
          <div class="container">
            <div class="search">
              <Search />
              <input
                type="text"
                ref="input"
                v-model="search.text"
                @input="prepare()"
                :placeholder="$t('Search')"
              />
            </div>

            <div
              :class="{
                  'active': isSearching
                }"
              class="inner"
            >

              <p
                v-if="loading && !minLetters"
                class="warning"
              >
                {{ $t('loading...') }}
              </p>
              <p
                v-if="noResults && !loading"
                class="warning"
              >
                {{ $t('No Results') }}
              </p>
              <p
                v-if="minLetters"
                class="warning"
              >
                {{ $t('Insert at least 3 letters') }}
              </p>
              <div v-if="isSearching">
                <div
                  v-for="section in search.section"
                  class="my-12"
                  ref="research"
                  :key="section"
                >
                  <component
                    v-if="verifyResults(result[section])"
                    :content="result[section]"
                    :is="`search-${section}`"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="outside"
          @click="$root.$emit('overlay-search', false)"
        >
        </div>
      </div>
    </div>
  </TransitionFade>
</template>

<script>
import Search from "~/static/assets/search.svg?inline";
import searchQuery from "~/graphql/queries/root/searchQuery.js";

export default {
  components: {
    Search,
  },

  props: {
    isFocused: {
      type: Boolean,
    },
  },

  data() {
    return {
      loading: false,
      isSearching: false,
      noResults: false,
      minLetters: false,
      search: {
        text: null,
        limit: 15,
        section: ["news", "page"],
        siteId: this.$i18n.localeProperties.siteId,
      },
      result: {},
    };
  },

  watch: {
    isFocused() {
      if (this.isFocused == true) return this.setFocus();
    },
  },

  computed: {
    prepare() {
      return this.$debounce(() => {
        return this.searcher();
      }, 350);
    },
  },

  methods: {
    async searcher() {
      if (this.search.text == "" || this.search.text.length < 3) {
        this.isSearching = false;
        this.noResults = false;
        this.minLetters = true;

        return;
      }

      this.loading = true;
      this.minLetters = false;

      try {
        const entries = await this.$graphql.default.request(
          searchQuery(this.search)
        );
        if (entries) {
          this.loading = false;
          if (Object.values(entries).some((item) => item.length > 0)) {
            this.isSearching = true;
            this.noResults = false;
          } else {
            this.isSearching = false;
            this.noResults = true;
          }
          this.result = entries;
        }
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    setFocus() {
      this.$refs.input.focus();
    },

    verifyResults(result) {
      if (!result) return false;
      return result.some((item) => item.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  @apply
    h-screen
    w-screen
    fixed
    left-0
    pointer-events-auto
    mt-[30px]
    lg:mt-[71px]
    z-40
    right-0
    top-0;

  .modal {
    @apply
      flex
      flex-col
      justify-start
      text-lg
      items-start
      w-full
      transition-all
      bg-transparent
      text-dark-500
      h-auto;

    .outside {
      @apply
        w-screen
        h-screen
        transition-all
        inset-0
        bg-black
        bg-opacity-20;
    }

    .wrapper {
      @apply
        w-full
        bg-white
        transition-all;
    }

    .search {
      @apply
        flex
        transition-all
        border-b
        border-dark-500
        w-full
        pb-1
        opacity-100
        items-center;
  
      input {
        @apply
          appearance-none
          outline-none
          ml-3.5
          text-lg
          w-full
          pt-1
          bg-transparent
          text-dark-500;
  
        &:focus {
          @apply
            outline-none;
        }
  
        &::placeholder {
          @apply
            text-dark-500;
        }
      }
    }
  
    .warning {
      @apply
        font-normal
        mt-12
        text-2xl;
    }
  
    .inner {
      @apply
        h-screen
        opacity-100
        bg-transparent
        transition-all
        pb-32
        lg:h-auto
        lg:pb-3
        -mx-6
        px-6
        overflow-auto;
  
      &.active {
        @apply
          lg:pb-12
          lg:h-[60vh];
      }
    }
  }
}

</style>
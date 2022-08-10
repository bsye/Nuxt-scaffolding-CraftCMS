<template>
  <Logged class="container account">
    <PageHeader>
      <h1>
        {{ $t('account') }}
      </h1>
      <h3>
        {{ $t('hello') + ` ${userData.name}.` }}
      </h3>
    </PageHeader>
    <div class="manage">
      <div class="tabs">
        <div
          class="details"
          @click="openTab('details')"
        >
          <button>{{ $t('accountDetails') }}</button>
        </div>

        <div
          class="change"
          @click="openTab('change')"
        >
          <button>{{ $t('changePassword') }}</button>
        </div>

        <div
          class="change"
          @click="logout()"
        >
          <button class="font-medium">{{ $t('logout') }}</button>
        </div>
      </div>

      <div class="container settings">
        <UserDetails v-if="tabs.details" />

        <ChangePassword v-if="tabs.change" />
      </div>
    </div>
  </Logged>
</template>

<script>
export default {
  data() {
    return {
      tabs: {
        details: true,
        change: false,
      },

      oldPassword: null,
      newPassword: null,
    };
  },

  computed: {
    userData() {
      return this.$store.getters["auth/userData"];
    },
  },

  methods: {
    async logout() {
      if (!process.client) return;
      await this.$router.replace(this.localePath("/"));
      this.$store.commit("auth/LOGOUT");
    },

    openTab(tab) {
      try {
        Object.keys(this.tabs).forEach((key) => {
          this.tabs[key] = false;
        });

        this.tabs[tab] = true;
      } catch (error) {
        this.tabs.details = true;
      }
    },
  },
};
</script>

<style scoped lang="scss">
    h3 {
        @apply
          text-lg
          mt-3
          font-normal;
    }

    .account {
        @apply
          grid
          overflow-hidden;

        &::v-deep {
            .container {
                @apply
                  px-0;
            }
        }

        .manage {
            @apply
                grid
                mt-12
                md:grid-cols-3
                lg:grid-cols-4;

            .tabs {
                button {
                    @apply
                      text-xl
                      border-b
                      text-left
                      w-full
                      pb-4
                      mb-4;
                }
            }

            .settings {
                @apply
                mt-6
                mb-12
                md:mt-0
                md:pl-20
                md:col-span-2
                lg:pl-24
                lg:col-span-3;
            }
        }
    }
</style>
<template>
  <div class="section">
    <h5>{{ $t('changePassword') }}</h5>
    <div class="change">
      <div class="password">
        <InputPassword
          v-model="oldPassword"
          :title="$t('oldPassword')"
        />

        <InputPassword
          v-model="newPassword"
          :title="$t('newPassword')"
        />

      </div>

      <p v-if="state == 401">
        {{ $t('oldPasswordNotCorrect') }}
      </p>

      <div @click="changePassword()">
        <BlockButton class="my-4">
          <span>{{ $t('changePassword') }}</span>
        </BlockButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldPassword: null,
      newPassword: null,
      state: null,
    };
  },

  methods: {
    async changePassword() {
      this.state = await this.$store.dispatch("auth/changePassword", {
        password: this.newPassword,
        oldPassword: this.oldPassword,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
    .section {
        @apply
            pb-12;

        .password {
            @apply
                grid
                gap-8;
        }

        .change {
            &::v-deep {
                button {
                    @apply
                        mt-12
                        mx-auto;
                }
            }
        }

        h5 {
            @apply
                text-xl
                font-medium
                leading-[1.75]
                pb-4
                mb-0;
        }
    }
</style>
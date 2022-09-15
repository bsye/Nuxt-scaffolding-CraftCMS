<template>
  <client-only>
    <form
      @submit.prevent="register"
      class="register"
      :class="{ 'disabled' : processing }"
    >
      <h3>
        {{ $t('registerNow') }}
      </h3>
      <div class="fields">
        <div
          class="login-error"
          v-if="sendRegister"
        >
          {{ sendRegister.message }}
        </div>

        <InputText
          type="text"
          v-model="email"
          autocomplete="email"
          :title="$t('loginEmail')"
        />

        <InputPassword
          v-model="password"
          minLength="8"
          autocomplete="new-password"
          :title="$t('loginPassword')"
        />

        <InputRepeatPassword
          v-model="repeatPassword"
          :toConfirm="password"
          autocomplete="repeat-password"
          :title="$t('registerRepeatPassword')"
        />
      </div>

      <InputCheckbox
        :required="true"
        name="privacy"
      >
        {{ $t('privacyBox') }}
      </InputCheckbox>

      <BlockButton>
        <input
          type="submit"
          :value="$t('register')"
        >
      </BlockButton>
    </form>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      processing: null,
      repeatPassword: null,
      sendRegister: null,
    };
  },

  methods: {
    async register() {
      this.processing = true;

      if (this.repeatPassword != this.password) return;

      if (this.email && this.password && this.repeatPassword) {
        this.sendRegister = await this.$store.dispatch("auth/login", {
          username: this.email,
          password: this.password,
        });

        const successful = await this.$store.getters["auth/isLogged"];
        this.processing = false;
        if (successful == true) {
          if (this.$route.query.redirect)
            this.$router.push(this.$route.query.redirect);
          else this.$router.push("/account");
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
    button {
      @apply
        mt-5
        cursor-pointer
        mx-auto;

      input {
        @apply
          cursor-pointer;
      }
    }

    h3 {
        @apply
          mb-8
          text-center
          text-3xl;
    }

    .fields {
      @apply
        grid
        gap-4
        lg:gap-8;
    }

    .forgot {
      @apply
        block
        pt-4;
    }
</style>
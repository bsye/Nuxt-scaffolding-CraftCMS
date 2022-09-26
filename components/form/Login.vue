<template>
  <client-only>
    <form
      @submit.prevent="login"
      class="enter"
      :class="{ 'disabled' : processing }"
    >
      <h3>
        {{ $t('alreadyAccount') }}
      </h3>
      <div class="fields">
        <InputText
          type="text"
          v-model="username"
          :title="$t('loginUsername')"
        />

        <InputPassword
          v-model="password"
          :title="$t('loginPassword')"
        />

      </div>
      <div class="more">
        <NuxtLink
          v-if="!hideRegister"
          class="register"
          :to="localePath({ path: '/login', query: {redirect}})"
        >
          {{ $t("registerNow") }}
        </NuxtLink>

        <NuxtLink
          class="forgot"
          :to="localePath('reset-password')"
        >
          {{ $t("loginForgot") }}
        </NuxtLink>
      </div>

      <p v-if="state == 401">
        {{ $t('userNotCorrect') }}
      </p>

      <BlockButton>
        <input
          :value="$t('login')"
          type="submit"
        />
      </BlockButton>
    </form>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null,
      processing: null,
      state: null,
    };
  },

  props: {
    hideRegister: {
      type: Boolean,
    },

    redirect: {
      type: String,
    },
  },

  methods: {
    async login() {
      if (this.username && this.password) {
        this.processing = true;

        this.state = await this.$store.dispatch("auth/login", {
          username: this.username,
          password: this.password,
        });

        const successful = await this.$store.getters["auth/isLogged"];
        this.processing = false;
        if (successful == true) {
          this.$root.$emit("overlay-login", false);
          if (this.redirect) this.$router.push(this.redirect);
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

    .more {
      @apply
        flex
        justify-between
        flex-wrap
        items-center
        pt-4;

      .register {
        @apply
          pr-4;
      }
    }
</style>
<template>
  <div class="login">
    <PageHeader>
    </PageHeader>

    <div class="container form">
      <FormLogin :hideRegister="true" />
      <FormRegister />
    </div>
  </div>
</template>

<script>
import SiteLogo from "~/static/assets/logo.svg?inline";
export default {
  components: {
    SiteLogo,
  },

  created() {
    if (this.$store.getters["auth/isLogged"]) {
      this.$router.replace(this.localePath("/account"));
    }
  },
};
</script>


<style lang="scss" scoped>
.form {
  @apply
    my-12
    lg:my-48
    w-full
    gap-12
    grid
    max-w-5xl
    grid-cols-1
    md:grid-cols-2
    align-top
    justify-start;

  .logo {
    @apply
      mx-auto
      h-10
      w-auto;
  }
}
</style>
<template>
  <div class="checkbox">
    <input
      type="checkbox"
      :id="name"
    />
    <label :for="name">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  props: {
    required: {
      type: Boolean,
      required: false,
    },

    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
  .checkbox {
    @apply
      pt-4
      flex
      items-start
      text-xs
      justify-start;

    input {
      @apply
        mr-3
        appearance-none
        border
        transition-all
        cursor-pointer
        rounded-sm
        flex-none
        border-dark-500
        relative
        w-4
        h-4

        checked:after:h-3
        checked:after:relative
        checked:after:rounded-sm
        checked:after:top-px
        checked:after:left-px
        checked:after:block
        checked:after:bg-dark-500
        checked:after:w-3;
    }

    label {
      @apply
        block
        cursor-pointer
        relative
        bottom-[2px]
        leading-[1.15];
    }
  }
</style>
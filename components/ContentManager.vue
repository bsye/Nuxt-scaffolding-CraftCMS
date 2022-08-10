<template>
  <div>
      <div
        v-for="single in elements"
        :key="single.id">
        <component
            v-if="single"
            :is="single.typeHandle"
            :content="single"
        />
      </div>
  </div>
</template>

<script>

export default {
    props: {
        elements: {
            type: Array,
        },
    },

    data() {
        return {
            result: [],
        }
    },
}
</script>

<style>

</style>
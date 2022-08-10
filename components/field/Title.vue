<template>
    <div 
        class="title"
        :class="content.optionFontSize"
        v-html="content.fieldTitle">
    </div>
</template>

<script>

export default {
    props: {
        content: {
            type: Object,
        },
    },
}
</script>

<style>

</style>
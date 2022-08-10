<template>
    <div 
        class="text-content"
        :class="content.optionFontSize"
        v-html="content.fieldTextContent">
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
<template>
    <div
        class="results">
        <h2
            v-if="content"
            >{{ $t('Pages') }} {{ '(' + content.length}} {{ $t('results') + ')' }}</h2>
        <div class="site-grid two">
            <div
                v-for="teaser in content"
                :key="teaser.id">
        
            <TeaserPage
                :content="{
                    title: teaser.title,
                    url: teaser.url,
                    image: teaser,
            }"/>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: {
            type: Array,
        }
    },
}
</script>

<style lang="scss" scoped>
</style>
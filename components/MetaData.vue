<template>
<div>
  <slot/>
</div>
</template>

<script>
export default {
    props: {
        content: {
            type: Object,
            required: true,
        },

        fallback: {
            type: Object,
            required: false,
        }
    },

    computed: {
        title() {
            try {
                if(this.content.title) return this.content.title
                if(this.fallback.title) return this.fallback.title
                return false
            } catch (error) {
                return false
            }
        },

        description() {
            try {
                if(this.content.description) return this.content.description
                if(this.fallback.description) {
                    const text = this.fallback.description.replace(/(<([^>]+)>)/gi, "");
                    return text.substring(0, 200)
                }
                return false
            } catch (error) {
                return false
            }
        },

        socialTitle() {
            try {
                if(this.content.social.facebook.title ) return this.content.social.facebook.title
                return this.fallback.title
            } catch (error) {
                return false
            }
        },
 
        socialDescription() {
            try {
                if(this.content.social.facebook.description ) return this.content.social.facebook.description
                return this.description
            } catch (error) {
                return false
            }
        },

        socialImage() {
            try {
                if(this.content.social.facebook.image ) return this.content.social.facebook.image
                return this.fallback.image.fieldImage[0].url
            } catch (error) {
                return ''
            }
        },
    },

    watch: {
        title() {
            this.head()
        }
    },

    head () {
        let content = {}
        if(this.title) content.title = this.title
        content.meta = []
        content.link = []

        if(this.description) content.meta.push({ hid: 'description', name: 'description', content: this.description})
        content.meta.push(
            { hid: 'og-type', property: 'og:title', content: 'website'},
            { hid: 'og-title',property: 'og:title', content: this.socialTitle},
            { hid: 'og-desc', property: 'og:description', content: this.socialDescription},
            { hid: 'og-image', property: 'og:image', content: this.socialImage},
            { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' }
        )

        if(this.$get(this.content, 'advanced.canonical')) content.link.push({ rel: 'canonical', href: this.content.advanced.canonical })
        if(this.$get(this.content, 'advanced.robots')) content.meta.push({ hid: 'robots', name: 'robots', content: this.content.advanced.robots })

        return content
  },
}
</script>

<style>

</style>
//See https://dev.to/andynoir/sitemap-for-dynamic-routes-in-nuxtjs-4b96
const generator = function() {
  this.nuxt.hook('generate:done', async (context) => {
    const routesToExclude = this.nuxt.options.sitemap.exclude ? this.nuxt.options.sitemap.exclude : []
    const allRoutes = await Array.from(context.generatedRoutes)
    const routes = await allRoutes.filter((route) => !routesToExclude.includes(route))
    console.log('routes', routes)
    this.nuxt.options.sitemap.routes = await [...routes]
  })
}

export default generator
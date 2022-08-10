export const state = () => ({
  socials: {},
  footer: {},
  seo: {}
})

export const mutations = {
  SET_GLOBAL(state, globals) {
    for (global of globals) {
      if (global.handle === 'socials') {
        state.socials = global
      }

      if (global.handle === 'footer1') {
        state.footer.first = global
      }

      if (global.handle === 'footer2') {
        state.footer.second = global
      }

      if (global.handle === 'footer3') {
        state.footer.third = global
      }

      if (global.handle === 'footer4') {
        state.footer.fourth = global
      }
    }
  },

  SET_SEO(state, info) {
    state.seo = info 
  }
}

export const getters = {
  footerContent(state) {
    return state.footer
  },

  seoInfo(state) {
    return state.seo
  },
}
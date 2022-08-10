import get from 'lodash.get';
import debounce from "lodash.debounce"


const createLocalizedObject = ({ localized, availableLocales }) => {
  let output = {};

  const findSiteSlugFromId = (id) =>
    availableLocales.find((locale) => locale.siteId == id).site;

  localized.forEach(({ slug, siteId }) => {
    output[findSiteSlugFromId(siteId)] = {
      slug,
    };
  });

  return output;
};



export default({ app }, inject) => {
  inject('get', get);
  inject('debounce', debounce);
  inject("getRoutesParams", (localized) =>
    createLocalizedObject({
      localized,
      availableLocales: app.i18n.locales
    })
  );
}
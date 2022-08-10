import {gql} from 'nuxt-graphql-request';

export default function (search) {
    const fragments = search.section.map(item => {
      let mapper = gql `
            ${item}: entries (
                siteId: "${search.siteId}",
                search: "${search.text}",
                limit: ${search.limit},
                type: "default",
                section: "${item}"
            ) {
              id
              title
              sectionHandle
              ... on ${item}_default_Entry {
                url
                dateCreated
                fieldImage {
                  title
                  alt
                  url
                  width
                  height
                }
            `

        if (item == 'Product') {
        mapper = mapper + `
                taxonomyProduct {
                    title
                    url
                }
            `
        }

        mapper = mapper + `
                }
            }
        `

      return mapper
    })

  const query = gql `
        query MyQuery {
            ${fragments}
        }
    `

  return query
}
import {gql} from 'nuxt-graphql-request';

export default function (search) {
    const query = gql `
        query MyQuery {
            entries (section: "${search.section}" limit: ${search.limit}) {
                ... on ${search.section}_default_Entry {
                    id
                    title
                    url
                    dateCreated
                    fieldImage {
                        title
                        alt
                        url
                        width
                        height
                    }
                }
            }
        }
    `

    return query
}
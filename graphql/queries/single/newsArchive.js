import {gql} from 'nuxt-graphql-request';
import seoInfo from '../seo/seoInfo';

export default function (search) {
    const query = gql `
        query MyQuery {
            entry(siteId: "${search.siteId}", type: "${search.type}") {
                id
                ...on ${search.handle} {
                    id
                    title
                    fieldTextContent
                    optionHeaderColor
                    fieldBackgroundImage {
                        title
                        alt
                        url
                        width
                        height
                    }

                    ${seoInfo()}
                }
            }

            entries (section: "${search.structure}" limit: ${search.limit}) {
                ... on ${search.structure}_default_Entry {
                    id
                    typeHandle
                    dateCreated
                    url
                    fieldImage {
                        title
                        alt
                        url
                        width
                        height
                    }
                    title
                }
            }
        }
    `

    return query
}
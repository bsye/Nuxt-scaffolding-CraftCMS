import {gql} from 'nuxt-graphql-request';

export default function () {
    const query = gql `
        ...on contentManager_blockListNews_BlockType {
            id
            typeHandle
            responsiveVisibility
            elementQuantity
            listFilter
            isSliderSettings
            selectNews {
                title
                url
                ...on news_default_Entry {
                    id
                    title
                    dateCreated
                    image {
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
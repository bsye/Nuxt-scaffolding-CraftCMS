import {gql} from 'nuxt-graphql-request';

export default function () {
    const query = gql `
        ...on contentManager_listNews_BlockType {
            id
            typeHandle
            optionResponsiveVisibility
            optionElementQuantity
            fieldListFilter
            optionIsSlider
            selectNews {
                title
                url
                ...on news_default_Entry {
                    id
                    title
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
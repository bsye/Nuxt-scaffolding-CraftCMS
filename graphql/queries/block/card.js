import {gql} from 'nuxt-graphql-request';

export default function () {
    const query = gql `
        ...on contentManager_blockCard_BlockType {
            id
            uid
            typeHandle
            responsiveVisibility
            backgroundColor
            alignment
            textColor
            contentWidth
            buttons {
                ...on buttons_BlockType {
                    id
                    buttonStyle
                    buttons {
                        text
                        title
                        url
                        type
                    }
                }
            }
            backgroundImage {
                title
                alt
                url
                width
                height
            }
            icon {
                title
                alt
                url
                width
                height
            }
            textContent
            titleContent
            subtitle
        }
    `

    return query
}
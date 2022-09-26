import {gql} from 'nuxt-graphql-request';

export default function () {
    const query = gql `
        ...on contentManager_blockButtons_BlockType {
            id
            typeHandle
            orientation
            alignment
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
        }
    `

    return query
}
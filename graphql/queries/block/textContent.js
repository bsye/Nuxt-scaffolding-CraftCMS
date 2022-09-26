import {gql} from 'nuxt-graphql-request';

export default function () {
    const query = gql `
        ...on contentManager_blockTextContent_BlockType {
            id
            typeHandle
            textColor
            fontSize
            textContent
        }
    `

    return query
}
import {gql} from 'nuxt-graphql-request';

export default function () {
    const query = gql `
        ...on contentManager_blockTitleContent_BlockType {
            id
            typeHandle
            textColor
            fontSize
            titleContent
        }
    `

    return query
}
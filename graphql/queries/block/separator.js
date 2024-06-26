import {gql} from 'nuxt-graphql-request';

export default function () {
    const query = gql `
        ...on contentManager_blockSeparator_BlockType {
            id
            typeHandle
            backgroundColor
            separator
        }
    `

    return query
}
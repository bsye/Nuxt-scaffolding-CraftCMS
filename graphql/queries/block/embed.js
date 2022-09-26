import {gql} from 'nuxt-graphql-request';

export default function () {
    const query = gql `
        ...on contentManager_blockEmbed_BlockType {
            id
            typeHandle
            embed
        }
    `

    return query
}
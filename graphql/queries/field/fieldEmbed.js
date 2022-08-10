import {gql} from 'nuxt-graphql-request';

export default function () {
    const query = gql `
        ...on contentManager_fieldEmbed_BlockType {
            id
            typeHandle
            fieldEmbed
        }
    `

    return query
}
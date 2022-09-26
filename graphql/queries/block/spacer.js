import {gql} from 'nuxt-graphql-request';

export default function () {
    const query = gql `
        ...on contentManager_blockSpacer_BlockType {
            id
            typeHandle
            spacer
            spacerMobile
        }
    `

    return query
}
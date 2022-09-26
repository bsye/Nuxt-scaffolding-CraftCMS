import {gql} from 'nuxt-graphql-request';

export default function () {
    const query = gql `
        ...on contentManager_blockVideo_BlockType {
            id
            typeHandle
            videoSettings
            video {
                url
                mimeType
            }
        }
    `

    return query
}
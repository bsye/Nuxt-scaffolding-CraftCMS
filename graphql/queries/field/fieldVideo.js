import {gql} from 'nuxt-graphql-request';

export default function () {
    const query = gql `
        ...on contentManager_fieldVideo_BlockType {
            id
            typeHandle
            optionVideo
            fieldVideo {
                url
                mimeType
            }
        }
    `

    return query
}
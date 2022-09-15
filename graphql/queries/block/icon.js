import {gql} from 'nuxt-graphql-request';

export default function () {
    const query = gql `
        ...on contentManager_blockIcon_BlockType {
            id
            imageWidth
            typeHandle
            icon {
                url
                height
                width
                alt
                title
            }
        }
    `

    return query
}
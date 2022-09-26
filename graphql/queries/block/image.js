import {gql} from 'nuxt-graphql-request';

export default function (itemId, search) {
    const query = gql `
        ...on contentManager_blockImage_BlockType {
            id
            typeHandle
            imageWidth
            image {
                title
                alt
                url
                width
                height
            }
        }
    `

    return query
}
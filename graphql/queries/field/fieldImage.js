import {gql} from 'nuxt-graphql-request';

export default function (itemId, search) {
    const query = gql `
        ...on contentManager_fieldImage_BlockType {
            id
            typeHandle
            optionImageWidth
            fieldImage {
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
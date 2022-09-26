import {gql} from 'nuxt-graphql-request';

export default function () {
    const query = gql `
        ...on contentManager_blockGallery_BlockType {
            id
            uid
            typeHandle
            responsiveVisibility
            images {
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
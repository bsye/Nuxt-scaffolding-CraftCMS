import {gql} from 'nuxt-graphql-request';

export default function () {
    const query = gql `
        ...on contentManager_fieldGallery_BlockType {
            id
            uid
            typeHandle
            optionResponsiveVisibility
            fieldImages {
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
import {gql} from 'nuxt-graphql-request';

export default function () {
    const query = gql `
        ...on contentManager_fieldIcon_BlockType {
            id
            optionImageWidth
            typeHandle
            fieldIcon {
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
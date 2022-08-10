import {gql} from 'nuxt-graphql-request';

export default function () {
    const query = gql `
        ...on contentManager_fieldTextContent_BlockType {
            id
            typeHandle
            optionTextColor
            optionFontSize
            fieldTextContent
        }
    `

    return query
}
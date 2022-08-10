import {gql} from 'nuxt-graphql-request';

export default function () {
    const query = gql `
        ...on contentManager_fieldTitle_BlockType {
            id
            typeHandle
            optionTextColor
            optionFontSize
            fieldTitle
        }
    `

    return query
}
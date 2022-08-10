import {gql} from 'nuxt-graphql-request';

export default function () {
    const query = gql `
        ...on contentManager_fieldSeparator_BlockType {
            id
            typeHandle
            optionBackgroundColor
            fieldSeparator
        }
    `

    return query
}
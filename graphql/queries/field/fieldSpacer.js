import {gql} from 'nuxt-graphql-request';

export default function () {
    const query = gql `
        ...on contentManager_fieldSpacer_BlockType {
            id
            typeHandle
            fieldSpacer
            fieldSpacerMobile
        }
    `

    return query
}
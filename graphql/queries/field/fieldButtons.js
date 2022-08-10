import {gql} from 'nuxt-graphql-request';

export default function () {
    const query = gql `
        ...on contentManager_fieldButtons_BlockType {
            id
            typeHandle
            optionOrientation
            optionAlignment
            fieldButtons {
                ...on fieldButtons_BlockType {
                    id
                    fieldButtonStyle
                    fieldButton {
                        text
                        title
                        url
                        type
                    }
                }
            }
        }
    `

    return query
}
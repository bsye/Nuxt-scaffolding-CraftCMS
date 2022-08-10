import {gql} from 'nuxt-graphql-request';

export default function () {
    const query = gql `
        ...on contentManager_fieldCard_BlockType {
            id
            uid
            typeHandle
            optionResponsiveVisibility
            optionBackgroundColor
            optionAlignment
            optionTextColor
            optionContentWidth
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
            fieldBackgroundImage {
                title
                alt
                url
                width
                height
            }
            fieldIcon {
                title
                alt
                url
                width
                height
            }
            fieldTextContent
            fieldTitle
            fieldSubtitle
        }
    `

    return query
}
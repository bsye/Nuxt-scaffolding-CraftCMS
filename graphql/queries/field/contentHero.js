import {gql} from 'nuxt-graphql-request';
import { dispatchQuery } from '../utils';

const supportedBlocks = [
    'fieldTitle',
    'fieldTextContent',
    'fieldSpacer',
    'fieldImage',
    'fieldIcon',
    'fieldSeparator',
    'fieldVideo',
    'fieldButtons',
    'fieldCard',
]

export default function (itemId, search) {
    const query = gql `
        ...on contentManager_contentHero_BlockType {
            id
            typeHandle
            children {
                ${dispatchQuery(supportedBlocks)}
            }
            optionResponsiveVisibility
            optionMinHeight
            optionBackgroundColor
            optionContentWidth
            optionAlignment
            optionSwitch
            optionTextColor

            fieldBackgroundImage {
                title
                alt
                url
                width
                height
            }

            fieldBackgroundVideo {
                url
                mimeType
            }

            fieldBackgroundVideoMobile {
                url
                mimeType
            }
        }
    `

    return query
}
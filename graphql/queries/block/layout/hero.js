import {gql} from 'nuxt-graphql-request';
import { dispatchQuery } from '../../utils';

const supportedBlocks = [
  "titleContent",
  "textContent",
  "spacer",
  "image",
  "icon",
  "separator",
  "video",
  "buttons",
  "card",
];

export default function (itemId, search) {
    const query = gql `
        ...on contentManager_blockHero_BlockType {
            id
            typeHandle
            children {
                ${dispatchQuery(supportedBlocks)}
            }
            responsiveVisibility
            minHeight
            backgroundColor
            contentWidth
            alignment
            conditionalField
            textColor

            backgroundImage {
                title
                alt
                url
                width
                height
            }

            backgroundVideo {
                url
                mimeType
            }

            backgroundVideoMobile {
                url
                mimeType
            }
        }
    `

    return query
}
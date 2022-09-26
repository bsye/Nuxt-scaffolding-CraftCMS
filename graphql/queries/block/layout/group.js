import {gql} from 'nuxt-graphql-request';
import { dispatchQuery } from '../../utils';

const supportedBlocks = [
  "titleContent",
  "textContent",
  "spacer",
  "icon",
  "image",
  "separator",
  "video",
  "buttons",
  "card",
  "embed",
  "gallery",
  "listNews",
];


export default function () {
    const query = gql `
        ...on contentManager_blockGroup_BlockType {
            id
            typeHandle
            children {
                ${dispatchQuery(supportedBlocks)}
            }
            responsiveVisibility
            minHeight
            alignment
            direction
            backgroundColor
            contentWidth
            textColor
            backgroundImage {
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
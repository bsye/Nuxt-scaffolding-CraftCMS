import {gql} from 'nuxt-graphql-request';
import { dispatchQuery } from '../utils';

const supportedBlocks = [
  'fieldTitle',
  'fieldTextContent',
  'fieldSpacer',
  'fieldIcon',
  'fieldImage',
  'fieldSeparator',
  'fieldVideo',
  'fieldButtons',
  'fieldCard',
  'fieldEmbed',
  'fieldGallery',
  'listNews',
]


export default function () {
    const query = gql `
        ...on contentManager_contentGroup_BlockType {
            id
            typeHandle
            children {
                ${dispatchQuery(supportedBlocks)}
            }
            optionResponsiveVisibility
            optionMinHeight
            optionAlignment
            optionDirection
            optionBackgroundColor
            optionContentWidth
            optionTextColor
            fieldBackgroundImage {
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
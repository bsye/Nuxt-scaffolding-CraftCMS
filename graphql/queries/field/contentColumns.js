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
  'fieldEmbed',
  'fieldGallery',
]

export default function () {
  const query = gql `
        ...on contentManager_contentColumns_BlockType {
            id
            typeHandle
            children {
                ...on contentManager_contentColumn_BlockType {
                    id
                    uid
                    typeHandle
                    children {
                        ${dispatchQuery(supportedBlocks)}
                    }
                    optionResponsiveVisibility
                }
            }
            optionResponsiveVisibility
            optionBackgroundColor
            optionTextColor
            optionAlignment
            optionDirection
            optionContentWidth
        }
    `

    return query
}
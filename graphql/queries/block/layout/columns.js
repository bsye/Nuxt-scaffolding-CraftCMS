import {gql} from 'nuxt-graphql-request';
import { dispatchQuery } from '../../utils';

const supportedBlocks = [
  'titleContent',
  'textContent',
  'spacer',
  'image',
  'icon',
  'separator',
  'video',
  'buttons',
  'card',
  'embed',
  'gallery',
]

export default function () {
  const query = gql `
        ...on contentManager_blockColumns_BlockType {
            id
            typeHandle
            children {
                ...on contentManager_blockColumn_BlockType {
                    id
                    uid
                    typeHandle
                    children {
                        ${dispatchQuery(supportedBlocks)}
                    }
                    responsiveVisibility
                }
            }
            responsiveVisibility
            columnNumberMobile
            columnNumberTablet
            columnNumberDesktop
            columnNumberWide
            backgroundColor
            textColor
            alignment
            direction
            contentWidth
        }
    `

    return query
}
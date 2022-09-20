import {gql} from 'nuxt-graphql-request';

import seoInfo from '../seo/seoInfo';
import { dispatchQuery } from '../utils';

const supportedBlocks = [
  'layout/hero',
  'layout/group',
  'layout/columns',
]

export default function () {
    const query = gql`
        query MyQuery($slug: [String], $siteId: [QueryArgument]) {
            entry(slug: $slug, siteId: $siteId) {
                id
                title
                localized {
                  slug
                  siteId
                }
                ...on page_default_Entry {
                    id
                    hideTitle
                    contentManager {
                        ${dispatchQuery(supportedBlocks)}
                    }
                  ${seoInfo()}
                }
            }
        }
    `;
    return query
}
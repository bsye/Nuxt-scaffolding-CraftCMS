import { gql } from 'nuxt-graphql-request';
import seoInfo from '../seo/seoInfo';

import { dispatchQuery } from '../utils';

const supportedBlocks = [
  'layout/hero',
  'layout/group',
  'layout/columns',
]

const entry = function () {
  const query = gql`
        query entry($slug: [String], $siteId: [QueryArgument]) {
            entry(slug: $slug, siteId: $siteId) {
                id
                title
                localized {
                  slug
                  siteId
                }
                ...on news_default_Entry {
                    id
                    dateCreated
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

const entries = function () {
  const query = gql`
        query entries($siteId: [QueryArgument], $limit: Int, $section: [String]) {
            entries (section: $section, siteId: $siteId, limit: $limit) {
                ... on news_default_Entry {
                    id
                    typeHandle
                    dateCreated
                    url
                    image {
                        title
                        alt
                        url
                        width
                        height
                    }
                    title
                }
            }
        }
    `;
  return query
}



export {
  entry,
  entries
}
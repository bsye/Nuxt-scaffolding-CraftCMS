import { gql } from 'nuxt-graphql-request';
import seoInfo from '../seo/seoInfo';

import { dispatchQuery } from '../utils';

const supportedBlocks = [
  'contentHero',
  'contentGroup',
  'contentColumns',
]


export default function (search) {
  const query = gql`
        query MyQuery {
            entry(slug: "${search.slug}", siteId: "${search.siteId}") {
                id
                title
                localized {
                  slug
                  siteId
                }
                ...on ${search.handle} {
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
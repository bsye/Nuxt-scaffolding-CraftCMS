import {gql} from 'nuxt-graphql-request';
import seoInfo from '../seo/seoInfo';
import { dispatchQuery } from '../utils';

const supportedBlocks = [
  'layout/hero',
  'layout/group',
  'layout/columns',
]

const entry = function () {
  const query = gql`
        query MyQuery($slug: [String], $siteId: [QueryArgument]) {
            entry(slug: $slug, siteId: $siteId) {
                id
                ...on homePage_homePage_Entry {
                    id
                    contentManager {
                        ${dispatchQuery(supportedBlocks)}
                    }
                    ${seoInfo()}
                }
            }
        }
    `;
  return query;
};

export { entry }
import { gql } from 'nuxt-graphql-request';
import seoInfo from '../seo/seoInfo';

export default function () {
    const query = gql`
        query MyQuery($siteId: [QueryArgument], $type: [String]) {
            entry(siteId: $siteId, type: $type) {
                id
                ...on newsArchive_newsArchive_Entry {
                    id
                    title
                    textContent
                    ${seoInfo()}
                }
            }
        }
    `;

    return query
}
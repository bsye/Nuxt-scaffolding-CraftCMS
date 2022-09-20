import {gql} from 'nuxt-graphql-request';
import seoInfo from '../seo/seoInfo';

export default function () {
    const query = gql`
        query MyQuery($limit: Int, $siteId: [QueryArgument], $type: [String], $section: [String]) {
            entry(siteId: $siteId, type: $type) {
                id
                ...on newsArchive_newsArchive_Entry {
                    id
                    title
                    textContent
                    ${seoInfo()}
                }
            }

            entries (section: $section, limit: $limit) {
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
import {gql} from 'nuxt-graphql-request';

export default function () {
    const query = gql `
        query MyQuery {
            globalSet {
                ...on siteInfo_GlobalSet {
                    image {
                        url
                    }
                    plainTitle
                    plainDescription
                }
            }
        }`

    return query
}
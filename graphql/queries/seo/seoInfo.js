import {gql} from 'nuxt-graphql-request';


export default function () {
 return gql `seoInfo {
        advanced {
          robots
          canonical
        }
        description
        keywords {
          keyword
          rating
        }
        social {
          twitter {
            title
            image {
              url
            }
            description
          }
          facebook {
            title
            image {
              url
            }
            description
          }
        }
        title
      }`
}
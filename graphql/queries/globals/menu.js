import { gql } from 'nuxt-graphql-request';

export default function ({ menuName }) {
  let query = gql`
    query mainMenu ($navHandle: String, $site: [String]) {
      navigationNodes(navHandle: $navHandle, site: $site) {
        ... menu
      }
    }

    fragment menu on ${menuName}_Node {
      newWindow
      id
      level
      title
      slug
      url
      type
      children {
        id
        nodeUri
        type
        url
        newWindow
        title
        slug
      }
    }
  `;

  return query
}

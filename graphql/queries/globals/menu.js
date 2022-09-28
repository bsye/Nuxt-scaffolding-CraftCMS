import { gql } from 'nuxt-graphql-request';

export default function ({ menuName }) {
  let query = gql`
    query mainMenu ($navHandle: String, $siteId: [QueryArgument]) {
      navigationNodes(navHandle: $navHandle, siteId: $siteId, level: 1) {
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

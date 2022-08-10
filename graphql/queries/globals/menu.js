import {gql} from 'nuxt-graphql-request';

export default function({ menuName, siteId }) {
  let query = gql`
    query mainMenu {
      navigationNodes(siteId: "${siteId}") {
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

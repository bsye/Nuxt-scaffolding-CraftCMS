import {gql} from 'nuxt-graphql-request';

export default function() {
  let query = gql `
    query globals {
      globalSets {
        ... globalsFooter1
        ... globalsFooter2
        ... globalsFooter3
        ... globalsFooter4
      }
    }

    fragment globalsFooter1 on footer1_GlobalSet {
      handle
      footerContent {
        ... text
        ... navigation
      }
    }

    fragment globalsFooter2 on footer2_GlobalSet {
      handle
      footerContent {
        ... text
        ... navigation
      }
    }

    fragment globalsFooter3 on footer3_GlobalSet {
      handle
      footerContent {
        ... text
        ... navigation
      }
    }

    fragment globalsFooter4 on footer4_GlobalSet {
      handle
      footerContent {
        ... text
        ... navigation
      }
    }

    fragment text on footerContent_footerTextContent_BlockType {
      fieldTextContent
    }

    fragment navigation on footerContent_footerNavigationMenu_BlockType {
      fieldNavigationMenu
    }
  `

    return query
}

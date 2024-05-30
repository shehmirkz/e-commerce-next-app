import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql(/* GraphQL */ `
  query GetProducts($tagId: ID!) {
    tags(shopId: "cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ==") {
      nodes {
        name
        position
        displayTitle
        slug
        _id
      }
    }
    catalogItems(
      shopIds: ["cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ=="]
      tagIds: [$tagId]
    ) {
      edges {
        node {
          ... on CatalogItemProduct {
            product {
              title
              description
              _id
              variants {
                _id
                title
                media {
                  URLs {
                    small
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`);

export const GET_ALL_PRODUCTS = gql(/* GraphQL */ `
  query CatalogItems($shopIds: [ID!]!, $tagIds: [ID!]) {
    catalogItems(shopIds: $shopIds, tagIds: $tagIds) {
      edges {
        node {
          ... on CatalogItemProduct {
            product {
              _id
              title
              description
              pricing {
                maxPrice
                displayPrice
              }
              media {
                URLs {
                  original
                  thumbnail
                }
              }
            }
          }
        }
      }
    }
  }
`);

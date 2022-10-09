import { gql } from "@apollo/client";

export const GET_MOST_POPULAR_CARDS = gql`
  query {
    mostPopulars {
      preTitle
      title
      image {
        url
      }
      fromPrice
      currency
      countryCode
      description
    }
  }
`;

export const GET_HIDDEN_GEMS = gql`
  query {
    hiddenGems {
      countryCode
      title
      description
      image {
        url
      }
    }
  }
`;

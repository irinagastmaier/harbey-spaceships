import { gql } from '@apollo/client';

export const GET_SHIPS = gql`
  {
    ships(limit: 100) {
      id
      type
      successful_landings
      name
      missions {
        name
        flight
      }
      image
      active
      id
      model
      year_built
    }
  }
`;

export const SHIP_SEARCH_QUERY = gql`
  query ShipSearchQuery($shipsInput: ShipsFind) {
    ships(find: $shipsInput) {
      id
      name
      type
      missions {
        name
      }
      active
      image
    }
  }
`;

export const GET_SHIP_DETAILS = gql`
  query ShipDetails($id: ID!) {
    ship(id: $id) {
      id
      type
      successful_landings
      name
      missions {
        name
        flight
      }
      image
      active
      id
      model
      year_built
    }
  }
`;

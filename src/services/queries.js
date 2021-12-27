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

//search by name, type or mission

// export const SHIP_SEARCH_QUERY2 = gql`
//   query ShipSearch2($name: String, $mission: String, $type: String) {
//     ships(find: { name: $name, mission: $mission, type: $type }) {
//       id
//       type
//       successful_landings
//       name
//       missions {
//         name
//         flight
//       }
//       image
//       active
//       id
//       model
//       year_built
//     }
//   }
// `;

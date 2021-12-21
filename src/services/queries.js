import { gql } from '@apollo/client';

export const GET_SHIPS = gql`
	query getShips($name: String!, $type: String!, $mission: String!) {
            ships(limit: 10, offset: 10, find: {name: $name, type: $type, mission: $mission}) {
              active
              type
              name
              image
              year_built
              model
              successful_landings
            }
                    
	}
`;

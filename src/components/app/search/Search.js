import { useQuery } from '@apollo/client';
import { SHIP_SEARCH_QUERY } from '../../../services/queries.js';
import useShipFilters from './helpers.js';
import Loading from '../../common/Loading';
import {
  Button,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  const { data, loading, error, refetch } = useQuery(SHIP_SEARCH_QUERY);
  const { operations, models } = useShipFilters();

  if (loading) return <Loading />;
  if (error) return <div>error</div>;

  return (
    <div>
      <InputGroup size="md" w="60%" m="0 auto">
        <Input
          focusBorderColor="teal.700"
          variant="filled"
          borderColor="gray.200"
          //add type and missions
          onChange={(e) => operations.updateFilter('name', e.target.value)}
          type="string"
          placeholder="Enter ship: name, type or mission"
        />
        <InputRightElement width="4.5rem">
          <Icon
            as={FaSearch}
            h={5}
            w={5}
            ml={3}
            _hover={{
              color: '#487999',
            }}
            onClick={() =>
              refetch({
                shipsInput: {
                  name: models.filters.name,
                  type: models.filters.type,
                  // mission: models.filters.mission_name,
                },
              })
            }
          />
        </InputRightElement>
      </InputGroup>
      {/* <div>
        {data.ships.map((ship, i) => (
          <div key={i}>
            <h1 style={{ color: 'red' }}>{ship.name} </h1>
            <h2 style={{ color: 'blue' }}>{ship.type}</h2>

            {ship.missions.map((mission, i) => (
              <div key={i}>{mission.name}</div>
            ))}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Search;

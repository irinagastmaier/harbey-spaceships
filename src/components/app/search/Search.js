import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { SHIP_SEARCH_QUERY } from '../../../services/queries.js';
import useShipFilters from './helpers.js';
import Loading from '../../common/Loading';
import {
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import SearchedShip from '../../ships/SearchedShip.js';

const Search = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { data, loading, error, refetch } = useQuery(SHIP_SEARCH_QUERY);
  const { operations, models } = useShipFilters();

  if (loading) return <Loading />;
  if (error) return <div>error</div>;

  const handleFilter = (e) => {
    e.preventDefault();
    //add type and missions
    operations.updateFilter([e.target.name], e.target.value);
    setShowSearch(true);
  };

  return (
    <FormControl>
      <InputGroup size="md" w="60%" m="0 auto">
        <FormLabel w="40%" pt={2} color="teal.700">
          Enter ship:
        </FormLabel>
        <Input
          focusBorderColor="teal.700"
          variant="filled"
          borderColor="gray.200"
          onChange={handleFilter}
          type="string"
          name="name"
          _placeholder={{ color: 'teal.700' }}
          placeholder="name"
        />
        <Input
          focusBorderColor="teal.700"
          variant="filled"
          borderColor="gray.200"
          onChange={handleFilter}
          type="string"
          name="type"
          _placeholder={{ color: 'teal.700' }}
          placeholder="type"
        />
        <Input
          focusBorderColor="teal.700"
          variant="filled"
          borderColor="gray.200"
          onChange={handleFilter}
          type="string"
          name="mission"
          _placeholder={{ color: 'teal.700' }}
          placeholder="mission"
        />
        <InputRightElement width="4.5rem">
          <Icon
            cursor="pointer"
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
                  mission: models.filters.mission,
                },
              })
            }
          />
        </InputRightElement>
      </InputGroup>
      {showSearch ? (
        <Flex
          direction="row"
          align="center"
          w={['100%', '100%', '90%']}
          m="2rem auto"
          wrap="wrap"
          justify="center"
        >
          {data.ships.map((ship, i) => (
            <div key={i}>
              <SearchedShip ship={ship} />
            </div>
          ))}
        </Flex>
      ) : null}
    </FormControl>
  );
};

export default Search;

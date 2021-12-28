import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { SHIP_SEARCH_QUERY } from '../../../services/queries.js';
import useShipFilters from './helpers.js';
import Loading from '../../common/Loading';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightAddon,
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
    operations.updateFilter([e.target.name], e.target.value);
    setShowSearch(true);
  };

  return (
    <FormControl
      pt={6}
      w={['60%', '72%', '60%']}
      m="0 auto"
      pl={['0', '2rem', '2rem']}
    >
      <InputGroup size="md">
        <Flex
          direction="row"
          align="center"
          wrap="wrap"
          justify="center"
          alignItems="center"
          m="0 auto"
        >
          <Box w={['100%', '85%', '15%']}>
            <FormLabel
              as="span"
              pt={2}
              color="teal.700"
              w="100%"
              fontWeight="bold"
              fontSize="sm"
            >
              Enter ship:
            </FormLabel>
          </Box>
          <Box>
            <Input
              focusBorderColor="teal.700"
              variant="outline"
              borderColor="gray.200"
              onChange={handleFilter}
              type="string"
              name="name"
              w={['15rem', '8rem', '10rem']}
              _placeholder={{ color: 'teal.700' }}
              placeholder="name"
              h="2.2rem"
            />
          </Box>

          <Box>
            <Input
              focusBorderColor="teal.700"
              borderColor="gray.200"
              onChange={handleFilter}
              type="string"
              name="type"
              variant="outline"
              w={['15rem', '8rem', '10rem']}
              _placeholder={{ color: 'teal.700' }}
              placeholder="type"
              h="2.2rem"
            />
          </Box>

          <Box>
            <Input
              focusBorderColor="teal.700"
              variant="outline"
              borderColor="gray.200"
              onChange={handleFilter}
              type="string"
              name="mission"
              w={['15rem', '8rem', '10rem']}
              _placeholder={{ color: 'teal.700' }}
              placeholder="mission"
              h="2.2rem"
            />
          </Box>
          <Box w={['100%', '100%', 0]} pl={['5rem', '5rem', 0]}>
            <InputRightAddon
              w="3rem"
              bg="none"
              _hover={{
                color: '#487999',
              }}
            >
              <Icon
                cursor="pointer"
                as={FaSearch}
                h={5}
                w={5}
                ml={3}
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
            </InputRightAddon>
          </Box>
        </Flex>
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

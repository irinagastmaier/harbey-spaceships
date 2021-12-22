import { useQuery } from '@apollo/client';
import { Flex, Wrap, WrapItem } from '@chakra-ui/react';
import { GET_SHIPS } from '../../services/queries';
import Loading from '../common/Loading';
import Ship from './DefaultShip';

export default function DefaultShips() {
  const { data, loading, error } = useQuery(GET_SHIPS);

  if (loading) return <Loading />;
  if (error) return <pre>{error.message}</pre>;

  return (
    <Flex
      direction="row"
      align="center"
      w={['100%', '100%', '90%']}
      m="2rem auto"
      wrap="wrap"
      justify="center"
    >
      {data.ships
        .filter((ship) => ship.year_built >= 2011)
        .map((ship, i) => {
          return <Ship name={ship.name} type={ship.type} image={ship.image} />;
        })}
    </Flex>
  );
}

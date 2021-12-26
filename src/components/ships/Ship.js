import { useQuery } from '@apollo/client';
import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { GET_SHIP_DETAILS } from '../../services/queries';
import Loading from '../common/Loading';

export default function Ship() {
  let id = localStorage.getItem('ship');
  id = JSON.parse(id);
  const { data, loading, error } = useQuery(GET_SHIP_DETAILS, {
    variables: { id },
  });

  if (loading) return <Loading />;
  if (error) return <pre>{error.message}</pre>;

  return (
    <Box
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
      w={[300, 400, 400]}
      h="auto"
      minW="250"
      style={{ cursor: 'pointer' }}
      margin="2rem auto"
      p={2}
    >
      <Flex
        m="3"
        justifyContent="space-between"
        direction="column"
        alignItems="center"
      >
        <Text
          fontSize={['md', 'lg', 'xl']}
          fontWeight="medium"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          year built: {data.ship.year_built}
        </Text>
        <Box fontSize="2xl">
          <Text fontSize={['xs', 'sm', 'md']}>type: {data.ship.type}</Text>
          {data.ship.model !== null ? <Text>{data.ship.model}</Text> : null}
        </Box>
        <Box fontSize="2xl">
          <Text fontSize={['xs', 'sm', 'md']}>
            Successful landings:{' '}
            {data.ship.successfull_landings === null ? (
              <Text as="span"> {data.ship.successfull_landings}</Text>
            ) : (
              <Text as="span">none</Text>
            )}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

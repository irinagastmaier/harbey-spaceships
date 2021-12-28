import { useSelector, useDispatch } from 'react-redux';
import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

export default function Favourite() {
  const dispatch = useDispatch();
  const favourite = useSelector((state) => state.favouriteReducer.favourite);

  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="center"
        m="0 auto"
        direction="column"
        p={6}
        w={['100%', '100%', '90%']}
        minW="22rem"
      >
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          w="100%"
        >
          <Heading as="h1" size="xl" isTruncated p={6}>
            Your Favourites
          </Heading>
          <Box boxShadow={'2xl'} rounded={'md'} p={6} overflow={'hidden'}>
            {favourite.map((ship, i) => {
              return (
                <Box key={i} w="100%">
                  <Text pl={4} pb={4}>
                    {ship.name}
                    <Icon
                      as={FaTrash}
                      ml={2}
                      h={3}
                      w={3}
                      alignSelf={'center'}
                      color="gray.400"
                      _hover={{
                        color: 'red.500',
                      }}
                      onDoubleClick={() =>
                        dispatch({
                          type: 'REMOVE_FROM_FAVOURITE',
                          payload: ship,
                        })
                      }
                    />
                  </Text>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Flex>
    </>
  );
}

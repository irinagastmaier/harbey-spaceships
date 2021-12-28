import React, { useState } from 'react';
import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

export default function FavoutiteLocalStorage() {
  let favourites = JSON.parse(localStorage.getItem('favourites'));
  const [newFavourites] = useState([favourites]);
  const items = [];

  newFavourites.forEach((ship, i) => {
    items.push(
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box key={i}>
          <Text> {ship.name}</Text>
          <Icon
            as={FaTrash}
            h={4}
            w={4}
            alignSelf={'center'}
            color="gray.400"
            _hover={{
              color: 'gray.500',
            }}
            onDoubleClick={() =>
              dispatch(
                { type: 'REMOVE_FROM_FAVOURITE', payload: ship },
                localStorage.removeItem('favourites'),
                window.location.reload(),
              )
            }
          />
        </Box>
      </Flex>,
    );
  });
  return <div>{items}</div>;
}

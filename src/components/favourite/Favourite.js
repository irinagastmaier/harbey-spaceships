import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Icon, Text } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

export default function Favourite() {
  const dispatch = useDispatch();
  const favourite = useSelector((state) => state.favouriteReducer.favourite);
  let favourites = JSON.parse(localStorage.getItem('favourites'));

  const [newFavourites, setFavourites] = useState([favourites]);
  console.log(newFavourites);

  const names = [];

  newFavourites.forEach((ship, i) => {
    names.push(
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
      </Box>,
    );
  });

  return (
    <div>
      <h1>Your Favourites</h1>
      {names}

      {favourite.map((ship, i) => {
        return (
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
                dispatch({ type: 'REMOVE_FROM_FAVOURITE', payload: ship })
              }
            />
          </Box>
        );
      })}
    </div>
  );
}

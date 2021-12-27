import { useSelector, useDispatch } from 'react-redux';
import { Box, Icon, Text } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';


export default function Favourite() {
  const dispatch = useDispatch();
  const favourite = useSelector((state) => state.favouriteReducer.favourite);
  console.log(favourite);
  return (
    <div>
      <h1>Your Favourites</h1>
      <div>
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
                  dispatch({ type: 'REMOVE_FAVOURITE_SHIP', payload: ship })
                }
              />
            </Box>
          );
        })}
      </div>
    </div>
  );
}

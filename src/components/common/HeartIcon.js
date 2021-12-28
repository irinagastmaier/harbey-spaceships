import { useDispatch } from 'react-redux';
import { Icon } from '@chakra-ui/react';
import { FaRegHeart } from 'react-icons/fa';

const HeartIcon = ({ ship }) => {
  const dispatch = useDispatch();
  return (
    <Icon
      as={FaRegHeart}
      h={7}
      w={7}
      cursor="pointer"
      alignSelf={'center'}
      _hover={{
        color: 'red.500',
      }}
      onClick={() =>
        dispatch(
          { type: 'ADD_TO_FAVOURITE', payload: ship },
          localStorage.setItem('favourites', JSON.stringify(ship)),
        )
      }
    />
  );
};

export default HeartIcon;

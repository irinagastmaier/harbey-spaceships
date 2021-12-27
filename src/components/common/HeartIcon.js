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
      alignSelf={'center'}
      _hover={{
        color: 'red.500',
      }}
      onClick={() => dispatch({ type: 'ADD_TO_FAVOURITE', payload: ship })}
    />
  );
};

export default HeartIcon;
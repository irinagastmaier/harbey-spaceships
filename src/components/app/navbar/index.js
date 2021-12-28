import { useSelector } from 'react-redux';
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Icon,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { GoRocket } from 'react-icons/go';
import { FaRegHeart } from 'react-icons/fa';
import styles from './Navbar.module.css';

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const quantity = useSelector((state) => state.favouriteReducer.quantity);

  return (
    <Box bg={useColorModeValue('gray.100', '#030B10')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Link to="/">
          <Box fontSize="xl" style={{ fontFamily: 'Archivo' }}>
            Harbey Spaceships
            <Icon
              as={GoRocket}
              h={6}
              w={5}
              color={useColorModeValue('teal.900', 'gray.100')}
              ml={1}
              _hover={{
                color: '#487999',
              }}
            />
          </Box>
        </Link>

        <Flex alignItems={'center'}>
          {quantity >= 1 ? (
            <Link to="/favourites">
              {' '}
              <Icon
                as={FaRegHeart}
                h={7}
                w={7}
                alignSelf={'center'}
                _hover={{
                  color: 'red.500',
                }}
                mr={2}
              />
            </Link>
          ) : (
            <Icon
              as={FaRegHeart}
              h={7}
              w={7}
              alignSelf={'center'}
              _hover={{
                color: 'red.500',
              }}
              mr={2}
            />
          )}
          <span className={styles.quantity}> {quantity} </span>
          <Stack direction={'row'} spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}

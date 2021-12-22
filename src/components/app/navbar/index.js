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

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={useColorModeValue('gray.100', '#030B10')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Link to="/">
          <Box>
            Harbey Spaceships
            <Icon
              as={GoRocket}
              h={6}
              w={5}
              color={useColorModeValue('teal.900', 'gray.100')}
              ml={1}
            />
          </Box>
        </Link>

        <Flex alignItems={'center'}>
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

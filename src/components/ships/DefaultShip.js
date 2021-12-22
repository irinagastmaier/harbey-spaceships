import {
  Box,
  chakra,
  Flex,
  Icon,
  Image,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { FaRegHeart } from 'react-icons/fa';

export default function DefaultShip({ image, name, type }) {
  return (
    <Flex
      py={4}
      w="100"
      alignItems="center"
      justifyContent="center"
      direction="row"
      wrap="wrap"
    >
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Image src={image} alt={`Image of the ship ...`} roundedTop="lg" />
        <Flex mt="1" justifyContent="space-between" alignContent="center">
          <Box
            fontSize="2xl"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {name}
          </Box>
          <Tooltip
            label="save as favorite"
            bg="white"
            placement={'top'}
            color={'gray.800'}
            fontSize={'1.2em'}
          >
            <chakra.a href={'#'} display={'flex'}>
              <Icon as={FaRegHeart} h={7} w={7} alignSelf={'center'} />
            </chakra.a>
          </Tooltip>
        </Flex>

        <Flex justifyContent="space-between" alignContent="center">
          <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
            <Box as="span" color={'gray.600'} fontSize="lg">
              {type}
            </Box>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

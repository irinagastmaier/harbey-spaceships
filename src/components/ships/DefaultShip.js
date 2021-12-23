import { Box, Flex, Icon, Image, useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';

export default function DefaultShip({ image, name, type }) {
  const [selectedShip, setSelectedShip] = useState('');

  const urlName = name.toLowerCase().replace(/\s/g, '');

  const handleShip = (name) => {
    setSelectedShip(name);
    if (selectedShip !== null) {
      localStorage.setItem('ship', JSON.stringify(selectedShip));
      window.location.href = `/ship/${urlName}`;
    }
  };

  return (
    <Box
      bg={useColorModeValue('white', '#03171C')}
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
      m={2}
      w={[300, 400, 400]}
      h="auto"
      minW="250"
      value={name}
      onClick={() => handleShip(name)}
      style={{ cursor: 'pointer' }}
    >
      <Image
        src={image}
        alt={`Image of the ship ...`}
        roundedTop="lg"
        w="100%"
        h={[200]}
      />
      <Flex m="3" justifyContent="space-between">
        <Box
          fontSize={['md', 'lg', 'xl']}
          fontWeight="medium"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {name}
        </Box>
        <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
          <Box
            as="span"
            color={useColorModeValue('gray.800', 'gray.400')}
            fontSize={['xs', 'sm', 'md']}
          >
            {type}
          </Box>
        </Box>
      </Flex>

      <Flex justifyContent="end" pr="3" pb="2">
        {/* later this icon will add the item as a favourite - redux */}
        <Icon
          as={FaRegHeart}
          h={7}
          w={7}
          alignSelf={'center'}
          _hover={{
            color: 'red.500',
          }}
        />
      </Flex>
    </Box>
  );
}

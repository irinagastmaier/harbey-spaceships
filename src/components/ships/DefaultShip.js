import { Box, Flex, Image, useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react';
import HeartIcon from '../common/HeartIcon';

export default function DefaultShip({ image, name, type, id, ship }) {
  const [selectedShip, setSelectedShip] = useState('');

  const urlName = name.toLowerCase().replace(/\s/g, '');

  let timer;
  const handleTimer = () => {
    timer = setTimeout(() => {
      window.location.href = `/ship/${urlName}`;
    }, 1000);
    return () => clearTimeout(timer);
  };

  const handleShip = (name) => {
    setSelectedShip(name);
    if (selectedShip !== '') {
      localStorage.setItem('ship', JSON.stringify(id));
      handleTimer();
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
    >
      <Image
        src={image}
        alt={`Image of the ship ...`}
        roundedTop="lg"
        w="100%"
        h={[200]}
        onClick={() => handleShip(name)}
        style={{ cursor: 'pointer' }}
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
        <HeartIcon ship={ship} />
      </Flex>
    </Box>
  );
}

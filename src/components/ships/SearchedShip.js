import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaCheck, FaRegHeart } from 'react-icons/fa';
import { BiXCircle } from 'react-icons/bi';

export default function SearchedShip({ ship }) {
  const [selectedShip, setSelectedShip] = useState('');

  const urlName = ship.name.toLowerCase().replace(/\s/g, '');

  const handleShip = (id) => {
    setSelectedShip(id);
    if (selectedShip !== '') {
      localStorage.setItem('ship', JSON.stringify(selectedShip));
      console.log(selectedShip);
      window.location.href = `/ship/${urlName}`;
    }
  };

  return (
    <Box
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
      m={2}
      w={[300, 400, 400]}
      h="auto"
      minW="250"
      onClick={() => handleShip(ship.id)}
      cursor="pointer"
    >
      <Image
        src={ship.image}
        alt={`Image of the ship ${ship.name}`}
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
          {ship.name}
        </Box>
        <Box fontSize="2xl">
          <Box as="span" fontSize={['xs', 'sm', 'md']}>
            <Text textAlign={'center'}>missions: {ship.missions.length}</Text>

            {ship.active === true ? (
              <Text>
                {' '}
                active:{' '}
                <Icon
                  as={FaCheck}
                  alignSelf={'center'}
                  pt={2}
                  color="teal.300"
                />
              </Text>
            ) : (
              <Text>
                active:
                <Icon
                  as={BiXCircle}
                  alignSelf={'center'}
                  color="red.500"
                  pt={1}
                />
              </Text>
            )}
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

import { useQuery } from '@apollo/client';
import { Box, Flex, Spinner, Text } from '@chakra-ui/react';
import { GET_SHIPS } from '../../services/queries';

const Loading = () => {
  const { loading } = useQuery(GET_SHIPS);

  const display = loading ? 'inherit' : 'none';

  return (
    <Flex
      justifyContent="center"
      wrap="wrap"
      align="center"
      gridGap="1.5rem"
      py="2rem"
    >
      <Box textAlign="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="teal.400"
          role="status"
          position="fixed"
          zIndex="9999"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          display={display}
        >
          <Text display="none">Loading...</Text>
        </Spinner>
      </Box>
    </Flex>
  );
};

export default Loading;

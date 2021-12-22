import { Box, Flex, Spinner, Text } from '@chakra-ui/react';

const Loading = () => {
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
          transform="translate(-50%, -50%)"
          display="inherit"
        >
          <Text display="none">Loading...</Text>
        </Spinner>
      </Box>
    </Flex>
  );
};

export default Loading;

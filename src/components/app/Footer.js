import {
  Box,
  ButtonGroup,
  Flex,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box as="footer" py={10}>
      <Flex
        align={'center'}
        _before={{
          content: '""',
          borderBottom: '1px solid',
          // borderColor: useColorModeValue('gray.200', 'gray.700'),
          flexGrow: 1,
          mr: 8,
        }}
        _after={{
          content: '""',
          borderBottom: '1px solid',
          // borderColor: useColorModeValue('gray.200', 'gray.700'),
          flexGrow: 1,
          ml: 8,
        }}
      >
        <Stack
          direction="row"
          spacing="4"
          align="center"
          justify="space-between"
        >
          <ButtonGroup variant="ghost" color="gray.600">
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/irinagastmaier/"
              aria-label="LinkedIn"
              target="_blank"
              icon={<FaLinkedin fontSize="20px" />}
            />
            <IconButton
              as="a"
              href="https://github.com/irinagastmaier"
              aria-label="GitHub"
              target="_blank"
              icon={<FaGithub fontSize="20px" />}
            />
          </ButtonGroup>

          <Text fontSize="sm">
            &copy; {new Date().getFullYear()} Irina Gastmaier
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
}

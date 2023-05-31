import { Box, Center, Flex } from '@chakra-ui/react';
import React from 'react';

function Footer() {
  return (
    <Center as="footer" py="2rem" borderTop="1px solid #eaeaea">
      <Flex flexDirection={{ base: 'column', md: 'row' }} alignItems="center">
        <span>© 2022 CryptoInform, all rights reserved</span>
        <Box mx="3" display={{ base: 'none', md: 'inline-block' }}>
          {' '}
          |{' '}
        </Box>
        <span> @NorthBei, Made in Taiwan ♡</span>
      </Flex>
    </Center>
  );
}

export default Footer;

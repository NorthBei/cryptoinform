import { Box, Button, Flex, Heading, Spacer } from '@chakra-ui/react';
import React from 'react';

import Link from '@/components/Link';
import { botUrl } from '@/const';
import ContentContainer from '@/layout/ContentContainer';

function Header() {
  return (
    <Box
      as="nav"
      id="header"
      bg="white"
      color="white"
      py="4"
      position="sticky"
      top="0"
      zIndex="10"
    >
      <ContentContainer>
        <Flex alignItems="center">
          <Heading as="h1" size="lg" color="brand.primary">
            <Link href="/">CryptoInform</Link>
          </Heading>
          <Spacer />
          <Link href={botUrl} isExternal>
            <Button colorScheme="brand" borderRadius="20">
              Contact Us
            </Button>
          </Link>
        </Flex>
      </ContentContainer>
    </Box>
  );
}

export default Header;

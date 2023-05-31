import { Box, Container as ChakraContainer } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

function Container(props: ContainerProps) {
  const { children } = props;
  return (
    <ChakraContainer maxW="container.xl">
      <Box px={{ base: '0', md: '4' }}>{children}</Box>
    </ChakraContainer>
  );
}

export default Container;

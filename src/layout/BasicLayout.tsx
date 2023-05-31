import { Box, Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import TerminationModal from '@/components/TerminationModal';
import ContentContainer from '@/layout/ContentContainer';

type BasicLayoutProps = {
  children: ReactNode;
  preHeader: ReactNode | null;
};

const BasicLayout = (props: BasicLayoutProps) => {
  const { children, preHeader = null } = props;
  return (
    <>
      <Flex direction="column" minH="100vh">
        {preHeader}
        <Header />
        <Box as="main" id="content" flex="1" overflowX="hidden">
          <ContentContainer>{children}</ContentContainer>
        </Box>
        <Footer />
      </Flex>
      <TerminationModal />
    </>
  );
};

BasicLayout.defaultProps = {
  preHeader: null,
};

export default BasicLayout;

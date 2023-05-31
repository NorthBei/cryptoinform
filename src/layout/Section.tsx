import { Box, BoxProps, Container, Heading, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
} & BoxProps;

function Section(props: SectionProps) {
  const { children, ...boxProps } = props;
  return (
    <Box as="section" py="24" px="4" {...boxProps}>
      <Container maxW="container.xl">{children}</Container>
    </Box>
  );
}

type TitleProps = {
  title: ReactNode;
  subtitle: ReactNode;
} & BoxProps;

function Title(props: TitleProps) {
  const { title, subtitle } = props;
  return (
    <Box py="12">
      <Heading as="h2" color="brand.secondary" size="lg" textAlign="center">
        {title}
      </Heading>
      <Text
        fontSize="lg"
        color="brand.lightgrey"
        fontWeight="medium"
        textAlign="center"
        mt="5"
      >
        {subtitle}
      </Text>
    </Box>
  );
}

Section.Title = Title;

export default Section;

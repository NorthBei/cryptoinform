import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import NextLink from 'next/link';

function Link(props: LinkProps) {
  const { children, ...linkProps } = props;

  return (
    <ChakraLink
      as={NextLink}
      target={linkProps.isExternal ? '_blank' : '_self'}
      _hover={{ textDecoration: 'none' }}
      {...linkProps}
    >
      {children}
    </ChakraLink>
  );
}

export default Link;

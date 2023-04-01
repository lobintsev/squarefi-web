import React from 'react';
import { Image, keyframes, usePrefersReducedMotion, IconButton } from '@chakra-ui/react';
import { BiCubeAlt } from 'react-icons/bi';


const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const logo = <BiCubeAlt />;

export const Logo = props => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 200s linear`;

  return <IconButton animation={animation}
  colorScheme='yellow' size='sm'
  h={5} w={5} minH={0} minW={0}
  aria-label='SquareFi Logo'
  icon={logo}  {...props}
/> 
};

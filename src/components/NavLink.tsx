// components/NavLink.tsx

import { Link } from 'react-router-dom'
import { Box, useColorModeValue } from '@chakra-ui/react'

interface NavLinkProps {
  children: React.ReactNode
  to: string // `href` becomes `to` in React Router
}

const NavLink = ({ children, to }: NavLinkProps) => {
  return (
    <Box
      as={Link} // Use Link component from react-router-dom
      to={to} // `to` prop for React Router
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}>
      {children}
    </Box>
  )
}

export default NavLink

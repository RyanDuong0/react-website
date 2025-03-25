'use client'

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Text,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NavLink from './NavLink.tsx' // ✅ Import the correct NavLink
import { Image } from 'antd'; // Example for Ant Design
import profilePicture from '../img/profilepicture.jpg';
import { useState, useEffect } from 'react';
import { LuMoon, LuSun } from 'react-icons/lu';
import ThemeToggle from './Theme.js';

const Links = [
  { name: 'Home', path: '/' },
  { name: 'About Me', path: '/projects' },
  { name: 'Projects', path: '/team' }
]

export default function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode();
  const [isClient, setIsClient] = useState(false);

  useEffect(() =>{
    setIsClient(true);
  }, []);

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          {/* Mobile Menu Button */}
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

          {/* Logo & Navigation Links */}
          <HStack spacing={8} alignItems={'center'}>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map(({ name, path }) => (
                <NavLink key={name} to={path}>{name}</NavLink>
              ))}
            </HStack>
          </HStack>

          {/* Profile / Actions */}
          <Flex alignItems={'center'}>
            <ThemeToggle />
            <Menu>
              <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0} />
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {/* Mobile Menu */}
        {isOpen && (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(({ name, path }) => (
                <NavLink key={name} to={path}>{name}</NavLink>
              ))}
            </Stack>
          </Box>
        )}
      </Box>

      <Box p={4}>
        <Flex alignItems="center">
          <Image 
            src={profilePicture}
            alt="Profile Picture"
            width={175}
            height={165}
            style={{
              borderRadius:'50%',
              pointerEvents: 'none' //disable interactions with the image
            }}
          />
          <Box ml={4}>
            <Text fontSize="2.5rem" fontFamily="Libre Franklin, sans-serif">Welcome to Ryan Duong's Website</Text>
            <Text fontSize="2rem">Aspiring Software Engineer from the UK</Text>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

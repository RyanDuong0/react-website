'use client'

import {
  Box,
  Flex,
  Text,
} from '@chakra-ui/react'
import { Image } from 'antd'; // Example for Ant Design
import profilePicture from '../img/profilepicture.jpg';
import Navbar from './Navbar.js';

export default function Main() {

  return (
    <>
    <Navbar />
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

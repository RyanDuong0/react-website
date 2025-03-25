// src/components/Footer.js
import React from 'react';
import { Box, Text, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <Box bg="gray.800" color="white" p={4} textAlign="center">
    <Text>&copy; 2025 Your Name</Text>
    <Box>
      <Link href="https://github.com/your-profile" isExternal>
        <FaGithub size="2rem" />
      </Link>
      <Link href="https://www.linkedin.com/in/your-profile" isExternal>
        <FaLinkedin size="2rem" />
      </Link>
      <Link href="https://twitter.com/your-profile" isExternal>
        <FaTwitter size="2rem" />
      </Link>
    </Box>
  </Box>
);

export default Footer;

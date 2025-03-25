// src/components/About.js
import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';

const About = () => {
  return (
    <Box p={8} bg="gray.100">
      <Heading as="h2" size="lg" mb="4">
        About Me
      </Heading>
      <Text fontSize="lg">
        I am a passionate full-stack developer with a love for building
        interactive and dynamic web applications. My skills include React,
        Node.js, and more.
      </Text>
    </Box>
  );
};

export default About;

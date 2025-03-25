// src/components/Hero.js
import React from 'react';
import { Box, Button, Text, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box
      as={motion.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      bg="teal.500"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      color="white"
    >
      <Heading as="h1" fontSize="5xl" mb="4">
        Welcome to My Portfolio
      </Heading>
      <Text fontSize="xl" mb="6">
        I’m a Full-Stack Developer
      </Text>
      <Button size="lg" colorScheme="teal" variant="solid">
        Learn More
      </Button>
    </Box>
  );
};

export default Hero;

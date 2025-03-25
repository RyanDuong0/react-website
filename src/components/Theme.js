import { IconButton, useColorMode } from '@chakra-ui/react';
import { LuMoon, LuSun } from 'react-icons/lu'; // Import icons from Lucide

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      variant="solid"
      size="sm"
      mr={4}
      _hover={{ bg: 'gray.700' }}
      _active={{ bg: 'gray.900' }}
      onClick={toggleColorMode}
      icon={colorMode === 'light' ? <LuSun /> : <LuMoon />}
      aria-label="Toggle Dark Mode"
    />
  );
};

export default ThemeToggle;

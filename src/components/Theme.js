import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu"; // Import icons from Lucide
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const {toggleColorMode} = useColorMode();
  const [isDingus, setDingus] = useState(true);

  useEffect(() => {
    console.log("adas");
  }, [isDingus]);

  return (
    <IconButton
      variant="solid"
      size="sm"
      mr={4}
      _hover={{ bg: "gray.700" }}
      _active={{ bg: "gray.900" }}
      onClick={toggleColorMode}
      icon={useColorModeValue(<LuSun />, <LuMoon />)}
      aria-label="Toggle Dark Mode"
    />
  );
};

export default ThemeToggle;

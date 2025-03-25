import './App.css';
import Main from './components/Main.js';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';

// Ensure Chakra UI supports dark mode
const theme = extendTheme({
  config: {
    initialColorMode: 'light', // or 'dark' if you want default dark mode
    useSystemColorMode: false,
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Main />
    </ChakraProvider>
  );
}

export default App;

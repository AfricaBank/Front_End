import { useState } from 'react'
import './App.css'
import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react';
import colors from './theme/colors';


const theme = extendTheme({ colors });

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider theme={theme}>
      <Box p={4} bg="primary.doggerBlue.0" color="white">
        {/* Use the primary DoggerBlue color with 100% opacity */}
        <h1>Hello, Chakra UI with Custom Colors!</h1>
      </Box>

      <Box p={4} bg="secondary.green.500" color="white" mt={4}>
        {/* Use the secondary Green color with 100% opacity */}
        <p>This is an example using the secondary Green color.</p>
      </Box>

      <Box p={4} bg="state.red.0" color="white" mt={4}>
        {/* Use the state Red color with 100% opacity */}
        <p>This is an example using the state Red color.</p>
      </Box>
    </ChakraProvider>
  );
}

export default App

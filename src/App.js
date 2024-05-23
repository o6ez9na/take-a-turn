import React from 'react';
import {
  ChakraProvider,
  Box
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box
      backgroundColor={'#2f3231'}

      
      height={'100vh'}
      color={'#82807a'}>
        <h1>Hello World</h1>
      </Box>
    </ChakraProvider>
  );
}

export default App;

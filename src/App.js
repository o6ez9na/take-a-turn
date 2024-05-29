import React from 'react';
import { Center, ChakraProvider, Box, Input, Text } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box backgroundColor={'#2f3231'} height={'100vh'} color={'#82807a'}>
        <Center>
          <Text mt={'30vh'} fontSize={45}>
            Hello World
          </Text>
        </Center>
        <Center>
          <Box width={'20vh'}>
            <Input borderColor={'black'} placeholder="@tag"></Input>
            <Input
              mt={'3px'}
              borderColor={'black'}
              placeholder="@password"
            ></Input>
          </Box>
        </Center>
      </Box>
    </ChakraProvider>
  );
}

export default App;

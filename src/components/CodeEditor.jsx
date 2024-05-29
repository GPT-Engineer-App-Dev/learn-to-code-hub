import React, { useState } from 'react';
import { Box, Button, Textarea, VStack, Heading } from '@chakra-ui/react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const handleRun = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(code);
      setOutput(result);
    } catch (error) {
      setOutput(error.message);
    }
  };

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading as="h2" size="lg">Code Editor</Heading>
        <Textarea
          value={code}
          onChange={handleCodeChange}
          placeholder="Write your code here..."
          size="md"
          height="300px"
          fontFamily="monospace"
          bg="gray.100"
          _focus={{ outline: 'none', borderColor: 'blue.500' }}
        />
        <Button colorScheme="blue" onClick={handleRun}>Run</Button>
        <Box p={4} bg="gray.100" borderRadius="md">
          <Heading as="h3" size="md">Output</Heading>
          <Box as="pre" mt={2} p={2} bg="white" borderRadius="md">
            {output}
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default CodeEditor;
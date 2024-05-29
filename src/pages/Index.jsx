import { Box, Button, Container, Flex, Heading, HStack, Text, VStack, Image, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.700" color="white" padding={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">CodeLearn</Heading>
        <HStack spacing={8}>
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/code-editor">Code Editor</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Container centerContent maxW="container.xl" py={20} textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>Learn to Code, Build Projects, and Get Hired</Heading>
        <Text fontSize="lg" mb={6}>Join our community and start your coding journey today.</Text>
        <Button colorScheme="blue" size="lg">Get Started</Button>
      </Container>

      {/* Featured Courses */}
      <Container maxW="container.xl" py={20}>
        <Heading as="h2" size="xl" mb={10} textAlign="center">Featured Courses</Heading>
        <Flex wrap="wrap" justifyContent="space-around">
          <VStack spacing={4} width="300px" mb={10}>
            <Image src="https://via.placeholder.com/300" alt="Course 1" />
            <Heading as="h3" size="md">Course 1</Heading>
            <Text>Learn the basics of web development with HTML, CSS, and JavaScript.</Text>
          </VStack>
          <VStack spacing={4} width="300px" mb={10}>
            <Image src="https://via.placeholder.com/300" alt="Course 2" />
            <Heading as="h3" size="md">Course 2</Heading>
            <Text>Master front-end development with React and Chakra UI.</Text>
          </VStack>
          <VStack spacing={4} width="300px" mb={10}>
            <Image src="https://via.placeholder.com/300" alt="Course 3" />
            <Heading as="h3" size="md">Course 3</Heading>
            <Text>Get started with back-end development using Node.js and Express.</Text>
          </VStack>
        </Flex>
      </Container>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={10}>
        <Container maxW="container.xl">
          <Flex justifyContent="space-between" alignItems="center" wrap="wrap">
            <Text>&copy; 2023 CodeLearn. All rights reserved.</Text>
            <HStack spacing={4}>
              <Link href="#"><FaFacebook size="24px" /></Link>
              <Link href="#"><FaTwitter size="24px" /></Link>
              <Link href="#"><FaInstagram size="24px" /></Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
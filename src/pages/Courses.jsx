import { Box, Container, Heading, VStack, Image, Text, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const courses = [
  { id: 1, title: "Course 1", description: "Learn the basics of web development with HTML, CSS, and JavaScript.", image: "https://via.placeholder.com/300" },
  { id: 2, title: "Course 2", description: "Master front-end development with React and Chakra UI.", image: "https://via.placeholder.com/300" },
  { id: 3, title: "Course 3", description: "Get started with back-end development using Node.js and Express.", image: "https://via.placeholder.com/300" },
];

const Courses = () => {
  return (
    <Container maxW="container.xl" py={20}>
      <Heading as="h2" size="xl" mb={10} textAlign="center">Available Courses</Heading>
      <Flex wrap="wrap" justifyContent="space-around">
        {courses.map(course => (
          <VStack key={course.id} spacing={4} width="300px" mb={10}>
            <Image src={course.image} alt={course.title} />
            <Heading as="h3" size="md">{course.title}</Heading>
            <Text>{course.description}</Text>
            <Link to={`/courses/${course.id}`}>
              <Button colorScheme="blue">View Details</Button>
            </Link>
          </VStack>
        ))}
      </Flex>
    </Container>
  );
};

export default Courses;
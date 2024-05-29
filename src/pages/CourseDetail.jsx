import { useParams } from "react-router-dom";
import { Box, Container, Heading, VStack, Image, Text, Button } from "@chakra-ui/react";
import { useState } from "react";

const courses = [
  { id: 1, title: "Course 1", description: "Learn the basics of web development with HTML, CSS, and JavaScript.", image: "https://via.placeholder.com/300" },
  { id: 2, title: "Course 2", description: "Master front-end development with React and Chakra UI.", image: "https://via.placeholder.com/300" },
  { id: 3, title: "Course 3", description: "Get started with back-end development using Node.js and Express.", image: "https://via.placeholder.com/300" },
];

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courses.find(course => course.id === parseInt(courseId));
  const [enrolled, setEnrolled] = useState(false);

  const handleEnroll = () => {
    setEnrolled(true);
  };

  if (!course) {
    return <Text>Course not found</Text>;
  }

  return (
    <Container maxW="container.md" py={20}>
      <VStack spacing={4}>
        <Image src={course.image} alt={course.title} />
        <Heading as="h2" size="xl">{course.title}</Heading>
        <Text>{course.description}</Text>
        <Button colorScheme="blue" onClick={handleEnroll} disabled={enrolled}>
          {enrolled ? "Enrolled" : "Enroll"}
        </Button>
      </VStack>
    </Container>
  );
};

export default CourseDetail;
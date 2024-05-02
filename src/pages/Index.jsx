import { Box, Flex, Text, Button, VStack, Input, Heading, Container, Global, css } from '@chakra-ui/react';
import { FaDatabase, FaRocket, FaEnvelope, FaPhone } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Global styles={css`
        body, button, input {
          font-family: 'Courier New', Courier, monospace;
        }
      `} />
      <Flex as="nav" bg="#3D2B1F" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">DBaaS Co.</Heading>
        <Flex gap="4">
          <Button variant="ghost">Features</Button>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Contact</Button>
        </Flex>
      </Flex>
      <Container maxW="container.xl" pt={10}>
        <VStack spacing={10}>
          <Box textAlign="center">
            <Heading as="h1" size="3xl" fontStyle="italic">Your Database, Our Priority</Heading>
            <Text fontSize="lg" mt={4} textDecoration="underline">Manage your data with ease and efficiency.</Text>
            <Button rightIcon={<FaRocket />} colorScheme="orange" mt={6} size="lg">
              Get Started
            </Button>
          </Box>
          <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-around" w="full">
            <Feature icon={<FaDatabase />} title="Reliable Data Storage" description="Secure and scalable solutions to meet your business needs." />
            <Feature icon={<FaRocket />} title="Fast Performance" description="High-speed processing to handle complex queries without delay." />
            <Feature icon={<FaEnvelope />} title="24/7 Support" description="Dedicated support team to ensure your operations run smoothly." />
          </Flex>
          <Box bg="#FFF8DC" p={10} borderRadius="lg">
            <Heading as="h2" size="lg" textAlign="center">About Us</Heading>
            <Text mt={4}>We are leaders in data management, helping businesses harness the power of their data since 2005.</Text>
          </Box>
          <Box as="form" bg="#F4F4F4" p={10} borderRadius="lg" boxShadow="md">
            <VStack spacing={5}>
              <Input placeholder="Your Name" />
              <Input placeholder="Email Address" />
              <Input placeholder="Message" />
              <Button leftIcon={<FaPhone />} colorScheme="yellow" variant="solid">
                Send Message
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

const Feature = ({ icon, title, description }) => (
  <VStack spacing={3} textAlign="center">
    <Box fontSize="3xl" color="blue.500">{icon}</Box>
    <Text fontWeight="bold">{title}</Text>
    <Text>{description}</Text>
  </VStack>
);

export default Index;
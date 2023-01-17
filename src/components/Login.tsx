import { Button, Flex, Input, Text, Link, Image } from '@chakra-ui/react'

const Login = () => {
  return (
    <Flex
      minH="100vh"
      alignItems="flex-start"
      justifyContent="center"
      flexDirection="column"
      gap="10px"
    >
      <Image
        src="/img/msn-logo.png"
        display="flex"
        alignSelf="center"
        mb="30px"
      />

      <Text fontSize="2.4rem" fontWeight="bold" lineHeight="2.4rem" mb="24px">
        Welcome back!
      </Text>

      <Text fontSize="1.4rem" fontWeight="bold">
        E-mail
      </Text>
      <Input
        placeholder="Type your e-mail"
        border="transparent"
        fontSize="1.4rem"
        padding="16px 24px"
        backgroundColor="#EDF3F5"
        height="48px"
        borderRadius="30px"
      />

      <Text fontSize="1.4rem" fontWeight="bold">
        Password
      </Text>
      <Input
        placeholder="Type your password"
        border="transparent"
        fontSize="1.4rem"
        padding="16px 24px"
        backgroundColor="#EDF3F5"
        height="48px"
        borderRadius="30px"
      />
      <Link
        href="#"
        fontSize="1.4rem"
        fontWeight="bold"
        lineHeight="2.4rem"
        color="#005683"
        mt="16px"
      >
        Forgot password?
      </Link>
      <Button
        colorScheme="blue"
        height="48px"
        borderRadius="30px"
        size="lg"
        backgroundColor="#005683"
        width="100%"
        fontSize="1.4rem"
        padding="16px 24px"
        mt="24px"
      >
        Log in
      </Button>
      <Text
        fontSize="1.4rem"
        lineHeight="2.4rem"
        mt="70px"
        display="flex"
        alignSelf="center"
      >
        Don’t have an account?
        <Link
          href="#"
          fontSize="1.4rem"
          fontWeight="bold"
          lineHeight="2.4rem"
          color="#005683"
          ml="4px"
        >
          Sign up
        </Link>
      </Text>
    </Flex>
  )
}

export default Login

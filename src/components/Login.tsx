import { Button, Flex, Input, Text, Link, Image } from '@chakra-ui/react'

const Login = () => {
  return (
    <Flex
      width="100%"
      maxWidth="39rem"
      height="80vh"
      margin="0 auto"
      flexDirection="column"
      gap="1rem"
      padding="1.5rem"
      backgroundColor="#D8F3FF"
    >
      <Image
        src="/img/new-logo.svg"
        display="flex"
        alignSelf="center"
        mt="5.4rem"
        mb="7.2rem"
      />

      <Text fontSize="3.2rem" fontWeight="bold" lineHeight="2.4rem" mb="1.6rem">
        Seja bem vindo!
      </Text>

      <Text fontSize="1.6rem" fontWeight="bold">
        Usuário:
      </Text>
      <Input
        placeholder="Digite seu e-mail"
        border="transparent"
        fontSize="1.4rem"
        padding="1.6rem 2.4rem"
        backgroundColor="#EDF3F5"
        height="4.8rem"
        borderRadius="0.8rem"
      />
      <Button
        colorScheme="blue"
        height="4.8rem"
        borderRadius="0.8rem"
        size="lg"
        backgroundColor="#005683"
        width="100%"
        fontSize="1.6rem"
        padding="1.6rem 2.4rem"
        mt="1rem"
      >
        Entrar
      </Button>
      <Link
        href="#"
        fontSize="1.4rem"
        fontWeight={600}
        lineHeight="2.4rem"
        color="#000"
        mt="7.2rem"
        textAlign="center"
        textUnderlineOffset="0.8rem"
      >
        Conheça o projeto 😀
      </Link>
    </Flex>
  )
}

export default Login

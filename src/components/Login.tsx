import { Button, Flex, Input, Text, Link, Image } from '@chakra-ui/react'

const Login = () => {
  return (
    <Flex
      width="100%"
      maxWidth="39rem"
      margin="0 auto"
      flexDirection="column"
      gap="1rem"
      padding="1.5rem"
    >
      <Image
        src="/img/msn-logo.png"
        display="flex"
        alignSelf="center"
        mb="3rem"
      />

      <Text fontSize="2.4rem" fontWeight="bold" lineHeight="2.4rem" mb="2.4rem">
        Bem vindo de volta!
      </Text>

      <Text fontSize="1.4rem" fontWeight="bold">
        E-mail
      </Text>
      <Input
        placeholder="Digite seu e-mail"
        border="transparent"
        fontSize="1.4rem"
        padding="1.6rem 2.4rem"
        backgroundColor="#EDF3F5"
        height="4.8rem"
        borderRadius="3rem"
      />

      <Text fontSize="1.4rem" fontWeight="bold">
        Senha
      </Text>
      <Input
        placeholder="Digite sua senha"
        border="transparent"
        fontSize="1.4rem"
        padding="1.6rem 2.4rem"
        backgroundColor="#EDF3F5"
        height="4.8rem"
        borderRadius="3rem"
      />
      <Link
        href="#"
        fontSize="1.4rem"
        fontWeight="bold"
        lineHeight="2.4rem"
        color="#005683"
        mt="1.6rem"
      >
        Esqueceu a senha?
      </Link>
      <Button
        colorScheme="blue"
        height="4.8rem"
        borderRadius="3rem"
        size="lg"
        backgroundColor="#005683"
        width="100%"
        fontSize="1.4rem"
        padding="1.6rem 2.4rem"
        mt="2.4rem"
      >
        Entrar
      </Button>
      <Text
        fontSize="1.4rem"
        lineHeight="2.4rem"
        mt="7rem"
        display="flex"
        alignSelf="center"
      >
        Não tem uma conta?
        <Link
          href="#"
          fontSize="1.4rem"
          fontWeight="bold"
          lineHeight="2.4rem"
          color="#005683"
          ml="0.4rem"
        >
          Crie uma.
        </Link>
      </Text>
    </Flex>
  )
}

export default Login

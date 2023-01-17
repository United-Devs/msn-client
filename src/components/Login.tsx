import { Button, Flex, Input, Text, Link, Image } from '@chakra-ui/react'

const Login = () => {
  return (
    <Flex
      width="100%"
      maxWidth="390px"
      alignItems="flex-start"
      justifyContent="center"
      flexDirection="column"
      gap="10px"
      padding="15px"
    >
      <Image
        src="/img/msn-logo.png"
        display="flex"
        alignSelf="center"
        mb="30px"
      />

      <Text fontSize="2.4rem" fontWeight="bold" lineHeight="2.4rem" mb="24px">
        Bem vindo de volta!
      </Text>

      <Text fontSize="1.4rem" fontWeight="bold">
        E-mail
      </Text>
      <Input
        placeholder="Digite seu e-mail"
        border="transparent"
        fontSize="1.4rem"
        padding="16px 24px"
        backgroundColor="#EDF3F5"
        height="48px"
        borderRadius="30px"
      />

      <Text fontSize="1.4rem" fontWeight="bold">
        Senha
      </Text>
      <Input
        placeholder="Digite sua senha"
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
        Esqueceu a senha?
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
        Entrar
      </Button>
      <Text
        fontSize="1.4rem"
        lineHeight="2.4rem"
        mt="70px"
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
          ml="4px"
        >
          Crie uma.
        </Link>
      </Text>
    </Flex>
  )
}

export default Login

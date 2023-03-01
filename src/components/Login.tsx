import Link from 'next/link'

import {
  Button,
  Flex,
  Input,
  Text,
  Link as ChakraLink,
  Image
} from '@chakra-ui/react'

const Login = () => {
  return (
    <Flex
      width="100%"
      height="80vh"
      margin="0 auto"
      flexDirection="column"
      gap="1rem"
      padding="1.5rem"
      backgroundColor="bgBlue"
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
        backgroundColor="componentBgColor"
        height="4.8rem"
        borderRadius="0.8rem"
      />
      <Link href="/list">
        <Button
          colorScheme="blue"
          height="4.8rem"
          borderRadius="0.8rem"
          size="lg"
          backgroundColor="iconColor"
          width="100%"
          fontSize="1.6rem"
          padding="1.6rem 2.4rem"
          mt="1rem"
        >
          Entrar
        </Button>
      </Link>

      <Flex flexDir="column" justifyContent="center" gap="1rem" mt="5rem">
        <ChakraLink
          href="https://github.com/United-Devs/msn-client"
          isExternal
          fontSize="1.4rem"
          fontWeight={600}
          lineHeight="2.4rem"
          color="black"
          textAlign="center"
          textUnderlineOffset="0.8rem"
        >
          Conheça o projeto
        </ChakraLink>

        <Text
          fontSize="1.4rem"
          fontWeight={600}
          lineHeight="2.4rem"
          color="black"
          textAlign="center"
          textUnderlineOffset="0.8rem"
        >
          <Link href="/privacy-policy">Política de Privacidade</Link>
        </Text>
      </Flex>
    </Flex>
  )
}

export default Login

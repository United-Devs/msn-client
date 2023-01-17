import { Flex } from '@chakra-ui/react'

import Login from './Login'

const Main = () => {
  return (
    <Flex
      minH="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Login />
    </Flex>
  )
}

export default Main

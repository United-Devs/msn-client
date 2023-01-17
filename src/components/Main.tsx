import { Flex } from '@chakra-ui/react'

import Login from './Login'

const Main = () => {
  return (
    <Flex
      minH="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      background="url(./img/bg-waves.png) no-repeat"
      backgroundPosition="50% 0%"
    >
      <Login />
    </Flex>
  )
}

export default Main

import { Flex } from '@chakra-ui/react'
import Login from 'components/Login'

const Main = () => {
  return (
    <Flex
      minH="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      backgroundPosition="50% 0%"
      backgroundColor="#D8F3FF"
    >
      <Login />
    </Flex>
  )
}

export default Main

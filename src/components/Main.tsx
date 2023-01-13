import { Flex, Text } from '@chakra-ui/react'

const Main = () => {
  return (
    <Flex
      bg="aliceblue"
      minH="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="4rem" fontWeight="semibold">
        Next.js + Chakra UI
      </Text>
    </Flex>
  )
}

export default Main

import { ReactNode } from 'react'

import { Flex, VStack } from '@chakra-ui/react'

export type MessagesContainerProps = {
  children: ReactNode
}

const MessagesContainer = ({ children }: MessagesContainerProps) => (
  <Flex
    flex="1"
    backgroundImage="/img/backgroundChat.jpg"
    backgroundSize="cover"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    p="2rem"
  >
    <VStack w="100%" maxH="75vh" overflowY="auto">
      {children}
    </VStack>
  </Flex>
)

export default MessagesContainer

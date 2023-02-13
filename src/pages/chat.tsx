import { useCallback, useContext } from 'react'

import { Flex } from '@chakra-ui/react'
import {
  Profile,
  ChatKeyboard,
  ChatMessage,
  MessagesContainer
} from 'components'
import { ChatContext } from 'contexts/chatContext'
import { profileMock } from 'mocks/profile'

const Chat = () => {
  const {
    state: { messages }
  } = useContext(ChatContext)

  const renderMessages = useCallback(() => {
    return (
      <MessagesContainer>
        {messages.map(({ message, isFriend }, index) => (
          <ChatMessage key={index} message={message} isFriend={isFriend} />
        ))}
      </MessagesContainer>
    )
  }, [messages])

  return (
    <Flex bg="gray" minH="100vh" flexDir="column">
      <Profile {...profileMock} />
      {renderMessages()}
      <ChatKeyboard />
    </Flex>
  )
}

export default Chat

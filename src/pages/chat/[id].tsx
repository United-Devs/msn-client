import { useCallback, useContext, useEffect } from 'react'

import { useRouter } from 'next/router'

import { Flex } from '@chakra-ui/react'
import {
  Profile,
  ChatKeyboard,
  ChatMessage,
  MessagesContainer
} from 'components'
import { ChatContext } from 'contexts/chatContext'
import { chatList } from 'mocks/list'

const Chat = () => {
  const router = useRouter()
  const { id } = router.query

  const selectedUser = chatList.find((user) => user.id === Number(id))

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

  useEffect(() => {
    if (!selectedUser) router.push('/list?user_not_found')
  }, [router, selectedUser])

  return (
    <Flex bg="gray" minH="100vh" flexDir="column">
      {selectedUser && (
        <Profile
          name={selectedUser.name}
          status={selectedUser.status}
          photo={selectedUser.src}
        />
      )}

      {renderMessages()}
      <ChatKeyboard />
    </Flex>
  )
}

export default Chat
